import React from 'react';
import { ScrollView, StyleSheet, Share } from 'react-native';
import { Card, Slider, Input, Text, Button } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // fake data for nows
            teams: [
            ]
        }
    }
    onShare = async () => {
      try {
        const result = await Share.share({
          message: JSON.stringify(this.state.teams)
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    // componentDidMount() {
    //   this.props.navigation.getParam('asdf').registerListener(function(val) {
    //     this.setState({
    //       teams: [...this.state.teams, val]
    //     })
    //   })
    // }

    render() {
      
      // var temp = this.state.teams[this.state.teams.length-1];
      // const info = this.props.navigation.getParam('asdf');
      // if(info !== temp) {
      //   this.setState({
      //     teams: [...this.state.teams, info]
      //   })
      //   temp = info
      //   console.log("appending "+info + " to this.state")
      // }
      /* const info = this.props.navigation.state.params.asdf; */
      var array = this.state.teams;
      var stuff = {}
      const info = this.props.navigation.state.params;
      if (info == undefined){
        
      } else {
        stuff = JSON.parse(this.props.navigation.state.params.asdf);
        array.push(stuff);
      //console.log(this.props.navigation.state.params.asdf)
      }
      //console.log(this.props.navigation.state.params.asdf);
      //console.log("hello")
      //console.log("info" + info)
      
      //console.log(array);
      
      //console.log("array"+array)
      

      // console.log("asdfasdf" + info)
        return (
            <ScrollView style={styles.container}>
                {   
                    array.map((thing) => {
                        var thing2 = thing
                        var k = Math.random();
                        return(
                        <Card key={k}>
                            <Text style={{fontWeight: 'bold'}}> Team #{thing2.teamNo} </Text>
                            <Text> Scouter: {thing2.scouter} </Text>
                            <Text> Match Number: {thing2.matchNo} </Text>
                            <Text> Starting Position: {thing2.startingPosition} </Text>

                        </Card>
                        )
                        
                    })
                }
<Text></Text>
                <Button title="Share" onPress={this.onShare}></Button>
                <Text></Text>
                <Button title="Clear" onPress={()=>{
                  this.setState({
                    teams: []
                  });
                  //console.log(this.state.teams);
                  this.props.navigation.state.params.asdf = JSON.stringify({})
                  array = [];
                  stuff = {};
                }}>
                

                </Button>
                <Text></Text>
                <Text></Text>
                
            </ScrollView>
          );
    }
}

LinksScreen.navigationOptions = {
  title: 'Data View',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',

  },
});
