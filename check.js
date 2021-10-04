import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const Data = [
  {
    id: 1,
    first_name: 'Sile',
  },
  {
    id: 2,
    first_name: 'Clementia',
  },
  {
    id: 3,
    first_name: 'Brita',
  },
  {
    id: 4,
    first_name: 'Duke',
  },
  {
    id: 5,
    first_name: 'Hedvig',
  },
  {
    id: 6,
    first_name: 'Paulie',
  },
  {
    id: 7,
    first_name: 'Munmro',
  },
  {
    id: 8,
    first_name: 'Dyanna',
  },
  {
    id: 9,
    first_name: 'Shanta',
  },
  {
    id: 10,
    first_name: 'Bambi',
  },
];

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
  }

  onPressHandler(id) {
    this.setState({ selectedItem: id });
  }

  render() {
    return (
      <View>
        <FlatList
          extraData={this.state.selectedItem} //Must implemented
          //horizontal={true}
          data={Data}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
              <Card
                style={
                  this.state.selectedItem === item.id
                    ? {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#000000',
                      }
                    : {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#a1a1a1',
                      }
                }>
                <Text>{item.first_name}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});