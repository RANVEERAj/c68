import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";
export default class BookTransactionScreen extends Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      scannedData: "",
      buttonState: "normal",
    };
  }
  getCamera = async () => {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA
    );
  };
  handleBarcodeScan = async ({ type, data }) => {
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: "clicked",
    });
  };
  render() {
     
      const  hasCameraPermission =this.state.hasCameraPermission;
      const scanned =this.state.scanned;
      const buttonState = this.state.buttonState

      if(buttonState==="clicked"&& hasCameraPermission){
          return (<BarCodeScanner onBarCodeScanned={scanned ?undefined : this.handleBarcodeScan} style={StyleSheet.absoluteFillObject} />)
      }
    
    return (
      <View>
        
        <Text> {hasCameraPermission===true?this.state.scannedData:"requesting permission"} </Text>
        <TouchableOpacity style={styles.button} onPress={this.getCamera}>
          <Text style={styles.displayText}>Scan Qr Code</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  displayText: { textAlign: "center" },
  button: {
    backgroundColor: "green",
    width: 100,
    height: 50,
    borderRadius: 2,
    justifyContent: "center",
  },
});
