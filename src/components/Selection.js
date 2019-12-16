import React from 'react'
import axios from 'axios'

class Selection extends React.Component {
  constructor() {
    super()

    this.state = { allData: {}, formData: { supplier: '', product: '' }, queryData: {} }
    this.handleDropDown = this.handleDropDown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/sampleDataset')
      .then(res => this.setState({ allData: res.data  }))
      .catch(err => console.log(err))
  }

  handleDropDown({ target: { name, value }}) {
    const formData = { ...this.state.formData, [name]: value }
    // console.log(formData)
    this.setState({ formData })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting')
    axios.get('/api/sampleData', { 
      params: 
        { 
          supplier: this.state.formData.supplier, 
          product: this.state.formData.product 
        }
    })
      // .then(res => console.log( res.data ))
      .then(res => this.setState({ queryData: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    if (!this.state.allData) return null
    console.log('render state:', this.state)
    return(
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 main">
              <h1 className="page-header">Product pricing</h1>

              <form onBlur={this.handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6" id="supplierSelect">
                    <label htmlFor="selSupplier">Supplier</label>
                    <select className="form-control" id="selSupplier" name="supplier" onChange={this.handleDropDown}>
                      <option value="">Please Select</option>
                      <option value="Old Co Ltd">Old Co Ltd</option>
                      <option value="New Co Ltd">New Co Ltd</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6" id="productSelect">
                    <label htmlFor="selProduct">Product</label>
                    <select className="form-control" id="selProduct" name="product" onChange={this.handleDropDown}>
                      <option value="">Please Select</option>
                      <option value="Mini wongle">Mini wongle</option>
                      <option value="Small wongle">Small wongle</option>
                      <option value="Large wongle">Large wongle</option>
                      <option value="Super wongle">Super wongle</option>
                    </select>
                  </div>
                </div>
              </form>

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
                      <td>{this.state.queryData._id}</td>
                      <td>{this.state.queryData.supplier}</td>
                      <td>{this.state.queryData.product}</td>
                      <td>{this.state.queryData.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Selection