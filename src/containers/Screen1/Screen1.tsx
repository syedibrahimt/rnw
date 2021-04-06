import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {InitialStateType} from '../../model/state';
import {useNavigation} from '@react-navigation/native';
import Actions from '../../store/app/Actions';

function Screen1(props: any) {
  const navigation = useNavigation();
  const {sampleAction} = props;
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <TouchableOpacity
        onPress={() => {
          sampleAction(
            'sample',
            'sdsd',
            'sdsds',
            () => console.log('success'),
            () => console.log('failure'),
          );
          navigation.navigate('two');
        }}>
        <Text>move to screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

const mapStateToProps = ({user}: {user: InitialStateType}) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  sampleAction: (
    username: string,
    password: string,
    domain: string,
    successFn: () => void,
    failureFn: () => void,
  ) =>
    dispatch(
      Actions.sampleAction(username, password, domain, successFn, failureFn),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);
