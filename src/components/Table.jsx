import React from 'react';

import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { fetchAllRows, updateRows } from '../actions/tableActions';

class SimpleTables extends React.Component {
  handleChange = (e, id, rowIndex, currentRow) => {
    currentRow[id] = Number(e.target.value);
    currentRow[3] = this.sum(currentRow);
    currentRow[4] = this.multiply(currentRow);

    this.props.updateRows(currentRow, rowIndex);
  };
  sum = (row1) => {
    const sum = row1.reduce((sum, item, index) => {
      if (index < 3) {
        sum = item + sum;
      }
      return sum;
    }, 0);

    return sum;
  };
  multiply = (row1) => {
    const sum = row1.reduce((sum, item, index) => {
      if (index < 3) {
        sum = item * sum;
      }
      return sum;
    }, 1);

    return sum;
  };
  render() {
    const { rowsData } = this.props;

    const rows = rowsData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            {' '}
            <Input
              defaultValue={0}
              onChange={(e) => this.handleChange(e, 0, index, row)}
            />
          </td>
          <td>
            {' '}
            <Input
              defaultValue={0}
              onChange={(e) => this.handleChange(e, 1, index, row)}
            />
          </td>
          <td>
            {' '}
            <Input
              defaultValue={0}
              onChange={(e) => this.handleChange(e, 2, index, row)}
            />
          </td>
          <td>{row[3]}</td>
          <td>{row[4]}</td>
        </tr>
      );
    });
    return (
      <div>
        {' '}
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>No</td>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>A+B+C</td>
              <td>A*B*C</td>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rowsData: state.rowsData.rows,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllRows: (data) => dispatch(fetchAllRows(data)),
  updateRows: (data, rowIndex) => dispatch(updateRows(data, rowIndex)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SimpleTables);
