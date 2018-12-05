/** @format */

import { AppRegistry } from "react-native";
import dedupe from "redux-api-call-adapter-dedupe";

import { name as appName } from "./app.json";
import App from "./App";

dedupe;

AppRegistry.registerComponent(appName, () => App);
