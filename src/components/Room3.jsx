import { Fragment } from 'react';
import Room from '../images/gallery-img-5.jpeg';

const Room3 = () => {
    return (
      <Fragment>
        <h4 style={{position: 'absolute', top:'15%', color: 'white', zIndex: 3}}>I am Room 3</h4>
        <img src={Room} alt='Room3' style={{position: "absolute",  zIndex:2,width:'100%', height:'100%'}}/>
      </Fragment>
    );
}

export default Room3;