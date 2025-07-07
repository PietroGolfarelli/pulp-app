import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DealScreen from '../../screens/DealScreen';
import DealDetailScreen from './DealDetailScreen';


const Stack = createNativeStackNavigator();

export default function DealsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Deals" component={DealScreen} />
            <Stack.Screen name="DealDetail" component={DealDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}