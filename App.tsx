import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
        Welcome
      </Text>
    </View>
  );
};

export default App;
