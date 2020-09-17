import React from "react"
import { withRouter } from "react-router-dom"

const Setting = props => {
  const { history } = props
  return (
    <div>
      <span>this is setting page</span>
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        click to go to home
      </button>
    </div>
  )
}

export default withRouter(Setting)
