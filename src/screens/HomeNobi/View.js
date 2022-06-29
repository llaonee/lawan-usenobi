import React, { useEffect, useState } from "react";
import { 
  Image, 
  View, 
  Text, 
  Alert, 
  ToastAndroid, 
  RefreshControl, 
  Animated ,
} from "react-native";
import * as NavigationService from '../../navigation/NavigationApp';
import { useMutation } from "react-query";
import { Base } from "../../components/containers";
import { Colors, Images } from "../../config";
import { Button } from "../../components/generics";

import Styles from './styles';
import { Download, Logout } from "../../config/Svgs";
import { dashboard } from "../../apiServices";
import { clearLocalStorage } from "../../config/Storage";

export default function HomeTrade(props) {

  const { navigation } = props;

  const [data, setData] = useState({
    total_asset: '0',
  });
  const [isRefresh, setRefresh] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0))

  const { isLoading: loading, mutate: postDashboard } = useMutation(
    async () => {
      return await dashboard()
    },
    {
      onSuccess: (res) => {
        setData(res.data,)
        setRefresh(false);
      },
      onError: (err) => {
        ToastAndroid.showWithGravity(
          err.message,
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        )
        setRefresh(false);
      },
    }
  );

  useEffect(() => {
    setRefresh(loading)
    postDashboard()
  },[loading])

  const onLogOut = () => {
    Alert.alert(
      'Keluar',
      'Apakah kamu yakin ingin keluar?',
      [
        {
          text: 'Batal',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            clearLocalStorage()
            NavigationService.resetStack('Login')
          },
        },
      ],
      { cancelable: false }
    );
  };

  const onChangeColor = () => {
    Animated.timing(animation, {
      toValue:1,
      duration: 2500,
      useNativeDriver:false
    }).start( () => {
      Animated.timing(animation,{
        toValue:0,
        duration: 2500,
        useNativeDriver:false
      }).start()
    })
  }

  const boxInterpolation =  animation.interpolate({
    inputRange: [0, 1],
    outputRange:[Colors.main.baseGreen , Colors.text.label]
  })
  const animatedStyle = {
      backgroundColor: boxInterpolation
    }

  return (
    <Base refreshControl={
      <RefreshControl
        refreshing={isRefresh}
        onRefresh={() => {
          setRefresh(true);
          postDashboard()
        }}
      />
    }>
      <Image source={Images.Banner} style={Styles.image}/>
      <View>
        <View style={Styles.label}>
          <Text style={Styles.text.label}>24H Changes </Text>
          <Text style={Styles.text.labelGreen}>+ 11.34%</Text>
        </View>
        <Text style={Styles.text.amount}>${data.total_asset}</Text>
        <Button 
          label="Deposit"
          customStyle={{...Styles.button.container,...animatedStyle}}
          labelStyle={Styles.button.label}
          disabled={false}
          onSubmit={onChangeColor}
          icon={<Download />}
        />
        <Button 
          label="Logout"
          customStyle={Styles.logout.innerContainer}
          labelStyle={Styles.button.label}
          disabled={false}
          onSubmit={onLogOut}
          icon={<Logout />}
        />
      </View>
    </Base>
  )
}