import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import { Colors } from '../../../config';


export default class component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      label,
      placeholder,
      secureTextEntry,
      image,
      pressShowPass,
      customStyle,
      errorMessage,
      error,
      onPressTextInput,
    } = this.props;
    return (
      <View style={[customStyle]}>
        <Text style={Styles.label} numberOfLines={1}>{label}</Text>
        <View style={Styles.borderMain}>
          <TouchableOpacity
            disabled={true}
            onPress={onPressTextInput}
            style={Styles.touchInput}>
            <TextInput
              style={Styles.inputText}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={Colors.text.placeholder}
              {...this.props}
            />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.imageMain} onPress={pressShowPass}>
            {image !== null && (
              image
            )}
          </TouchableOpacity>
        </View>
        {error === true && (
          <Text style={Styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    );
  }
}

component.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  image: PropTypes.object,
  pressShowPass: PropTypes.func,
  customStyle: PropTypes.object,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onPressTextInput: PropTypes.func,
};

component.defaultProps = {
  label: '',
  placeholder: '',
  secureTextEntry: false,
  image: null,
  pressShowPass: () => {},
  onPressTextInput: () => {},
  customStyle: null,
  error: false,
  errorMessage: '',
};
