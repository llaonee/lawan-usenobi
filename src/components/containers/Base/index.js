import React, { Component } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../config';
import Styles from './styles';


export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderHeader = this.renderHeader.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderBottom = this.renderBottom.bind(this);
  }

  renderHeader() {
    const { renderHeader } = this.props;
    if (renderHeader) {
      return renderHeader;
    }
    return <View />;
  }

  renderMain() {
    const {
      children,
      refreshControl,
    } = this.props;
    return (
      <ScrollView
        ref={(ref) => {
          this._scrollViewRef = ref;
        }}
        refreshControl={refreshControl}
        onEndReachedThreshold={0.2}
        onScroll={() => {}}
        onMomentumScrollEnd={() =>  {}}
        scrollEventThrottle={16}
        overScrollMode={ 'never'}>
        {children}
      </ScrollView>
    )
  }

  renderBottom() {
    const { renderBottom } = this.props;
    if (renderBottom) {
      return renderBottom;
    }

    return <View />;
  }

  render() {
    return (
      <SafeAreaView
        style={[
          Styles.container,{backgroundColor: Colors.main.baseBackground1}
        ]}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        {this.renderHeader()}
        <LinearGradient
          style={Styles.container}
          colors={[
            Colors.main.baseBackground1,
            Colors.main.baseBackground2,
            Colors.main.baseBackground2,
          ]}>
          <KeyboardAvoidingView style={[Styles.container]}>
            {this.renderMain()}
            {this.renderBottom()}
          </KeyboardAvoidingView>
        </LinearGradient>
      </SafeAreaView>

    )
  }
}