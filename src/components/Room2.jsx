import { Fragment } from 'react';
import Room from '../images/gallery-img-14.jpeg';

const Room2 = () => {
    return (
      <Fragment>
        <h4 style={{position: 'absolute',  top:'15%', color: 'white', zIndex: 3}}>I am Room 2</h4>
        <img src={Room} alt='Room2' style={{position: "absolute",  zIndex:2,width:'100%', height:'100%'}}/>
      </Fragment>
    );
}

export default Room2;