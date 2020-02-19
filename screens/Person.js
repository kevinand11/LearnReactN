import React from 'react'
import { View, StyleSheet } from 'react-native'
import Person from '../components/Person'

export default function({ person }) {
	return (
		<View style={styles.container}>
			<Person person={person} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 25
	}
})
