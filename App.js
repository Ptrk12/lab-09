import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, ToastAndroid, StatusBar } from 'react-native';
import { ListItem } from './components/ListItem';
import { Tile } from './components/Tile';
import { MyList } from './components/MyList';

export default function App() {
    const [selected, setSelected] = useState(new Set());
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);

    const photos = [
        { id: 1, title: 'AAA', thumbnailUrl: 'https://reactnative.dev/img/tiny_logo.png', width: 60, height: 60 },
        { id: 2, title: 'BBB', thumbnailUrl: 'https://reactnative.dev/img/tiny_logo.png', width: 50, height: 60 },
        { id: 3, title: 'CCC', thumbnailUrl: 'https://reactnative.dev/img/tiny_logo.png', width: 80, height: 80 }
    ];

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            let data = await response.json();
            data = data.map(item => ({
                id: item.id,
                title: item.title,
                width: 100,
                height: 100,
                thumbnailUrl: item.thumbnailUrl
            }));
            setListData(data);
            setLoading(false);
        } catch (error) {
            ToastAndroid.show('Error: ' + error.message, ToastAndroid.SHORT);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const list = (
        <MyList
            data={listData}
            onPressItem={(item) => ToastAndroid.show("Selected item " + item.id, ToastAndroid.SHORT)}
        />
    );

    return (
        <View style={styles.container}>
            <ListItem title='Test' thumbnailUrl='https://reactnative.dev/img/tiny_logo.png' width={50} height={50} />
            <Tile title='Test' thumbnailUrl='https://reactnative.dev/img/tiny_logo.png' width={50} height={50} />
            {loading ? <Text>Loading ...</Text> : <></>}
            {listData.length > 0 ? list : <></>}
            <MyList
                data={photos}
                onPressItem={(item) => ToastAndroid.show("Selected item " + item.id, ToastAndroid.SHORT)}
            />
            <Button
                title='Click'
                onPress={() => ToastAndroid.show("Selected " + selected.size, ToastAndroid.LONG)}
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
