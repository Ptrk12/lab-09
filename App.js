import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image, Switch, Pressable, FlatList,ToastAndroid } from 'react-native';
import { useState } from "react";
import { ListItem } from './components/ListItem';
import { Tile } from './components/Tile';
import { MyList } from './components/MyList';

export default function App(message, duration) {
  const [selected, setSelected]= useState(new Set());
  const photos = [
    {id: 1, title: 'AAA', thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png', width: 60, height: 60},
    {id: 2, title: 'BBB', thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png', width: 50, height: 60},
    {id: 3, title: 'CCC', thumbnailUrl:'https://reactnative.dev/img/tiny_logo.png', width: 80, height: 80}
  ];
  return (
        <View style={styles.container}>
            <ListItem title='Test' thumbnailUrl='https://reactnative.dev/img/tiny_logo.png' width={50} height={50}/>
            <Tile title='Test' thumbnailUrl='https://reactnative.dev/img/tiny_logo.png' width={50} height={50} />
            <MyList
                data={photos}
                renderItem={({item}) => <Tile title={item.title} thumbnailUrl={item.thumbnailUrl} width={item.width} height={item.height}/>}
                keyExtractor={(item) => item.id}
                />
            <Button
              title='Click'
              onPress={() => ToastAndroid.show("Selected " + selected.size, ToastAndroid.LONG)}
            />
            <StatusBar style="auto"/>
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
