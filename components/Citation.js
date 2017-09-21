import React from 'react';
import { Image,StyleSheet,View, Text, Dimensions } from 'react-native';

export default class Citation extends React.Component {
  render() {
    return (
         
           <View style={styles.container}>
                <Text style={styles.quote}>{this.props.details.citation}</Text> 
                <Text style={styles.author}>- {this.props.details.auteur}</Text> 
            </View>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  quote: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Avenir',
    zIndex: 3,
    padding:20,
    color: 'white'
  },
  author : {
    fontSize: 20,
    zIndex: 3,
    padding:20,
    color: 'white',
    
  }
});

