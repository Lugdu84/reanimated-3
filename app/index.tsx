import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>Home Screen</Text>
			<Link href="/scale">
				<Text>Scale</Text>
			</Link>
			<Link href="/opacity">
				<Text>Opacity</Text>
			</Link>
			<Link href="/change-color">
				<Text>Change Color</Text>
			</Link>
			<Link href="/rotate">
				<Text>Rotate</Text>
			</Link>
		</View>
	);
}
