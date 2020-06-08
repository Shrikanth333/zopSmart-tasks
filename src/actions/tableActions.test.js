import * as actions from './tableActions'
import * as types from './types'

describe('actions', () => {
  it('should create an action to fetch the rows', () => {
    const data = [[0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]]
    const expectedAction = {
        type:types.FETCH_ALL_ROWS,
        data:data,
    }
    expect(actions.fetchAllRows(data)).toEqual(expectedAction)
  })

  it('should create an action to fetch the rows', () => {
    const data = [0,6,0,6,0]
  const rowIndex=2
    const expectedAction = {
        type:types.UPDATE_ROWS,
        data:data,
        rowIndex:rowIndex
    }
    expect(actions.updateRows(data,rowIndex)).toEqual(expectedAction)
  })

})