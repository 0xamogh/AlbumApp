import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "black",
    elevation: 9,
    position: "relative",
    shadowOffset: { width: 99, height: 5 },
    shadowOpacity: 1
  },
  textStyle: {
    fontSize: 20
  }
};
export default Header;
