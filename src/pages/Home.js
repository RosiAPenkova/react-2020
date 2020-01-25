import React from 'react';
import QuantitiInput from '../components/QuantityInput';

class Home extends React.Component {

 
    render() {
      return <div className="col-md-4">
         <QuantitiInput count={5}/>
      </div>
    }
  }


  export default Home;