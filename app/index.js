import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import { createAppContainer } from "react-navigation";


export const ROOT_NAVIGATOR = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
)

export const APP_NAVIGATOR = createAppContainer(ROOT_NAVIGATOR);