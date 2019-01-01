import React from 'react'
import { connect } from 'react-redux'
import { withState, withHandlers, compose } from 'recompose'

import UserCard from '../../components/UserCard'
import { searchUsername } from '../../actions'

const addWithState = withState('username', 'setUsername')

const addWithHandlers = withHandlers({
  handleOnChange: ({ setUsername }) => e => {
    e.preventDefault()

    const username = e.target.value
    setUsername(username)
  },

  handleSearch: ({ dispatch, username, setUsername }) => () => {
    dispatch(searchUsername(username))
    setUsername(username)
  }
})

const Home = ({ users, handleSearch, handleOnChange }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Find a username"
                  onChange={handleOnChange}
                />
              </div>
              <div className="control">
                <a className="button is-info" onClick={handleSearch}>
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p className="subtitle">
              <strong>Total : </strong> {users.total_count} users
            </p>
          </div>
        </div>

        <div className="columns is-multiline">
          {users.items &&
            users.items.map(item => {
              return <UserCard user={item} />
            })}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  isFetching: state.users.isFetching,
  users: state.users.data
})

export default compose(
  connect(mapStateToProps),
  addWithState,
  addWithHandlers
)(Home)
