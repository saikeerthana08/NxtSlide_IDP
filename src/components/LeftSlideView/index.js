import {Component} from 'react'
import LeftSlideItem from '../LeftSlideItem'
import NxtSlideContext from '../../Context'
import RightSlideView from '../RightSlideView'
import './index.css'

class LeftSlideView extends Component {
  render() {
    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((slideItem, index) => (
                  <LeftSlideItem
                    details={slideItem}
                    key={slideItem.id}
                    number={index + 1}
                  />
                ))}
              </ol>
              <RightSlideView />
            </div>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default LeftSlideView
