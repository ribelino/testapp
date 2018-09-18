import React from 'react';
import {Image} from 'react-native';

export default class HomeIcon extends React.Component {
    render() {
        return (
            <Image 
                source={require('../assets/navBarImages/homeIcon.js')}
                fadeDuration={0}
                style={{width: 35.15, height: 29.84}}
            />
        );
    }
}