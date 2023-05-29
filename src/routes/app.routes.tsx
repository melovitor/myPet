import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components';
import { ChangePassword } from "@screens/ChangePassword";
import { Home } from "@screens/Home";
import { Gear, House, ShoppingCart  } from 'phosphor-react-native';
import { Settings } from '@screens/Settings';
import { Orders } from '@screens/Orders';
import { StyleSheet } from 'react-native';
const {Navigator, Screen} = createBottomTabNavigator<AppRouts>()

type AppRouts = {
    home: undefined
    orders:undefined
    settings:undefined
    item:undefined
    store:undefined
    changePassword:undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRouts>

export function AppRoutes(){
    const {COLORS} = useTheme()
    const styles = StyleSheet.create({
        shadow: {
            shadowColor: COLORS.GREEN_700,
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5
        }
    })


    return(        
            <Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.GREEN_700,
                tabBarInactiveTintColor: COLORS.GRAY_300,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 8,
                    left: 10,
                    right: 10, 
                    backgroundColor: COLORS.WHITE,
                    height: 75,
                    borderRadius: 15,
                    borderTopWidth:0,
                    ...styles.shadow
                }
            }}>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <House color={color} size={32}/>
                    )
                }}
            />
            <Screen
                name='orders'
                component={Orders}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ShoppingCart color={color} size={32}/>
                    )
                }}
            />
            <Screen
                name='settings'
                component={Settings}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Gear color={color}  size={32}/>
                    )
                }}
            />
            <Screen
                name='changePassword'
                component={ChangePassword}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Navigator>
        
    )
}

