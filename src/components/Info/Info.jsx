import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './Info.css';


const Info = () => {

  return (
    <>
    <Navbar />
    <div>
      <p>
        Diabetic retinopathy (die-uh-BET-ik ret-ih-NOP-uh-thee) is a diabetes complication that affects eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina).
        At first, diabetic retinopathy might cause no symptoms or only mild vision problems. But it can lead to blindness.
        The condition can develop in anyone who has type 1 or type 2 diabetes. The longer you have diabetes and the less controlled your blood sugar is, the more likely you are to develop this eye complication.
      </p>
    </div>
    </>
  );
};

export default Info;