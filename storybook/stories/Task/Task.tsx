import React, { ReactElement, ReactComponentElement } from "react";
import {
  View,
  ViewProps,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";

interface Props {
  task: {
    id: number;
    title: string;
    state: string;
  };
  onArchiveTask: () => void;
  onPinTask: () => void;
}

function Task(props: Props): ReactElement {
  console.log("[Task Component] props", props);
  const {
    task: { title },
  } = props;

  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={title} editable={false}></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    height: 48,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Task;
