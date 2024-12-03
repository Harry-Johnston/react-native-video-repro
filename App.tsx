import * as React from 'react';
import { View, Text, Button } from 'react-native'
import { createStaticNavigation, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VideoScreen } from './VIdeoScreen.tsx'

export const HomeScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View>
            <Button title={'Go to VideoScreen'} onPress={() => navigation.navigate('VideoScreen')}/>
        </View>
    );
}

const RootStack = createNativeStackNavigator({
    screens: {
        Home: HomeScreen,
        VideoScreen: VideoScreen
    },
});


const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return <Navigation />;
}
