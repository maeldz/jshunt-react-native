import {createStackNavigator, createAppContainer} from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createStackNavigator(
  {
    Main,
    Product,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#da552f',
      },
      headerTitleStyle: {
        //textAlign: 'center',
        //flexGrow: 1,
        fontWeight: 'bold',
      },
      headerTintColor: '#fff',
    },
  },
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
