import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import SeeAllScreen from './src/screens/seeAll';
import DetailScreen from './src/screens/detail';
import UpdateScreen from './src/screens/update';

export type RootStackParamList = {
  Home: undefined;
  SeeAll:undefined;
  Detail:undefined;
  Update:undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SeeAll" component={SeeAllScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Update" component={UpdateScreen} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;