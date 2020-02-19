import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function({ data }) {
	return (
		<View style={styles.container}>
			<Text style={[styles.text]}>No {data} in the database</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flexDirection: 'row'
	},
	text: {
		fontSize: 18,
		color: '#000',
		marginVertical: 5
	}
})
