import React from 'react'
import Container from './../../styled/Container'
import { headers } from './../../../lib/headers'
import { get } from 'axios'
import Plant from './plantCard/Plant'

class Index extends React.Component {
  state = {
    data: []
  }

  getPlantsData = async() => {
    try {
      const { data } = await get('/api/plants', headers)
      this.setState({ data })
    } catch(err) {
      this.props.history.push('/error')
    }
  }
  componentDidMount = () => {
    this.getPlantsData()
  } 

  render() {
    return (
      <Container>
        <div className='flex flex-index'>
          <div>
            <h1>My <br /><strong>Terranium</strong></h1>
          </div>
          <div className="plant-flex">
            {
              this.state.data.map(plant => {
                return <Plant key={plant.id} plant={plant}/>
              })
            }
          </div>
        </div>
      </Container>
    )
  }
}

export default Index