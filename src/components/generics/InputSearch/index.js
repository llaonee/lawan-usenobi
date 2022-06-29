import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import { Close, Search } from '../../../config/Svgs';
import { Colors } from '../../../config';

export default class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }

    if (this.props !== nextProps) {
      this.setState({ value: nextProps.value });
      return true;
    }

    return false;
  }

  updateValue(value) {
    const { onChangeText } = this.props;
    this.setState({ value });

    if (onChangeText) {
      onChangeText(value);
    }
  }

  render() {
    const { style, onClearText } = this.props;
    const { value } = this.state;
    return (
      <View style={style}>
        <View
          style={[
            Styles.input.border
          ]}>
          <Search />
          <TextInput
            placeholderTextColor={Colors.text.placeholder}
            allowFontScaling={false}
            {...this.props}
            numberOfLines={1}
            onChangeText={(val) => this.updateValue(val)}
            style={Styles.right.input}
          />
          {value !== '' ? (
            <TouchableOpacity onPress={() => onClearText()}>
             <Close />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

InputSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onClearText: PropTypes.func.isRequired,
  style: PropTypes.objectOf(Object).isRequired,
};
