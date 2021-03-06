import React from 'react';
import Image from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CarePlanScreen from '../screens/CarePlanScreen';
import DailyExercisesScreen from '../screens/DailyExercisesScreen';
import CaregiverLogScreen from '../screens/CaregiverLogScreen';
import MyProgressScreen from '../screens/MyProgressScreen';
import ActivityLogScreen from '../screens/ActivityLogScreen';
import SchedulerScreen from '../screens/SchedulerScreen';
import MessageScreen from '../screens/MessageScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import ExerciseVideoScreen from '../screens/ExerciseVideoScreen';
import MaterialDetailScreen from "../screens/MaterialDetailScreen";

const CarePlanStack = createStackNavigator({
    CarePlan: CarePlanScreen,
    DailyExercises: DailyExercisesScreen,
    CaregiverLog: CaregiverLogScreen,
    MyProgress: MyProgressScreen,
    ActivityLog: ActivityLogScreen,
    ExerciseVideo: ExerciseVideoScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);
const SchedulerStack = createStackNavigator({
    Scheduler: SchedulerScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);
const MessageStack = createStackNavigator({
    Message: MessageScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);
const ResourcesStack = createStackNavigator({
    Resources: ResourcesScreen,
    MaterialDetail: MaterialDetailScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);


CarePlanStack.navigationOptions = {
  tabBarLabel: 'CarePlan',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-egg'}/>
  ),
};
SchedulerStack.navigationOptions = {
  tabBarLabel: 'Scheduler',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-calendar'}/>
  ),
};
MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-mail'}/>
  ),
};
ResourcesStack.navigationOptions = {
  tabBarLabel: 'Resources',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={'md-book'}/>
  ),
};

const tabNavigator = createBottomTabNavigator({
  // first screen is the default one
  CarePlanStack,
  SchedulerStack,
  MessageStack,
  ResourcesStack,
},
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#2D3A4B',
      }
    }
  }
  );

tabNavigator.path = '';

export default tabNavigator;
