import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, Switch, Pressable } from 'react-native';
import { useState } from "react";

export default function App() {
  const [on, setOn] = useState(false);
  const [text, setText] = useState('Marek');
  const [light, setLight] = useState(false);
  const [circleRadius, setCircleRadius] = useState(22); 

  return (
    <View style={styles.container}>
      <Text>
        Hello
        <Text style={{ fontWeight: 'bold' }}> World</Text>
        !
        {text}
      </Text>
      <Pressable onPress={() => setLight(!light)}>
        <View style={styles.circle(light, circleRadius)} />
      </Pressable>
      <Button
        title="Click"
        onPress={() => {
          setText('Karol');
        }}
        color={"darkblue"}
        accessibilityLabel="Learn more about this purple button"
      />
      <TextInput
        placeholder="placeholder"
        multiline
        editable={true}
        numberOfLines={4}
        autoFocus={true}
        keyboardType="default"
        autoCorrect={true}
        style={{
          padding: 5,
          textAlignVertical: "top",
          width: "95%",
          borderWidth: 1,
          borderRadius: 5,
        }}
      />
      <TextInput
        placeholder="circleRadius"
        onChangeText={(value) => {
          const numericValue = parseInt(value);
          if (!isNaN(numericValue)) {
            setCircleRadius(numericValue);
          }
        }}
        multiline
        editable={true}
        numberOfLines={1}
        keyboardType="numeric"
        autoCorrect={true}
        style={{
          padding: 5,
          textAlignVertical: "top",
          width: "95%",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 10,
        }}
      />
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 150, resizeMode: "stretch" }}
      />
      <Switch
        value={on}
        thumbColor={'blue'}
        onValueChange={() => setOn(!on)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: (light, circleRadius) => ({
    borderRadius: circleRadius / 2, 
    borderWidth: 5,
    borderColor: "blue",
    width: circleRadius,
    height: circleRadius,
    padding: 5,
    backgroundColor: light ? "blue" : "darkblue",
  }),
});
