import {Component} from 'react'
import './index.css'
import NxtSlideContext from '../../Context'

class LeftSlideItem extends Component {
  render() {
    const {details, number} = this.props
    const {heading, description} = details

    return (
      <NxtSlideContext.Consumer>
        {value => {
          const {onChangeActiveTab, activeIndex} = value
          const isActive = activeIndex === number - 1
          const activeStyling = isActive ? 'active-styling' : ''

          const onClickSlideTab = () => {
            onChangeActiveTab(number - 1)
          }

          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${number}`}
            >
              <p className="slide-number">{number}</p>
              <div className="slide-tab">
                <h1 className="tab-heading">{heading}</h1>
                <p className="tab-description">{description}</p>
              </div>
            </li>
          )
        }}
      </NxtSlideContext.Consumer>
    )
  }
}

export default LeftSlideItem
