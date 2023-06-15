import { createSelector, createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()
console.log(initialState)

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      keepUnusedDataFor: 5, //Might need to keep it longer in production, 60sec
      transformResponse: responseData => {
        //responseData: get response from the query
        const loadedUsers = responseData.map(user => {
          user.id = user._id
          return user
        })
        return usersAdapter.setAll(initialState, loadedUsers)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'User', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'User', id }))
          ]
        } else return [{ type: 'User', id: 'LIST' }]
      }
    })
  })
})

export const {
  useGetUsersQuery,
} = usersApiSlice

//Returns the query result object including any additional information such as loading status, error messages, and the actual data
export const selectUsersResults = usersApiSlice.endpoints.getUsers.select()

//Creates memoized selector, Returns just the data
const selectUsersData = createSelector(
  selectUsersResults,
  usersResult => usersResult.data //Normalized state object with ids and entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds
  //Pass in a selector that returns the users slice of state
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
