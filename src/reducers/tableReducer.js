import {
    FETCH_ALL_ROWS,
    UPDATE_ROWS} from "../actions/types";;

    const initialState = {
        rows: []
        
      };

      const tableReducer = (state = initialState, action) => {
        switch (action.type) {
          case FETCH_ALL_ROWS: {
            return {
              ...state,
              rows: action.data,
            };
          }
      
          case UPDATE_ROWS: {
             let updatedRows=state.rows.map((row,index)=>{
                 if(index===action.rowIndex){
                 row=action.data
                 return row
                 }
                 return row
             }) 
            return {
              ...state,
              rows: updatedRows,
            };
          }
      
    default: {
        return state;
      }
    }
  };
  export default tableReducer;