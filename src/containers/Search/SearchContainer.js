import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions
} from 'react-native';
import { connectSearch } from 'RepRedux';
import { SearchBar } from 'react-native-elements'
import debounce from 'debounce';
import _ from 'lodash';
import { promisify } from 'RepUtilities';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff00ff',
        width: '100%',
        height: '100%'
    }
});

class SearchContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchTxt: ''
        }
    }

    changeSearchTxt = debounce((value) => {
        console.log(this.props.search);
        // promisify(this.props.search, {
        //             q: value,
        //             sort: 'updated',
        //             order: 'desc'
        //         }).then((response) => {
        //             console.log(response);
        //         })
        //         .catch((e) => {
        //             console.log(e);
        //         });
    }, 200)

    clearSearchTxt() {
        this.setState({
            searchTxt: value
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <SearchBar
                    onChangeText={this.changeSearchTxt}
                    onClearText={() => this.clearSearchTxt()}
                    placeholder='Type Here...' />
            </View>
        )
    }
}
export default connectSearch()(SearchContainer);
