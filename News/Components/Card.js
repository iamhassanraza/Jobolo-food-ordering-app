import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import image from '../Images/2.jpg';

const Card = () => {
  return (
    <View
      style={{
        shadowOpacity: 20,
        backgroundColor: '#eaecef',
        height: 260,
        width: 230,
        margin: 20,
        shadowColor: 'black',
      }}>
      <View style={{height: 150}}>
        <ImageBackground
          source={image}
          style={{width: '100%', height: '100%'}}></ImageBackground>
      </View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 5}}>
          Pan's Cake
        </Text>
        <Text style={{fontSize: 15, marginLeft: 5, color: 'grey'}}>
          Gulshan e Iqbal
        </Text>
        <Text style={{fontSize: 15, marginLeft: 5, color: 'grey'}}>
          Minimum Order <Text style={{color: 'black'}}> Rs. 50</Text>
        </Text>
        <Text style={{fontSize: 15, marginLeft: 5, color: 'grey'}}>
          Dilivery Fee Rs. 50{' '}
        </Text>
      </View>
    </View>
  );
};

export default Card;
