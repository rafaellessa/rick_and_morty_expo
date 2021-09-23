import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Background from "./components/Background";
import { StatusBar } from "react-native";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

export const navigations: RootRouteScreens[] = [
  {
    name: "Splash",
    component: Splash,
  },
  {
    name: "Home",
    component: Home,
  },
];

const NavigationStack: React.FC = () => {
  const Stack = createStackNavigator();

  const renderNavigations = navigations.map(
    ({ name, component: Component }) => {
      return (
        <Stack.Screen key={name} name={name}>
          {(props) => (
            <Background>
              <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
              />
              <Component key={name} {...props} />
            </Background>
          )}
        </Stack.Screen>
      );
    }
  );

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        // cardStyle: {
        //   backgroundColor: theme.colors.primary,
        // },
      }}
    >
      {renderNavigations}
    </Stack.Navigator>
  );
};

export default NavigationStack;
