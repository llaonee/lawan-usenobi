import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../../config';
import { TabNobiActive, TabNobiInActive, TabTradeActive, TabTradeInActive } from '../../../config/Svgs';

export default function MainTab(props) {
  const {
    state: { routes, index },
    navigation,
  } = props;

  const renderMainView = React.useMemo(() => {
    return (
      <View style={Styles.tabBarContainer}>
        {routes.map((item, idx) => {
          const {
            params: { icon },
          } = item;
          return (
            <TouchableWithoutFeedback
              key={item.key}
              onPress={() => {navigation.navigate(item.name);
                }
              }>
              <View style={[Styles.iconContainer]}>
                {index === idx ?
                icon === 'nobi' ? <TabNobiActive /> : <TabTradeActive />
                : 
                icon === 'trade' ? <TabTradeInActive /> : <TabNobiInActive />}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }, [
    index,
    navigation,
    routes,
  ]);
  return <View style={Styles.container}>{renderMainView}</View>;
}

const Styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 104,
    alignContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.main.baseBlack,
    height: 64,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopWidth: 1,
  },
  iconContainer: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

MainTab.propTypes = {
  navigation: PropTypes.objectOf(Object).isRequired,
  state: PropTypes.objectOf(String).isRequired,
};
