import React, { Component } from 'react';
import {StyleSheet, View, Modal, Image, ActivityIndicator} from 'react-native';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      isLoading: nextProps.isLoading
    };
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType={'fade'}
        visible={this.state.isLoading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => { }}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            
            
            {/* If you want to image set source here */}
            { <Image
              source={require('../src/image/ld1.gif')}
              style={{ height: 50, width: 50 }}
              resizeMode="contain"
              resizeMethod="resize"
            /> }
          </View>
        </View>
      </Modal>
    )
  }
}

//Criar efeitos de sombra na tela
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader