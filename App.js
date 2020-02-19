import 'react-native-gesture-handler'
import React from 'react'
import { View, StyleSheet, StatusBar, NetInfo } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Home from './screens/Home'
import Person from './screens/Person'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='black' barStyle='light-content' />
			<Router>
				<Scene key='root'>
					<Scene key='home' title='Home' component={Home} initial />
					<Scene key='person' title='Person' component={Person} />
				</Scene>
			</Router>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
