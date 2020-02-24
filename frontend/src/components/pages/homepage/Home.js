import React from 'react'
import Container from './../../styled/Container'

const Home = () => {
  return (
    <Container>
      <div className="flex-homepage">
        <div>
          <img src="https://images.pexels.com/photos/1451471/pexels-photo-1451471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </div>
        <div>
          <h1><strong>Plants</strong> <br /> Life</h1>
        </div>
      </div>
    </Container>
  )
}

export default Home