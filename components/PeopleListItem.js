import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default function({ person }) {
	return (
		<View style={styles.listItem}>
			<View>
				<Text style={styles.textName}>{person.name}</Text>
				<Text style={styles.textMail}>{person.email}</Text>
			</View>
			<Button style={styles.button} title='Go' onPress={() => Actions.person({ person })} />
		</View>
	)
}

const styles = StyleSheet.create({
	listItem: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingVertical: 5
	},
	textName: {
		fontSize: 16
	},
	textMail: {
		fontSize: 10,
		color: '#777'
	},
	button: {
		width: 100
	}
})
