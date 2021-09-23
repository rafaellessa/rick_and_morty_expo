import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";
import sagaPlugin from "reactotron-redux-saga";
import { reactotronRedux } from "reactotron-redux";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

let tron: typeof Reactotron = Reactotron;

if (__DEV__) {
  tron = Reactotron.configure({
    name: "RickAndMortyApp",
    host: NativeModules.SourceCode.scriptURL.split("://")[1].split(":")[0],
  })
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  tron.clear!();

  console.tron = tron;
}

export default tron;
