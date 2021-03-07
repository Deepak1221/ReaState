import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons,SIZES } from "../constants"
import Home from '../screens/Home'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Saved from '../screens/Saved'
import { useSelector } from 'react-redux';
import TabImage from "../common/TabImage";


const TabNavigator = createBottomTabNavigator();

function IconWithBadge({name,badgeCount,color,size,focused}){
return( 
    <View style={{ width: 24, height: 24, margin: 5 }}>
    <TabImage img={name} color={focused ? COLORS.primary : COLORS.secondary}/>
    {badgeCount > 0 && (
      <View
        style={{
          position: 'absolute',
          right: -6,
          top: -3,
          backgroundColor: 'red',
          borderRadius: 6,
          width: 15,
          height: 15,
          justifyContent: 'center',
          alignItems: 'center',
        
        }}
      >
        <Text style={{ color: 'white', fontSize: 9, fontWeight: 'bold' }}>
          {badgeCount}
        </Text>
      </View>
    )}
  </View>
 )
}

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} />;
  };
 
const Tabs = props => {
    const savedCount = useSelector(state =>state.savedReducer.savedCount)
    return (
        <TabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        return <TabImage
                            img={icons.home}
                            color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    } else if (route.name === 'Search') {
                        return <TabImage img={icons.search}color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    } else if (route.name === 'Saved') {
                        iconName = focused
                            ? icons.star
                            : icons.star;
                        return <HomeIconWithBadge
                            name={iconName}
                            size={size}
                            badgeCount={savedCount}
                            focused={focused}
                        />
                    } else if (route.name === 'Profile') {
                        return <TabImage img={icons.user}color={focused ? COLORS.primary : COLORS.secondary}
                        />
                    }


                },
            })}
            tabBarOptions={{
                activeTintColor: COLORS.primary,
                inactiveTintColor: COLORS.secondary,
            }}

        >
             <TabNavigator.Screen name="Home"component={Home}/>
            <TabNavigator.Screen name="Search"component={Search} />
            <TabNavigator.Screen name="Saved" component={Saved} />
            <TabNavigator.Screen name="Profile" component={Profile} />

        </TabNavigator.Navigator>
    )
}

export default Tabs