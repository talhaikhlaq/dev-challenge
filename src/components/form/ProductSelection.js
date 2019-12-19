import React from 'react'

const ProductSelection = ({ handleDropDown }) => {
  return(
    <>
      <div className="form-group col-md-6" id="productSelect">
        <label htmlFor="selProduct">Product</label>
        <select className="form-control" id="selProduct" name="product" onChange={handleDropDown}>
          <option value="">Please Select</option>
          <option value="Mini wongle">Mini wongle</option>
          <option value="Small wongle">Small wongle</option>
          <option value="Large wongle">Large wongle</option>
          <option value="Super wongle">Super wongle</option>
        </select>
      </div>
    </>
  )
}

export default ProductSelection