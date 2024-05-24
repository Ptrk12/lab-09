import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from './ListItem';

export class MyList extends Component {
    state = { selectedId: 0 };

    handlePressItem = (item) => {
        this.setState({ selectedId: item.id });
        if (this.props.onPressItem) {
            this.props.onPressItem(item);
        }
    };

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.handlePressItem(item)}>
                        <ListItem
                            title={item.title}
                            width={item.width}
                            height={item.height}
                            thumbnailUrl={item.thumbnailUrl}
                            selected={item.id == this.state.selectedId}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}
