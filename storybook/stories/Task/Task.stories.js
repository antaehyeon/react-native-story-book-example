import * as React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Task from "./Task";

export const task = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    color: "#333",
    fontSize: 16,
    backgroundColor: "#26c6da",
  },
});

storiesOf("Task", module)
  .addDecorator((story) => <View style={styles.taskBox}>{story()}</View>)
  .add("default", () => <Task task={task} {...actions} />)
  .add("pinned", () => (
    <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
  ))
  .add("archived", () => (
    <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
  ));
