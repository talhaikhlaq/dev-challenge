import React from 'react'

const SupplierSelection = ({ handleDropDown }) => {
  return(
    <>
      <div className="form-group col-md-6" id="supplierSelect">
        <label htmlFor="selSupplier">Supplier</label>
        <select className="form-control" id="selSupplier" name="supplier" onChange={handleDropDown}>
          <option value="">Please Select</option>
          <option value="Old Co Ltd">Old Co Ltd</option>
          <option value="New Co Ltd">New Co Ltd</option>
        </select>
      </div>
    </>
  )
}

export default SupplierSelection