import React, {useState} from 'react';
import {isLoggedIn} from './services/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Bar from './pages/Bar';
import Compras from './pages/Compras';

const Stack = createStackNavigator();

const App = () => {
  const [logged, setLogged] = useState(false);

  isLoggedIn().then((value) => setLogged(value));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {logged === false ? (
          <>
            <Stack.Screen
              name="SignIn"
              options={{title: 'Login'}}
              component={SignIn}
            />
            <Stack.Screen
              name="SignUp"
              options={{title: 'Criar Usuário'}}
              component={SignUp}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Compras" component={Compras} />
            <Stack.Screen name="Bar" component={Bar} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
