import {
	View,
	Text,
	Pressable,
	StyleSheet,
	ViewStyle,
	TextStyle,
} from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

export default function ScaleScreen() {
	const scale = useSharedValue(1);
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }],
		};
	}, []);

	const handlePress = () => {
		scale.value = withTiming(scale.value + 0.3);
	};
	return (
		<View style={container}>
			<Pressable onPress={handlePress}>
				<Animated.View style={[circle, animatedStyle]}>
					<Text style={title}>Scale</Text>
				</Animated.View>
			</Pressable>
		</View>
	);
}

const container: ViewStyle = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
};

const circle: ViewStyle = {
	width: 100,
	height: 100,
	backgroundColor: 'orange',
	borderRadius: 50,
	justifyContent: 'center',
};

const title: TextStyle = {
	fontSize: 20,
	fontWeight: 'bold',
	textAlign: 'center',
};
