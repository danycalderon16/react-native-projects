import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ConcactList from './components/ConcactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards uri={'https://picsum.photos/400/200'}/>
        <ConcactList/>
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App