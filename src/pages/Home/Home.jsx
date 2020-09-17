import React from "react"
import { withRouter } from "react-router-dom"
import { MobXProviderContext } from "mobx-react"
import { toJS } from "mobx"

const Home = props => {
  const { history } = props
  const { commonStore } = React.useContext(MobXProviderContext)
  const common = toJS(commonStore)
  return (
    <div>
      <span>this is home page</span>
      <span>{JSON.stringify(common)}</span>
      <button
        onClick={() => {
          history.push("/setting")
        }}
      >
        click to go to setting
      </button>
    </div>
  )
}

export default withRouter(Home)
