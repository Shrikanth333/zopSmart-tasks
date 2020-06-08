
import {
    FETCH_ALL_ROWS,
    UPDATE_ROWS} from "../actions/types";
import tableReducer from "./tableReducer";

describe('userReducer Reducer', () => {
    const initialState = {
        rows: [],
    }
    it('should return initial state', () => {
        expect(tableReducer(undefined, {}))
            .toEqual(initialState)
    })
    it('should handle FETCH_ALL_ROWS', () => {
        expect(
          tableReducer([], {
            type: FETCH_ALL_ROWS,
            data: [[0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]]
          
          })
        ).toEqual(
          {
            rows: [[0,0,0,0,0],
            [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]],
          }
        )
    })
    it('should handle update_tables', () => {
        expect(
          tableReducer({
            rows:[[0,0,0,0,0],
            [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]],
        }, {
            type:  UPDATE_ROWS,
            data: [0,8,0,8,0],
            rowIndex:1
          })
        ).toEqual(
          {
            rows: [[0,0,0,0,0],
            [0,8,0,8,0],
        [0,0,0,0,0],
        [0,0,0,0,0]],
          }
        )
    })
})