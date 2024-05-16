import {useState} from 'react'
import Solution from '../Solution2'

import './index.css'

const History = props => {
  const {initialHistoryList} = props
  const [search, setSearch] = useState('')
  const [buttonType, setButtonType] = useState(initialHistoryList)

  const onChangeEl = event => {
    setSearch(event.target.value)
  }

  const DeleteBtn = id => {
    setButtonType(buttonType.filter(eachElement => eachElement.id !== id))
  }

  const Result = buttonType.filter(eachItem =>
    eachItem.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <nav className="navbarEl">
        <img
          className="logoEl1"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
        />
        <div className="rowArrangeEl1">
          <img
            className="logoEl2"
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          />
          <input
            value={search}
            className="inputElDesign"
            placeholder="Search history"
            onChange={onChangeEl}
            type="search"
          />
        </div>
      </nav>
      {Result.length === 0 ? (
        <p className="para3">There is no history to show</p>
      ) : null}
      <ul>
        {Result.map(eachSol => (
          <Solution DeleteBtn={DeleteBtn} key={eachSol.id} items={eachSol} />
        ))}
      </ul>
    </div>
  )
}

export default History
