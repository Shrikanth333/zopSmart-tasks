import {
    FETCH_ALL_ROWS,
    UPDATE_ROWS} from "./types";
export const fetchAllRows = (data) => {
    return {
      type: FETCH_ALL_ROWS,
      data: data,
    };
  };
  
  export const updateRows = (data,rowIndex) => {
    
    return {
      type: UPDATE_ROWS,
      data: data,
      rowIndex:rowIndex
    };
  };
  