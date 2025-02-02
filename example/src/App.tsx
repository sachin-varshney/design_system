import { Text, View, StyleSheet } from 'react-native';
import {AppButton} from 'react-native-dehaat_design_system';
import React from 'react';


export default function App() {
  const [result, setResult] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <AppButton onPress={() => setResult((i) => ++i)}>Multiply</AppButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
