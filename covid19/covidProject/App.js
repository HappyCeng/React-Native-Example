import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Card from './src/components/Card';

type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//         <View style={styles.container}>
//           <View style={styles.slideOne}>
//             <Text>Merhaba!</Text>
//           </View>
//           <View style={styles.slideTwo}>
//             <View style={[styles.box, styles.box1]}></View>
//             <View style={[styles.box, styles.box2]}></View>
//             <View style={[styles.box, styles.box3]}></View>
//             <View style={[styles.box, styles.box2]}></View>
//           </View>
//         </View>
//     );
//   }
  export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Card />
          <Card />
          <Card />
        </View>
    );
  }
}

// eğer flex-direction row verilirse birincil eksen yatay olur.
// eğer flex-direction column verilirse birincil eksen dikey olur.

/*
*
* justifyContent: Birincil eksende elemanların nasıl konumlanacağını
* ---------------	belirler.
*
* 	- flex-start
* 	- flex-end
* 	- center
* 	- space-between
* 	- space-around
*
*
* alignItems: İkincil eksende elemanların nasıl konumlanacağını belirler.
* -----------
*
* 	- flex-start
* 	- flex-end
*   - stretch
*
* */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB3B',
    flex: 1
  },
  slideOne: {
    backgroundColor: '#607D8B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideTwo: {
    backgroundColor: '#ff5722',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  box: {
    height: 140,
  },
  box1: {
    backgroundColor:'#795548'
  },
  box2: {
    backgroundColor: '#9E9E9E'
  },
  box3: {
    backgroundColor: '#3F51B5'
  }
});