import React from 'react';
import NewProducts from '../components/NewProducts';
import Banner from '../components/Banner';
import Store from '../components/Store';
const Home = () => {
  return (
    <div className='container'>
      {/*<Banner/>*/}
      <Store/>
      <NewProducts/>
    </div>
  )
}

export default Home