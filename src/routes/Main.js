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
import Cards from '../screens/Cards';
import Payments from '../screens/Payments';
import Transfers from '../screens/Transfers';
import Airtime from '../screens/Airtime';
import Settings from '../screens/Settings';

export default Drawer = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Dashboard',
      drawerLabel: ({ tintColor })=>{
        return (
          <Text style={[styles.label, {color: tintColor}]}>Dashboard</Text>
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
          <Text style={[styles.label, {color: tintColor}]}>Accounts</Text>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-accounts.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  },
  Cards: {
    screen: Cards,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Cards',
      drawerLabel: ({ tintColor })=>{
        return (
          <Text style={[styles.label, {color: tintColor}]}>Cards</Text>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-cards.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  },
  Payments: {
    screen: Payments,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Payments',
      drawerLabel: ({ tintColor })=>{
        return (
          <Text style={[styles.label, {color: tintColor}]}>Payments</Text>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-payments.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  },
  Transfers: {
    screen: Transfers,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Accounts',
      drawerLabel: ({ tintColor })=>{
        return (
          <Text style={[styles.label, {color: tintColor}]}>Transfers</Text>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-transfers.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  },
  Airtime: {
    screen: Airtime,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Airtime',
      drawerLabel: ({ tintColor })=>{
        return (
          <Text style={[styles.label, {color: tintColor}]}>Airtime</Text>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-airtime.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation, screenProps}) => ({
      title: 'Settings',
      drawerLabel: ({ tintColor })=>{
        return (
          <Text style={[styles.label, {color: tintColor}]}>Settings</Text>
        )
      },
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/side-menu/ic-settings.png')}
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
              <Text style={styles.name}>John Doe</Text>
            </View>
          </ImageBackground>
        </View>
        <ScrollView>
          <DrawerItems
            activeTintColor='#8D52BA'
            activeBackgroundColor ='#F7F0FC'
            inactiveBackgroundColor = '#FFFFFF'
            inactiveTintColor='#8D52BA'
            itemsContainerStyle={{
              paddingVertical: 0
            }}
            itemStyle={{
              height: 55
            }}
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
    marginBottom: 25,
    marginHorizontal: 20
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
  icon: {
    width: 30,
    height: 30
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
