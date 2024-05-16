import './index.css'

const Solution = props => {
  const {items, DeleteBtn} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = items

  const removeEl = () => {
    DeleteBtn(id)
  }

  return (
    <li className="listEl2">
      <div className="ArrangeElList2">
        <p>{timeAccessed}</p>

        <img className="arrangeEl45" alt="domain logo" src={logoUrl} />
        <p className="arrangeEl45">{title}</p>
        <p className="arrangeEl45">{domainUrl}</p>
      </div>

      <button data-testid="delete" onClick={removeEl} type="button">
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default Solution
