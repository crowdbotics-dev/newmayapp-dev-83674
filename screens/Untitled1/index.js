import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Pressable>
          <View style={styles.peNcplka}>
            <Text style={styles.mZLLVeNO}>Lorem ipsum…</Text>
          </View>
        </Pressable>
        <Pressable>
          <Text style={styles.QhAOMaer}>Lorem ipsum…</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  peNcplka: {
    height: 88,
    width: 181,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  QhAOMaer: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  mZLLVeNO: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;