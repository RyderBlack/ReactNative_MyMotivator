import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button'
import Citation from './components/Citation';
import citations from './citations';

export default class App extends React.Component {

state = {}

componentWillMount() {
  this.genererCitation();
}

genererCitation = event => {
  // On transforme les citations en array en recuperant les clefs
  const keyArray = Object.keys(citations);
  // une citation au hasard grace au math random arrondi
  const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
  //le if regle le probleme des doublons
  if (this.citation === citations[randomKey].citation) {
    this.genererCitation();
    return;
  }//si les deux sont les memes
  this.setState(citations[randomKey]); // chercher une citation a afficher
}

  render() {
    return (
      <Image source={{uri : this.state.img}} style={styles.container} blurRadius={1} >
       <Citation details={this.state} />
       <Button  onPress={e => this.genererCitation(e)} style={styles.button} textStyle={{fontSize: 28, color: 'white'}}>I need more !</Button>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  button: {
     backgroundColor: 'rgba(0,0,0,0)',
     borderColor: '#f5f5f5',
     borderWidth: 2,
     borderRadius: 30,
     padding: 20,
     width: '70%',
     height: '5%',
     marginLeft: '15%',
     marginBottom: '5%'
  }
});
