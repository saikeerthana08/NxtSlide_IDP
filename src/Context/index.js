import React from 'react'

const NxtSlideContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  onChangeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default NxtSlideContext
