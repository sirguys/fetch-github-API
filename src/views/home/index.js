// views/home/index.js

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import UserCard from '../../components/UserCard'
import { searchUsername } from '../../actions'

class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  handleOnChange = e => {
    e.preventDefault()

    const username = e.target.value

    this.setState({
      username
    })
  }
  handleSearch = () => {
    const { dispatch } = this.props
    const { username } = this.state
    dispatch(searchUsername(username))

    this.setState({
      username
    })
  }

  render() {
    const { users } = this.props

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
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="control">
                  <a className="button is-info" onClick={this.handleSearch}>
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
                return <UserCard key={item.id} user={item} />
              })}
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.users.isFetching,
  users: state.users.data
})
export default connect(mapStateToProps)(Home)
