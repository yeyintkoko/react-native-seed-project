import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
var Carousel = require('react-native-carousel');

class Dashboard extends Component<Props> {
  state = {
    transactions: [
      {
        title: 'ATM Lagos',
        amount: '- N 450.00',
        status: 'OUT',
        date: 'Today',
        type: 'Bank Withdraw'
      },
      {
        title: 'ATM Lagos',
        amount: '+ N 450.00',
        status: 'IN',
        date: 'Yesterday',
        type: 'Bank Withdraw'
      },
      {
        title: '003 645 6548 65',
        amount: '- 100 SP',
        status: 'OUT',
        date: '01/06/2015',
        type: 'Airtime recharge'
      },
      {
        title: 'John Doe',
        amount: '+ N 450.00',
        status: 'IN',
        date: '31/05/2015',
        type: 'Transfer'
      },
      {
        title: '003 645 6548 65',
        amount: '- 100 SP',
        status: 'OUT',
        date: '11/05/2015',
        type: 'Airtime recharge'
      },
      {
        title: 'ATM Lagos',
        amount: '- N 450.00',
        status: 'OUT',
        date: '09/05/2015',
        type: 'Bank Withdraw'
      },

    ]
  }

  renderTransaction(trans, i) {
    const isIn = trans.status === 'IN'
    return (
      <View key={i} style={[styles.trans, {backgroundColor: i%2? '#F1F1F1' : '#FFFFFF'}]}>
        <View style={styles.row}>
          <Text style={[styles.text, styles.transTitle]}>{trans.title}</Text>
          <Text style={[styles.text, styles.transAmount, { color: isIn? '#16967A' : '#E44235' }]}>{trans.amount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.transDate]}>{trans.date}</Text>
          <Text style={[styles.text, styles.transType]}>{trans.type}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { transactions } = this.state
    return (
      <View style={styles.container}>
        <Carousel
        hideIndicators={false} // Set to true to hide the indicators
        indicatorColor="rgba(255,255,255,1.0)" // Active indicator color
        indicatorSize={50} // Indicator bullet size
        indicatorSpace={15} // space between each indicator
        inactiveIndicatorColor="rgba(255,255,255,0.5)" // Inactive indicator color
        indicatorAtBottom={true} // Set to false to show the indicators at the top
        indicatorOffset={0} // Indicator relative position from top or bottom
        onPageChange={()=>{}} // Called when the active page changes
        inactiveIndicatorText= '•' // Inactive indicator content ( You can customize to use any Unicode character )
        indicatorText= '•' // Active indicator content ( You can customize to use any Unicode character )
        animate={false} // Enable carousel autoplay
        delay={5000} // Set Animation delay between slides
        loop={false} // Allow infinite looped animation. Depends on Prop {...animate} set to true.
        >
          <View style={styles.heading}>
            <Text style={[styles.text, styles.balanceLabel]}>Balance</Text>
            <Text style={[styles.text, styles.balanceAmount]}>N 979153.36</Text>
            <Text style={[styles.text, styles.spAmount]}>16.500 SP</Text>
          </View>
          <View style={styles.heading}>
            <Text style={[styles.text, styles.balanceLabel]}>Points</Text>
            <Text style={[styles.text, styles.balanceAmount]}>M 2330.41</Text>
            <Text style={[styles.text, styles.spAmount]}>12.400 PT</Text>
          </View>
        </Carousel>
        <View style={styles.headline}>
          <Text style={[styles.text, styles.headlineText]}>Latest Transactions</Text>
        </View>
        <View style={styles.list}>
          <ScrollView>
            {transactions.map(this.renderTransaction.bind(this))}
          </ScrollView>
        </View>
      </View>
    );
  }
}



const DashboardNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation, screenProps }) => ({
      title: 'Dashboard',
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
  },
  heading: {
    flex: 1,
    backgroundColor: '#B872EF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'ProximaNovaSoft'
  },
  balanceLabel: {
    fontSize: 18,
    lineHeight: 40
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 60
  },
  spAmount: {
    fontSize: 24,
    fontWeight: '600'
  },
  headline: {
    height: 42,
    backgroundColor: '#77439E',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  headlineText: {
    fontSize: 14,
    fontWeight: '500'
  },
  list: {
    flex: 1.5
  },
  trans: {
    height: 65,
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  transTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#959595',
    lineHeight: 25
  },
  transAmount: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25
  },
  transDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#959595'
  },
  transType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#959595'
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
});



const DashboardScene = (props) => <DashboardNavigator screenProps={props} />

const mapStateToProps = state => {
  return {
    credentials: state.credentials
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScene);
