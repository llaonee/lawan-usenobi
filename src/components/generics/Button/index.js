import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View, Animated } from "react-native";
import PropTypes from 'prop-types'
import Styles from "./styles";
import { Colors } from "../../../config";

const Button = (props) => {
  const { customStyle, labelStyle, label, onSubmit, icon, disabled, loading} = props;
  return (
    <TouchableOpacity 
      disabled={disabled} 
      onPress={onSubmit}>
      <Animated.View style={[Styles.container, customStyle]}>
        {icon ? icon : <View />}
        {loading ? 
          (<ActivityIndicator size='small' color={Colors.main.baseWhite}/>)
        : 
          (<Text style={labelStyle}>{label}</Text>)}
      </Animated.View>
    </TouchableOpacity>
  )
}
export default Button;

Button.propTypes = {
  customStyle: PropTypes.objectOf(Object).isRequired,
  labelStyle: PropTypes.objectOf(Object).isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  customStyle: {},
  labelStyle: {},
  label: '',
  onSubmit: () => {},
  disabled: true,
  loading: false
};

