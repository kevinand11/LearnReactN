import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import PeopleListItem from '../components/PeopleListItem.js'
import EmptyData from '../components/EmptyData'
import FetchingData from '../components/FetchingData'
import axios from '../constants/network'

export default function() {
	const [people, setPeople] = useState([])
	const [fetching, setFetching] = useState(true)
	useEffect(() => {
		axios
			.get('users', { params: { with: 'picture' } })
			.then(res => {
				setFetching(false)
				setPeople(res.data.data)
			})
			.catch(err => {
				setFetching(false)
				console.warn(err)
			})
	}, [])
	return (
		<View style={styles.container}>
			{people.length === 0 && !fetching && <EmptyData data='users' />}
			{fetching && <FetchingData data='users' />}
			<FlatList data={people} keyExtractor={person => String(person.id)} renderItem={people => <PeopleListItem person={people.item} />} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 25
	}
})
