import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";


export default function Spinner() {

    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#101573" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

