import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./screens/Profile";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({});
