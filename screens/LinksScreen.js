import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { Card, Slider, Input, Text } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // fake data for nows
            teams: [
                {
                "cargoRating": 0,
                "climbRating": 23,
                "comment": "aaa",
                "hatchRating": 0,
                "teamNumber": 9939,
              },
              {
                "cargoRating": 123,
                "climbRating": 3,
                "comment": "some additional comments i guses",
                "hatchRating": 1,
                "teamNumber": 9999,
              },
              {
                "cargoRating": 123,
                "climbRating": 6,
                "comment": "hi",
                "hatchRating": 6,
                "teamNumber": 2399,
              },
            ],
        }
    }

    // componentDidMount() {
    //   this.props.navigation.getParam('asdf').registerListener(function(val) {
    //     this.setState({
    //       teams: [...this.state.teams, val]
    //     })
    //   })
    // }

    /* getContent ()  {
      console.log("pressed button")
      const info = this.props.navigation.getParam('asdf');
      console.log(info)
      console.log("info is "+info)
      this.setState({
            teams: [...this.state.teams, info]
          })
    } */
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
      const info = this.props.navigation.state.params.asdf;
      //console.log(this.props.navigation.state.params.asdf);
      //console.log("hello")
      //console.log("info" + info)
      var array = this.state.teams;
      array.push(JSON.parse(info));
      //console.log(array);
      
      //console.log("array"+array)
      

      // console.log("asdfasdf" + info)
        return (
            <ScrollView style={styles.container}>
                {   
                    array.map((shit) => {
                        var shit2 = shit
                        var k = Math.random();
                        return(
                        <Card key={k}>
                            <Text style={{fontWeight: 'bold'}}> Team #{shit2.teamNumber} </Text>
                            <Text> Cargo rating: {shit2.cargoRating} </Text>
                            <Text> Climb rating: {shit2.climbRating} </Text>
                            <Text> Hatch rating: {shit2.hatchRating} </Text>
                            <Text> </Text>

                            <Text> {shit2.comment} </Text>





                        </Card>
                        )
                        
                    })
                }

                <Button title="sync" onPress={this.getContent}>

                </Button>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
