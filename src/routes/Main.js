import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Dashboard from '../screens/Dashboard';
import Accounts from '../screens/Accounts';

export default Drawer = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Dashboard',
      drawerLabel: ({ tintColor })=>{
        return (
          <View style={styles.drawerLabel}>
            <Text style={[styles.label, {color: tintColor}]}>Dashboard</Text>
          </View>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-dashboard.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  },
  Accounts: {
    screen: Accounts,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Accounts',
      drawerLabel: ({ tintColor })=>{
        return (
          <View style={styles.drawerLabel}>
            <Text style={[styles.label, {color: tintColor}]}>Accounts</Text>
          </View>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-accounts.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  }
}, {
  drawerWidth: 294,
  // drawerPosition: 'right',
  contentComponent: (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <ImageBackground source={require('../images/side-menu/menu-header-bg.png')} style={styles.bgImage}>
            <View style={styles.row}>
              <Image source={require('../images/side-menu/profile_photo.jpg')} style={styles.avatar} />
              <Text style={styles.name}>Steve Morgan</Text>
            </View>
          </ImageBackground>
        </View>
        <ScrollView>
          <DrawerItems
            activeTintColor='#8D52BA'
            activeBackgroundColor ='#F7F0FC'
            inactiveBackgroundColor = '#FFFFFF'
            inactiveTintColor='#8D52BA'
            {...props}
          />
        </ScrollView>
      </View>
    )
  }

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerSection: {
    height: 153,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 15
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  name: {
    marginLeft: 15,
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'ProximaNovaSoft'
  },
  drawerLabel: {
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#7C7E8B'
  },
  label: {
    fontFamily: 'ProximaNovaSoft',
    color: '#8D52BA',
    // fontWeight: '500',
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: 'transparent'
  },
})
