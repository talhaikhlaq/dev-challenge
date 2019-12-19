import React from 'react'
import axios from 'axios'

import DropdownForm from './form/DropdownForm'
import Details from './Details'

class Dashboard extends React.Component {
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

              <DropdownForm
                handleSubmit={this.handleSubmit}
                handleDropDown={this.handleDropDown}
              />

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

export default Dashboard