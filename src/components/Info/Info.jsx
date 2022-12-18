import React, { useState } from 'react';
import Navbar from '../navbar/navbar';
import './Info.css';
import image from './image.png'

const Info = () => {

  return (
    <>
    <Navbar />
    <div className='container'>
        <div className='image'>
            <img src={image} />
        </div>
        <div className='Text'>
            <h1 className='aboutHead'>
                <strong>
                  What is diabetic retinopathy?
                </strong>
            </h1>
              Diabetic retinopathy is an eye condition that can cause vision loss and blindness in people who have diabetes. It affects blood vessels in the retina (the light-sensitive layer of tissue in the back of your eye).
              If you have diabetes, it’s important to get a comprehensive dilated eye exam at least once a year. Diabetic retinopathy may not have any symptoms at first — but finding it early can help you take steps to protect your vision. 
              Managing your diabetes — by staying physically active, eating healthy, and taking your medicine — can also help you prevent or delay vision loss.  

              <h1 className='aboutHead'>
                <strong>
                What are the symptoms of diabetic retinopathy?
                </strong>
            </h1>
              
The early stages of diabetic retinopathy usually don’t have any symptoms. Some people notice changes in their vision, like trouble reading or seeing faraway objects. These changes may come and go. 

In later stages of the disease, blood vessels in the retina start to bleed into the vitreous (gel-like fluid that fills your eye). If this happens, you may see dark, floating spots or streaks that look like cobwebs. Sometimes, the spots clear up on their own — but it’s important to get treatment right away. Without treatment, scars can form in the back of the eye. Blood vessels may also start to bleed again, or the bleeding may get worse.

<h1 className='aboutHead'>
                <strong>
                What causes diabetic retinopathy?
                </strong>
            </h1>

Diabetic retinopathy is caused by high blood sugar due to diabetes. Over time, having too much sugar in your blood can damage your retina — the part of your eye that detects light and sends signals to your brain through a nerve in the back of your eye (optic nerve).  

Diabetes damages blood vessels all over the body. The damage to your eyes starts when sugar blocks the tiny blood vessels that go to your retina, causing them to leak fluid or bleed. To make up for these blocked blood vessels, your eyes then grow new blood vessels that don’t work well. These new blood vessels can leak or bleed easily. 

        </div>
    </div>
    </>
  );
};

export default Info;