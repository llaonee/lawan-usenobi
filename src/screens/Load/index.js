import React, { useEffect } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../config";
import { getLocalStorage } from "../../config/Storage";
import { NobiLogo } from "../../config/Svgs";
import * as NavigationService from '../../navigation/NavigationApp';
import Styles from './styles';

export default function Load() {

  useEffect(() => {
    const dataLocal = () => {
      setTimeout( async () => {
        const data = await getLocalStorage()
        if (data !== null && data.logIn === 'isLogIn') {
          NavigationService.mainTab()
        } else {
          NavigationService.resetStack('Login')
        }
      }, 3000)

    }
    dataLocal()
  },[])
  return (
    <LinearGradient
      style={Styles.container}
      colors={[
        Colors.main.baseBackground1,
        Colors.main.baseBackground2,
        Colors.main.baseBackground2,
      ]}>
        <View style={Styles.mainLogo}>
          <NobiLogo height={100} width={100}/>
        </View>
    </LinearGradient>
  )
}