import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import { Slider, Input, Button } from 'react-native-elements'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameLocation: '',
            teamNo: 0,
            scouter: '',
            matchNo: 0,
            startingPosition: '',
            crossLine: '',
            crossChecked: false,
            sandLowGoal: 0,
            sandOutGoal: 0,
            sandInGoal: 0,
            teleopLowGoal: 0,
            teleopOutGoal: 0,
            teleopInGoal: 0,
            cpLevelOne: '',
            cpLevelTwo: '',
            cpOneChecked: false,
            cpTwoChecked: false,
            inRendezVous: '',
            inRendezVousCheck: false,
            climb: '',
            climbCheck: false,
            balanced: '',
            balancedCheck: false,
            withBuddy: '',
            withBuddyCheck: false,
            comments: '',
            value: '',
            qrExist: false
        }

        this.gameLocationRef = React.createRef()
        this.teamNoRef = React.createRef();
        this.scouterRef = React.createRef();
        this.matchNoRef = React.createRef();
        this.allianceColorRef = React.createRef();
        this.startingPositionRef = React.createRef()
        this.crossLineRef = React.createRef();
        this.sandLowGoalRef = React.createRef();
        this.sandOutGoalRef = React.createRef();
        this.sandInGoalRef = React.createRef();
        this.teleopLowGoalRef = React.createRef()
        this.teleopOutGoalRef = React.createRef();
        this.teleopInGoalRef = React.createRef();
        this.cpLevelOneRef = React.createRef();
        this.cpLevelTwoRef = React.createRef();
        this.inRendezVousRef = React.createRef()
        this.climbRef = React.createRef();
        this.balancedRef = React.createRef();
        this.withBuddyRef = React.createRef();
        this.commentsRef = React.createRef();
    }

    handleCommentsChange(e) {
        //console.log('comment is '+e.nativeEvent.text);
        this.setState({
            comments: e.nativeEvent.text
        })
    }

    handleScouterChange(e) {
      //console.log('comment is '+e.nativeEvent.text);
      this.setState({
          scouter: e.nativeEvent.text
      })
  }

  handleGameLocationChange(e) {
    //console.log('comment is '+e.nativeEvent.text);
    this.setState({
        gameLocation: e.nativeEvent.text
    })
}

    handleTeamNumberChange(e) {
        //console.log("setting to "+parseInt(e.nativeEvent.text))
        this.setState({
          teamNo: e.nativeEvent.text,
        })
    }

    handleTeamNumberChange(e) {
      //console.log("setting to "+parseInt(e.nativeEvent.text))
      this.setState({
        teamNo: e.nativeEvent.text,
      })
    }

    handleStartingPositionChange(e) {
      //console.log("setting to "+parseInt(e.nativeEvent.text))
      this.setState({
        startingPosition: e.nativeEvent.text,
      })
    }

    handleMatchNumberChange(e) {
      //console.log("setting to "+parseInt(e.nativeEvent.text))
      this.setState({
        matchNo: e.nativeEvent.text,
      })
  }
    
    handleSubmit() {
        var sendThis = {
          gameLocation: this.state.gameLocation,
          teamNo: this.state.teamNo,
          scouter: this.state.scouter,
          matchNo: this.state.matchNo,
          startingPosition: this.state.startingPosition,
          crossLine: this.state.crossLine,
          sandLowGoal: this.state.sandLowGoal,
          sandOutGoal: this.state.sandOutGoal,
          sandInGoal: this.state.sandInGoal,
          teleopLowGoal: this.state.teleopLowGoal,
          teleopOutGoal: this.state.teleopOutGoal,
          teleopInGoal: this.state.teleopInGoal,
          cpLevelOne: this.state.cpLevelOne,
          cpLevelTwo: this.state.cpLevelTwo,
          inRendezVous: this.state.inRendezVous,
          climb: this.state.climb,
          balanced: this.state.balanced,
          withBuddy: this.state.withBuddy,
          comments: this.state.comments
        }; // SEND THIS TO OTHER CLIENTS
        
        //console.log(sendThis)

        this.setState({
            value: JSON.stringify(sendThis),
            qrExist: true
        })
    }

    clear(){
      this.setState({
        gameLocation: '',
            teamNo: 0,
            scouter: '',
            matchNo: 0,
            startingPosition: '',
            crossLine: '',
            crossChecked: false,
            sandLowGoal: 0,
            sandOutGoal: 0,
            sandInGoal: 0,
            teleopLowGoal: 0,
            teleopOutGoal: 0,
            teleopInGoal: 0,
            cpLevelOne: '',
            cpLevelTwo: '',
            cpOneChecked: false,
            cpTwoChecked: false,
            inRendezVous: '',
            inRendezVousCheck: false,
            balanced: '',
            balancedCheck: false,
            climb: '',
            climbCheck: false,
            withBuddy: '',
            withBuddyCheck: false,
            comments: '',
            value: '',
            qrExist: false
      })
    }

    render() {
        const qrCode = <QRCode value={this.state.value}
        logoSize={90}
        BackgroundColor='transparent'
        style={styles.qrContainer}/>
        const noqrCode = <Text></Text>
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
                    <Text style={styles.titleText}> Basic Information</Text>

                    <Input
                    placeholder='Scouter'
                    onChange = {(val) => {
                            this.handleScouterChange(val)
                        }
                    }
                    value={this.state.scouter}
                    />

<Text> </Text>

                    <Input
                    placeholder='Game Location'
                    onChange = {(val) => {
                            this.handleGameLocationChange(val)
                        }
                    }
                    value={this.state.gameLocation}
                    />

<Text> </Text>

                    

                    <Input
                    placeholder='Team Number'
                    keyboardType='numeric'
                    onChange = {(val) => {
                            this.handleTeamNumberChange(val)
                        }
                    }
                    value={this.state.teamNo}
                    />
                    <Text> </Text>    

                    <Input
                    placeholder='Match Number'
                    keyboardType='numeric'
                    onChange = {(val) => {
                            this.handleMatchNumberChange(val)
                        }
                    }
                    value={this.state.matchNo}
                    />
                    <Text></Text>
                    <Input
                    placeholder='Starting Position'
                    onChange = {(val) => {
                            this.handleStartingPositionChange(val)
                        }
                    }
                    value={this.state.startingPosition}
                    />
                    
                    <Text></Text>
                    <Text  style={styles.titleText}> Sandstorm Period</Text>
                      <CheckBox
                      title = "Crossed Line?"
                      onPress={() => {
                        if(this.state.crossLine=="y"){
                          this.setState({
                            crossLine: "n",
                            crossChecked: false
                          })
                        }else{
                          this.setState({
                            crossLine: "y",
                            crossChecked: true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.crossChecked}></CheckBox>

                    <Text> Low Goal: {this.state.sandLowGoal} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={15}
                        onValueChange={(val) =>  {
                            this.setState({
                              sandLowGoal: val
                            })
                            //console.log("setting hatchRating to "+val)
                        }}
                        ref={component => this._cargoRef = component}
                        value={this.state.sandLowGoal}
                    />
                    <Text> High Goal: {this.state.sandOutGoal} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={15}
                        onValueChange={(val) =>  {
                            this.setState({
                              sandOutGoal: val
                            })
                        }}
                        ref={component => this._cargoRef = component}
                        value={this.state.sandOutGoal}
                    />
                    <Text> Inner Goal: {this.state.sandInGoal} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={15}
                        onValueChange={(val) =>  {
                            this.setState({
                              sandInGoal: val
                            })
                        }}
                        ref={component => this._cargoRef = component}
                        value={this.state.sandInGoal}
                    />
                    <Text></Text>
                    <Text  style={styles.titleText}>Teleoperated Period</Text>
                    <Text></Text>
                    <Text> Low Goal: {this.state.teleopLowGoal} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={30}
                        onValueChange={(val) =>  {
                            this.setState({
                              teleopLowGoal: val
                            })
                        }}
                        ref={component => this._cargoRef = component}
                        value={this.state.teleopLowGoal}
                    />
                    <Text> High Goal: {this.state.teleopOutGoal} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={30}
                        onValueChange={(val) =>  {
                            this.setState({
                              teleopOutGoal: val
                            })
                        }}
                        ref={component => this._cargoRef = component}
                        value={this.state.teleopOutGoal}
                    />
                    <Text> Inner Goal: {this.state.teleopInGoal} </Text>
                    <Slider
                        value={0}
                        step={1}
                        minimumValue={0}
                        maximumValue={30}
                        onValueChange={(val) =>  {
                            this.setState({
                              teleopInGoal: val
                            })
                        }}
                        ref={component => this._cargoRef = component}
                        value={this.state.teleopInGoal}
                    />
                      <CheckBox
                      title = "Control Panel Level 1"
                      onPress={() => {
                        if(this.state.cpLevelOne=="y"){
                          this.setState({
                            cpLevelOne: "n",
                            cpOneChecked:false
                          })
                        }else{
                          this.setState({
                            cpLevelOne: "y",
                            cpOneChecked:true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.cpOneChecked}></CheckBox>
                      <CheckBox
                      title = "Control Panel Level 2"
                      onPress={() => {
                        if(this.state.cpLevelTwo=="y"){
                          this.setState({
                            cpLevelTwo: "n",
                            cpTwoChecked:false
                          })
                        }else{
                          this.setState({
                            cpLevelTwo: "y",
                            cpTwoChecked:true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.cpTwoChecked}></CheckBox> 
                    <Text> </Text>  
                    <CheckBox
                      title = "In Rendez Vous?"
                      onPress={() => {
                        if(this.state.inRendezVous=="y"){
                          this.setState({
                            inRendezVous: "n",
                            inRendezVousCheck:false
                          })
                        }else{
                          this.setState({
                            inRendezVous: "y",
                            inRendezVousCheck:true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.inRendezVousCheck}></CheckBox> 
                      <CheckBox
                      title = "Successful Climb?"
                      onPress={() => {
                        if(this.state.climb=="y"){
                          this.setState({
                            climb: "n",
                            climbCheck:false
                          })
                        }else{
                          this.setState({
                            climb: "y",
                            climbCheck:true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.climbCheck}></CheckBox>
                      <CheckBox
                      title = "Balanced Climb?"
                      onPress={() => {
                        if(this.state.balanced=="y"){
                          this.setState({
                            balanced: "n",
                            balancedCheck:false
                          })
                        }else{
                          this.setState({
                            balanced: "y",
                            balancedCheck:true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.balancedCheck}></CheckBox> 
                      <CheckBox
                      title = "With Buddy?"
                      onPress={() => {
                        if(this.state.withBuddy=="y"){
                          this.setState({
                            withBuddy: "n",
                            withBuddyCheck:false
                          })
                        }else{
                          this.setState({
                            withBuddy: "y",
                            withBuddyCheck:true
                          })
                        }
                      }}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                      checkedColor="red"
                      checked={this.state.withBuddyCheck}></CheckBox> 
                    <Text></Text>
                    <Input
                    placeholder='Comments...'
                    onChange = {(val) => {
                            this.handleCommentsChange(val)
                        }
                    }
                    value={this.state.comments}
                    />

<Text> </Text>


                    
                    <View style={styles.qrContainer}>
                    {this.state.qrExist ? qrCode:noqrCode}
                    </View>
                    

<Text> </Text>
                    


                    <Button
                    title="Create QR"
                    onPress={() => this.handleSubmit()}
                    />
                    <Text> </Text>
                    <Button
                    title="Clear"
                    onPress={() => this.clear()}
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
  qrContainer:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingBottom: 5,
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold'
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
  }
});
