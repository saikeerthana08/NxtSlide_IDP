import {v4 as uuidv4} from 'uuid'
import './index.css'
import NxtSlideContext from '../../Context'

const NewButton = () => (
  <NxtSlideContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, onChangeActiveTab} = value

      const onClickNewButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        onChangeActiveTab(activeIndex + 1)
      }

      return (
        <div>
          <button
            type="button"
            className="add-new-button"
            onClick={onClickNewButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </NxtSlideContext.Consumer>
)

export default NewButton
