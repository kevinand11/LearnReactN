import React from 'react'
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'

export default function({ data }) {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color='#0af' />
			<Text style={[styles.text]}>Fetching {data}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 14,
		color: '#000',
		marginVertical: 5
	}
})
