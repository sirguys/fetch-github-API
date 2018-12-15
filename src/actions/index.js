import API from '../services/api'

const createActionSet = name => ({
  PENDING: `${name}_PENDING`,
  SUCCESS: `${name}_SUCCESS`,
  FAILED: `${name}_FAILED`
})

export const FETCH_USERNAME = createActionSet('FETCH_USERNAME')
export const FETCH_USER_REPOSITORIES = createActionSet(
  'FETCH_USER_REPOSITORIES'
)
export const SEARCH_USERNAME = createActionSet('SEARCH_USERNAME')

export const fetchUsername = username => async dispatch => {
  dispatch({
    type: FETCH_USERNAME.PENDING
  })

  try {
    const user = await API.fetchUsername(username)
    dispatch({
      type: FETCH_USERNAME.SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: FETCH_USERNAME.FAILED,
      payload: error
    })
  }
}

export const fetchUserRepositories = username => async dispatch => {
  dispatch({
    type: FETCH_USER_REPOSITORIES.PENDING
  })

  try {
    const repos = await API.fetchUserRepositories(username)
    dispatch({
      type: FETCH_USER_REPOSITORIES.SUCCESS,
      payload: repos
    })
  } catch (error) {
    dispatch({
      type: FETCH_USER_REPOSITORIES.FAILED,
      payload: error
    })
  }
}

export const searchUsername = username => async dispatch => {
  dispatch({
    type: SEARCH_USERNAME.PENDING
  })

  try {
    const users = await API.searchUsername(username)
    dispatch({
      type: SEARCH_USERNAME.SUCCESS,
      payload: users
    })
  } catch (error) {
    dispatch({
      type: SEARCH_USERNAME.FAILED,
      payload: error
    })
  }
}
