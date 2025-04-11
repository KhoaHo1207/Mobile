import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../components/InputBox";
import SubmitButton from "../components/Forms/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!email || !password) {
        setLoading(false);
        Alert.alert("Notice", "Please fill all the fields");
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Login</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox
          inputTitle={"Email"}
          keyboardType={"email-address"}
          autoComplete={"email"}
          value={email}
          setValue={setEmail}
        />
        <InputBox
          inputTitle={"Password"}
          secureTextEntry={true}
          autoComplete={"password"}
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        btnTitle={"Login"}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Text style={styles.linkToLogin}>
        Don't have an account ?{" "}
        <Text
          style={{ color: "blue", fontWeight: "bold" }}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>
      </Text>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  linkToLogin: {
    fontSize: 20,
    color: "#1e2225",
    textAlign: "center",
    marginTop: 20,
  },
});
