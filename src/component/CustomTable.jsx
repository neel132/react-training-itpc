import React from "react";
import Table from 'react-bootstrap/Table';

const CustomTable = (props) => {
  const {headers, data} = props; // Try to keep props name as generic as possible.
  /**
   * this will render the table cell
   *
   * @param {*} tableCell - array
   * @return {*} 
   */
  const _renderTableCell = (tableCell) => {
    return tableCell.map((value, index) => {
      return <td key={index}>{value}</td>
    })
  }
  /**
   * this will render the table data row wise
   *
   * @param {*} tableData - array
   * @return {*}
   */
  const _renderTableData = (tableData) => {
    return tableData.map((value, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          {_renderTableCell(Object.values(value))}
        </tr>
      )
    })
  }
  /**
   * this will render the table header
   *
   * @param {*} headerData - array
   * @return {*}
   */
  const _renderHeader = (headerData) => {
    return headerData.map((value, index) => {
      return <th key={index}>{value}</th>
    })
  }
  return (
    <Table borderless striped hover>
      <thead>
        <tr>
          <th>#</th>
          {_renderHeader(headers)}
        </tr>
      </thead>
      <tbody>
        {_renderTableData(data)}
      </tbody>
    </Table>
  )
}
export default CustomTable;