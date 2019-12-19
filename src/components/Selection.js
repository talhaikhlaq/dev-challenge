import React from 'react'
import axios from 'axios'
import Details from './Details'

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

              <form onSubmit={this.handleSubmit}>
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
                <button className="submitBtn">Submit</button>
              </form>

              <Details
                queryData={this.state.queryData}
              />

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Selection