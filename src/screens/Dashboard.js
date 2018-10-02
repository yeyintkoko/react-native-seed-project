import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Clipboard
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
var ImagePicker = require('react-native-image-picker');

type Props = {};
class Dashboard extends Component<Props> {
  state = {
    avatarSource: {}
  }
  uploadPhoto() {
    // More info on all the options is below in the README...just some common use cases shown here
    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
    * The first arg is the options object for customization (it can also be null or omitted for default options),
    * The second arg is the callback which sends object: response (more info below in README)
    */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
        console.log(source)
      }
    });

  }
  render() {
    const { avatarSource } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.uploadPhoto()}>
          <Text style={styles.uploadText}>Upload Photo</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.text}>Text to copy to your clipboard</Text>
          <TouchableOpacity style={styles.copyButton} onPress={()=>Clipboard.setString('Text to copy to your clipboard')}>
            <Text style={styles.clipboardText}>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.screenProps.navigation.toggleDrawer()}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
        </View>
        <Image source={avatarSource} style={styles.avatar} />
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
        // backgroundColor: 'red'
      },
      headerTitleStyle: {
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
  uploadText: {
    margin: 15
  },
  avatar: {
    marginTop: 15,
    width: 80,
    height: 80
  },
  text: {
    fontFamily: 'ProximaNovaSoft'
  },
  textInput: {
    width: 150,
    height: 40
  },
  row: {
    flexDirection: 'row',
  },
  copyButton: {
    marginLeft: 15,
    borderWidth: .5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    borderColor: '#bababa',
    backgroundColor: '#bababa'
  },
  clipboardText: {
    color: '#fafafa'
  },
  menuIcon: {
    width: 30,
    height: 30
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
