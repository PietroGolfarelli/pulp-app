import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DealScreen from '../../screens/DealScreen';
import DealDetailScreen from './DealDetailScreen';


const Stack = createNativeStackNavigator();

export default function DealsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DealList" component={DealScreen} />
            <Stack.Screen name="DealDetail" component={DealDetailScreen} />
        </Stack.Navigator>
    );
}