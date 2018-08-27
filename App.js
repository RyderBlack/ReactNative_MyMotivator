import React from 'react';
import { ImageBackground,StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';
import Citation from './components/Citation';
import citations from './citations';

export default class App extends React.Component {

state = {}

componentWillMount() {
  this.genererCitation();
}

genererCitation = () => {
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
      <ImageBackground source={{uri : this.state.img}} style={styles.container} >
       <Citation details={this.state} />
       <Button onPress={() => this.genererCitation()} textStyle={styles.buttonText} style={styles.moreButton}> I need more!</Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  moreButton: {
    borderColor: 'white',
    width: '70%',
    marginLeft: '15%',
    marginBottom: '2%',
    borderRadius: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    padding: 5
  }
});
