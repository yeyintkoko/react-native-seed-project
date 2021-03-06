import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

class Accounts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Accounts</Text>
      </View>
    )
  }
}

const AccountsNavigator = createStackNavigator({
  Accounts: {
    screen: Accounts,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: 'Accounts',
      headerStyle: {
        height: 56,
        backgroundColor: '#77439E'
      },
      headerTitleStyle: {
        fontSize: 20,
        fontFamily: 'ProximaNovaSoft',
        fontWeight: 'normal',
        color: '#FFFFFF',
        // backgroundColor: 'blue'
      },
      headerTitleContainerStyle: {
        justifyContent: 'center',
        // backgroundColor: 'yellow'
      },
      headerLeft: (
        <TouchableOpacity style={styles.navButton} onPress={()=> {
          screenProps.navigation.toggleDrawer()
        }}>
          <Image source={require('../images/nav-icons/menu_black_18dp.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      ),
      headerRight: (
        <View style={styles.navButton} />
      )
    }),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'ProximaNovaSoft'
  },
  menuIcon: {
    width: 30,
    height: 30,
    tintColor: '#FFFFFF'
  },
  navButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  }
})


const AccountsScene = (props) => <AccountsNavigator screenProps={props} />

const mapStateToProps = state => {
  return {
    credentials: state.credentials
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountsScene);
