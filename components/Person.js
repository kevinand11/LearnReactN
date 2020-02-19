import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { urlBase } from '../constants/network.js'

export default function({ person }) {
	return (
		<View style={styles.container}>
			{person.picture && <Image source={{ uri: urlBase + person.picture.filename }} style={styles.image} />}
			<Text style={[styles.header]}>{person.name}</Text>
			<Text style={[styles.text]}>{person.email}</Text>
			<Text style={[styles.text]}>{person.phone.phone}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flexDirection: 'column',
		alignItems: 'center'
	},
	image: {
		width: 100,
		height: 100,
		borderWidth: 0.5,
		borderColor: '#000',
		borderRadius: 50
	},
	header: {
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 5
	},
	text: {
		fontSize: 14,
		color: '#777',
		marginVertical: 5
	}
})
