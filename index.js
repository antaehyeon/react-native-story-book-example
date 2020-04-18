/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import App from "./App";
import StorybookUI from "./storybook";

const STORY_BOOK_MODE = true;

AppRegistry.registerComponent(appName, () =>
  STORY_BOOK_MODE ? StorybookUI : App
);
