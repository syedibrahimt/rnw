import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Screen2({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
      <TouchableOpacity onPress={() => navigation.navigate('one')}>
        <Text>move to screen 1</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default Screen2;
