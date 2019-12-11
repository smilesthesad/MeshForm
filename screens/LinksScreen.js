import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Slider, Input, Text } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <Text> hi </Text>
                </Card>
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
