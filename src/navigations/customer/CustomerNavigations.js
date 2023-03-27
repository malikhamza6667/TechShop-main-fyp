import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {View,Text,TouchableOpacity} from 'react-native'

import CustomerDrawer from './CustomerDrawer'
import RequestService from '../../screens/customer/ServiceRequestForm/RequestForm'
import Colors from '../../config/colors/Colors'
import RequestSparePart from '../../screens/customer/SparePartRequestForm/SparePartRequest'
const stack= createNativeStackNavigator()
const CustomerNavigations=()=>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen component={CustomerDrawer} name="CustomerDrawer" />
            <stack.Screen component={RequestService} name="RequestService" options={{headerShown:true,headerTitle:'Request Service', headerTitleAlign:'center'}}/>
            <stack.Screen component={RequestSparePart} name="RequestSparePart" options={{headerShown:true,headerTitle:'Request Spare Parts', headerTitleAlign:'center'}}/>
        </stack.Navigator>
    )
}

export default CustomerNavigations