import { useEffect } from 'react';
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

export default function OpacityScreen() {
	const scale = useSharedValue(0);
	const opacityStyle = useAnimatedStyle(() => {
		return {
			opacity: scale.value,
		};
	});

	const fadeIn = () => {
		scale.value = withTiming(1, { duration: 2000 });
	};

	useEffect(() => {
		fadeIn();
	}, []);
	return (
		<View style={container}>
			<Animated.View style={[circle, opacityStyle]} />
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
