import { Fragment } from 'react';
import Room from '../images/gallery-img-9.jpeg';
import { Suspense } from 'react';
import { Await } from 'react-router-dom';

const Room1 = () => {

    
   const sleep  = async () => {
     await new Promise((resolve) => {
       setTimeout(resolve, 1500);
     });
     return 0;
   };

  const sleepVal = sleep();

    return (
      <Fragment>
        <h4 style={{ position: "absolute", top: "15%", color: "white", zIndex: 3}}>
          I am Room 1
        </h4>
        <Suspense fallback={<p style={{position:'absolute', top: '-10%'}}>Loading....</p>}>
          <Await resolve={sleepVal}>
            <img
              src={Room}
              alt="Room1"
              style={{position: "absolute",  zIndex:2,width:'100%', height:'100%'}}
            />
          </Await>
        </Suspense>
      </Fragment>
    );
}

export default Room1;