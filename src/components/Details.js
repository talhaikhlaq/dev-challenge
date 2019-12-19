import React from 'react'

const Details = ({ queryData }) => {
  return(
    <>
      <h2 className="sub-header">Product details</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>Supplier</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{queryData._id}</td>
              <td>{queryData.supplier}</td>
              <td>{queryData.product}</td>
              <td>{queryData.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Details