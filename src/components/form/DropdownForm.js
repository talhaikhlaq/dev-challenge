import React from 'react'

import SupplierSelection from './SupplierSelection'
import ProductSelection from './ProductSelection'

const DropdownForm = ({ handleSubmit, handleDropDown }) => {
  return(
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          
          <SupplierSelection
            handleDropDown={handleDropDown}
          />
          
          <ProductSelection
            handleDropDown={handleDropDown}
          />

        </div>
        <button className="submitBtn">Submit</button>
      </form>
    </>
  )
}

export default DropdownForm