import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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


    render() {
        return (
            <ScrollView style={styles.container}>
                {   
                    this.state.teams.map((shit) => {
                        var k = Math.random();
                        return(
                        <Card key={k}>
                            <Text style={{fontWeight: 'bold'}}> Team #{shit.teamNumber} </Text>
                            <Text> Cargo rating: {shit.cargoRating} </Text>
                            <Text> Climb rating: {shit.climbRating} </Text>
                            <Text> Hatch rating: {shit.hatchRating} </Text>
                            <Text> </Text>

                            <Text> {shit.comment} </Text>





                        </Card>
                        )
                        
                    })
                }
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
