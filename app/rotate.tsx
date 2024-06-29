import { View, Text, StyleSheet, Pressable } from 'react-native';
import Animated, {
	useSharedValue,
	AnimatedStyle,
	useAnimatedStyle,
	withTiming,
	withRepeat,
	ReduceMotion,
	cancelAnimation,
} from 'react-native-reanimated';

export default function RotateScreen() {
	const rotate = useSharedValue(0);

	const rotateStyle = useAnimatedStyle(() => {
		return {
			transform: [{ rotate: `${rotate.value}deg` }],
		};
	}, []);

	const handleRotate = () => {
		// rotate.value = withRepeat(
		// 	withTiming(rotate.value + 800, { duration: 4000 }),
		// 	-1,
		// 	false
		// );
		rotate.value = withTiming(rotate.value + randomeRotation(), {
			duration: 4000,
		});
	};

	const randomeRotation = () => {
		return Math.floor(Math.random() * 1000 + 500);
	};

	const handleStop = () => {
		cancelAnimation(rotate);
	};

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.rectangle, rotateStyle]} />
			<Pressable onPress={handleRotate}>
				<Text>Rotate</Text>
			</Pressable>
			<Pressable onPress={handleStop}>
				<Text>Stop</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rectangle: {
		width: 100,
		height: 100,
		backgroundColor: 'orange',
	},
});
