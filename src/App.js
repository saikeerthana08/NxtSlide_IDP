import {Component} from 'react'
import './App.css'
import Header from './components/Header'
import NewButton from './components/NewButton'
import LeftSlideView from './components/LeftSlideView'
import NxtSlideContext from './Context'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here

const insertSlide = (arr, index, newSlide) => [
  ...arr.slice(0, index),
  newSlide,
  ...arr.slice(index),
]
class App extends Component {
  state = {
    initialList: initialSlidesList,
    activeIndex: 0,
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = insertSlide(initialList, activeIndex + 1, item)
      return {initialList: [...newList]}
    })
  }

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((item, index) => {
        if (activeIndex === index) {
          return {...item, heading: value}
        }
        return item
      })
      return {initialList: newList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((item, index) => {
        if (activeIndex === index) {
          return {...item, description: value}
        }
        return item
      })
      return {initialList: newList}
    })
  }

  onChangeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  render() {
    const {initialList, activeIndex} = this.state
    console.log(activeIndex)
    return (
      <div>
        <Header />
        <NxtSlideContext.Provider
          value={{
            initialList,
            activeIndex,
            onChangeActiveTab: this.onChangeActiveTab,
            addNewItem: this.addNewItem,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
          }}
        >
          <>
            <NewButton />
            <LeftSlideView />
          </>
        </NxtSlideContext.Provider>
      </div>
    )
  }
}

export default App
