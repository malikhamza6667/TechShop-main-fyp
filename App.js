


import React, { useEffect } from 'react';


import {View,Text} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import MainAppRoutes from './src/navigations/approutes/AppMainRoutes';
const App=()=>{
  useEffect(()=>{
SplashScreen.hide()
  },[])
  return (
<MainAppRoutes/>
  )
}

export default App;