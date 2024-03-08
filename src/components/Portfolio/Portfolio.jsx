import React from 'react'
import styles from './Portfolio.module.css';
import Tilt from "react-parallax-tilt";

function Portfolio() {

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://i.pinimg.com/564x/44/36/17/44361796114f70b6f2c364350619d7dc.jpg" alt="" />  
          </Tilt>
            <p>Project Title</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://i.pinimg.com/564x/74/28/9a/74289a1effc2e6aedbb1a90a9565d3b4.jpg
" alt="" />
          </Tilt>  
            <p>Project Title</p>
        </div>
        
        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://i.pinimg.com/564x/ad/17/4e/ad174e8cd94780425d5967a1e762adec.jpg
" alt="" />
          </Tilt>
            <p>Project Title</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://i.pinimg.com/564x/70/a1/51/70a151ea56ced5897fb902b2758f4c8f.jpg
" alt="" />
          </Tilt>
            <p>Project Title</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://i.pinimg.com/564x/34/47/69/344769d76913d039218e5a4e0b29f093.jpg
" alt="" />
          </Tilt>    
            <p>Project Title</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://i.pinimg.com/originals/16/e6/7b/16e67b4fb985d418db2524da9046de5b.gif" alt="" />
          </Tilt>  
            <p>Project Title </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio