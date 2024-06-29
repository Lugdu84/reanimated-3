import { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	useAnimatedReaction,
} from 'react-native-reanimated';

export default function ChangeColorScreen() {
	const background = useSharedValue('blue');
	const [currentColor, setCurrentColor] = useState('blue');

	const animatedStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: background.value,
		};
	}, []);

	useAnimatedReaction(
		() => {
			return background.value;
		},

		(color, prevColor) => {
			// if (prevColor === 'blue') {
			// 	background.value = withTiming('red', { duration: 500 });
			// } else {
			// 	background.value = withTiming('blue', { duration: 500 });
			// }
		}
	);

	const updateColor = () => {
		background.value = withTiming(background.value === 'red' ? 'blue' : 'red', {
			duration: 500,
		});
		// background.value = withTiming(currentColor === 'red' ? 'blue' : 'red', {
		// 	duration: 500,
		// });
		// setCurrentColor(currentColor === 'red' ? 'blue' : 'red');
	};
	return (
		<Pressable
			style={styles.container}
			onPress={() => updateColor()}>
			<Animated.View style={[styles.rounded, animatedStyle]} />
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rounded: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
});
