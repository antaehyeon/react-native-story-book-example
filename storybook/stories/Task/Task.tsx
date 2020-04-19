import React, { ReactElement, ReactComponentElement } from "react";
import {
  View,
  ViewProps,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

interface Props {
  task: {
    id: number;
    title: string;
    state: string;
  };
  onArchiveTask?: (id: number) => void;
  onPinTask?: () => void;
}

function Task(props: Props): ReactElement {
  console.log("[Task Component] props", props);
  const {
    task: { id, title, state },
    onArchiveTask,
    onPinTask,
  } = props;

  const _onPress = (): void => {
    if (!onArchiveTask) return;
    onArchiveTask(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={_onPress}>
        {state !== "TASK_ARCHIVED" ? (
          <View style={styles.checkBox} />
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Input Title"
        style={
          state === "TASK_ARCHIVED"
            ? styles.listItemInputTaskArchived
            : styles.listItemInputTask
        }
        value={title}
        editable={false}
      ></TextInput>
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
  checkBox: {
    borderColor: "#26c6da",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 1,
    backgroundColor: "transparent",
    height: 18,
    width: 18,
  },
  listItemInputTask: {
    backgroundColor: "transparent",
    width: "95%",
    padding: 10,
    fontFamily: "NunitoSans",
    fontSize: 14,
    lineHeight: 20,
    fontStyle: "normal",
  },
  listItemInputTaskArchived: {
    color: "#aaa",
    width: "95%",
    padding: 10,
    fontFamily: "NunitoSans",
    fontSize: 14,
    lineHeight: 20,
    fontStyle: "normal",
  },
});

export default Task;
