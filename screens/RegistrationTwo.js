import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  Picker,
  TouchableOpacity,
  Alert,
} from "react-native";

const RegistrationTwo = () => {
  const inputAccessoryViewID = "uniqueID";
  const initialText = "";
  const [text, setText] = useState(initialText);
  const [selectedValue, setSelectedValue] = useState("java");

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>Unleesh!</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/avatar.png")} />
      </View>
      <View>
        <ScrollView keyboardDismissMode="interactive">
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={setText}
            value={text}
            placeholder={"DD-MM-YY"}
          />
        </ScrollView>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>I am A</Text>
          <Picker
            style={{
              height: 60,
              borderColor: "rgba(250,116,96,0.5)",
              borderWidth: 1,
              borderRadius: 5,
            }}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>I am interested In</Text>
          <Picker
            style={{
              height: 60,
              borderColor: "rgba(250,116,96,0.5)",
              borderWidth: 1,
              borderRadius: 5,
            }}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={createTwoButtonAlert}
      >
        <Text style={styles.loginText}>Finish Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegistrationTwo;

const styles = StyleSheet.create({
  container: { margin: 30 },

  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FA7460",
    marginTop: 50,
    textAlign: "center",
  },

  imageContainer: {
    marginTop: 20,
    marginBottom: 30,
    display: "flex",
    alignItems: "center",
  },
  label: {
    marginBottom: 11,
    color: "#282828",
  },

  input: {
    padding: 20,
    borderColor: "rgba(250,116,96,0.5)",
    borderWidth: 1,
    borderRadius: 5,
  },

  loginScreenButton: {
    height: 60,
    marginTop: 30,
    backgroundColor: "#FA7460",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
