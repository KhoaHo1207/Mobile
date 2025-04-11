import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle, loading }) => {
  return (
    <TouchableOpacity style={styles.submitBtn} onPress={() => handleSubmit()}>
      <Text style={styles.btnText}>
        {loading ? "Please wait..." : btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: "#1e2225",
    height: 50,
    marginHorizontal: 25,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
  },
});
