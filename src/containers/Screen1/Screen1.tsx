import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Screen1({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('two')}>
        <Text>move to screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Screen1;
