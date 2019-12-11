import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Slider, Input, Button } from 'react-native-elements'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamNumber: 9999,
            hatchRating: 0,
            cargoRating: 0,
            climbRating: 0,
            comment: '',
        }

        this.teamNumRef = React.createRef()
        this.hatchRef = React.createRef();
        this.cargoRef = React.createRef();
        this.climbRef = React.createRef();
        this.commentRef= React.createRef();
    }

    handleCommentsChange(e) {
        console.log('comment is '+e.nativeEvent.text);
        this.setState({
            comment: e.nativeEvent.text
        })
    }

    handleTeamNumberChange(e) {
        console.log("setting to "+parseInt(e.nativeEvent.text))
        this.setState({
            teamNumber: parseInt(e.nativeEvent.text),
        })
    }
    
    handleSubmit() {
        // will implement clearing if we have time lmao
        console.log("submitting");
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                <Image
                    source={
                    __DEV__
                        ? require('../assets/images/robot-dev.png')
                        : require('../assets/images/robot-prod.png')
                    }
                    style={styles.welcomeImage}
                />
                
                </View>
                
               


                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', padding:25}}>
        
                    
                    <Text> Hatch rating: {this.state.hatchRating} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        onValueChange={(val) =>  {
                            this.setState({
                                hatchRating: val
                            })
                            console.log("setting hatchRating to "+val)
                        }}
                        ref={component => this._cargoRef = component}
                    />

                    <Text> Climb rating: {this.state.climbRating} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        onValueChange={(val) =>  {
                            this.setState({
                                climbRating: val
                            })
                            console.log("setting climbsRating to "+val)
                        }}
                    />

                    <Text> Cargo rating: {this.state.cargoRating} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        onValueChange={(val) =>  {
                            this.setState({
                                cargoRating: val
                            })
                            console.log("setting cargoRating to "+val)
                            console.log()
                        }}
                    />

                    <Input
                    placeholder='Comments...'
                    onChange = {(val) => {
                            this.handleCommentsChange(val)
                        }
                    }
                    />

<Text> </Text>


                    <Input
                    placeholder='Team Number'
                    keyboardType='numeric'
                    onChange = {(val) => {
                            this.handleTeamNumberChange(val)
                        }
                    }
                    />

<Text> </Text>



                    <Button
                    title="Submit"
                    onPress={() => this.handleSubmit()}
                    />
                </View>
            </ScrollView>
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
