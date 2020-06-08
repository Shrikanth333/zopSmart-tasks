import React from 'react';

import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { fetchAllRows, updateRows } from '../actions/tableActions';

export class SimpleTables extends React.Component {
  componentDidMount() {
    const { numberOfRows, numberOfColumns } = this.props;

    let table = [];
    for (let i = 0; i < numberOfRows; i++) {
      table.push(Array(numberOfColumns + 2).fill(0));
    }
    this.props.fetchAllRows(table);
  }
  handleChange = (e, id, rowIndex, currentRow) => {
    currentRow[id] = Number(e.target.value);
    currentRow[currentRow.length - 2] = this.sum(currentRow);
    currentRow[currentRow.length - 1] = this.multiply(currentRow);

    this.props.updateRows(currentRow, rowIndex);
  };
  sum = (row1) => {
    const sum = row1.reduce((sum, item, index) => {
      if (row1.length - index > 2) {
        sum = item + sum;
      }
      return sum;
    }, 0);

    return sum;
  };
  multiply = (row1) => {
    const sum = row1.reduce((sum, item, index) => {
      if (row1.length - index > 2) {
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
          {row.map((data, columnIndex) => {
            if (row.length - columnIndex > 2) {
              return (
                <td key={columnIndex}>
                  {' '}
                  <Input
                    defaultValue={0}
                    onChange={(e) =>
                      this.handleChange(e, columnIndex, index, row)
                    }
                  />
                </td>
              );
            } else {
              return <td key={columnIndex}>{data}</td>;
            }
          })}
        </tr>
      );
    });
    return rowsData[1] === undefined ? null : (
      <div>
        {' '}
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td>No</td>
              {rowsData[1].map((data, index) => {
                return rowsData[1].length - index > 2 ? (
                  <td key={index}>column{index + 1}</td>
                ) : rowsData[1].length - index > 1 ? (
                  <td key={index}>Addition</td>
                ) : (
                  <td key={index}>Multiplication</td>
                );
              })}
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
