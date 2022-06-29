import React, { useState, useEffect } from "react";
import { View, ToastAndroid } from "react-native";
import { useMutation } from "react-query";
import { Base } from "../../components/containers";
import * as NavigationService from '../../navigation/NavigationApp';
import { Button, InputText } from "../../components/generics";
import { Eye, NobiLogo } from "../../config/Svgs";
import Styles from "./styles";
import { login } from "../../apiServices";
import { setLocalStorage } from "../../config/Storage";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [failed, setFailed] = useState(false)
  const [disableButton, setDisableButton] = useState(true)

  const { isLoading: loading, mutate: postLogin } = useMutation(
    async () => {
      const sendData = {
        email: email,
        password: password
      }
      return await login(sendData)
    },
    {
      onSuccess: (res) => {
        setLocalStorage({...res.data, logIn: 'isLogIn'})
        NavigationService.mainTab();
      },
      onError: (err) => {
        setFailed(true)
        ToastAndroid.showWithGravity(
          err.message,
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        )
      },
    }
  );

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if(reg.test(email) === false || loading || email === '' || password === '') {
      setDisableButton(true);
    } else {
      setDisableButton(false)
    }
  },[loading, email, password])
  
  const renderHeader = () => {
    return (
      <View style={Styles.header.container}>
        <NobiLogo width={80} height={30}/>
      </View>
    )
  }

  const renderForm = () => {
    return (
      <View style={Styles.form.container}>
        <InputText
        label={'E-mail Address'}
        placeholder={'Enter E-mail Address'}
        onChangeText={(val) => {
          setEmail(val);
          setFailed(false);
        }}
        value={email}
        keyboardType={'email-address'}
        error={failed}
        errorMessage='Invalid E-mail Address'
        />
        <InputText
        label={'Password'}
        placeholder={'Enter Password'}
        onChangeText={(val) => {
          setPassword(val);
          setFailed(false);
        }}
        value={password}
        secureTextEntry={hidePass}
        error={failed}
        customStyle={{marginTop: 13,}}
        errorMessage='Invalid Password'
        image = {<Eye />}
        pressShowPass = {()=>setHidePass(!hidePass)}
        />
      </View>
    )
  }

  const renderBottom = () => {
    return (
      <View>
        <Button 
          disabled={disableButton}
          label="Login"
          customStyle={Styles.bottom.innerContainer}
          labelStyle={Styles.bottom.label}
          onSubmit={()=>postLogin()}
          loading={loading}
        />
      </View>
    )
  }

  return (
    <Base
      renderHeader={renderHeader()}
      renderBottom={renderBottom()}>
        {renderForm()}
    </Base>
  )
}