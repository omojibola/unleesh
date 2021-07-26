import React from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  const likes = [
    { id: 1, interest: "football" },
    { id: 2, interest: "music" },
    { id: 3, interest: "Movies" },
    { id: 4, interest: "Netflix" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/avatar.png")} />
      </View>
      <Text style={styles.nameText}>Ayobami Agunroye,27</Text>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.updateBtn}>
          <Text style={styles.btnText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <View style={styles.followWrap}>
          <View style={styles.followContainer}>
            <Text style={{ textAlign: "center" }}>20</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ borderRightColor: "#cdcdcd", borderWidth: 1 }}></View>
          <View style={styles.followContainer}>
            <Text style={{ textAlign: "center" }}>20</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        {likes.map((item) => (
          <TouchableOpacity style={styles.interest}>
            <Text style={{ color: "#fff" }}>{item.interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginLeft: 21,
    marginRight: 21,
  },
  imageContainer: {
    marginTop: 42,
    marginBottom: 30,
    display: "flex",
    alignItems: "center",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  btnWrapper: {
    display: "flex",
    alignItems: "center",
  },

  updateBtn: {
    borderRadius: 30,
    backgroundColor: "#cdcdcd",
    padding: 10,
    marginTop: 20,
    width: "50%",
    margin: "auto",
  },

  btnText: {
    textAlign: "center",
  },

  followWrap: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    marginTop: 16,
    width: "40%",
    justifyContent: "space-between",
  },

  followContainer: {
    textAlign: "center",
  },

  interest: {
    backgroundColor: "#FA7460",
    borderColor: "rgba(250,116,96,0.5)",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 9,
    paddingBottom: 9,
    borderRadius: 30,
  },
});
