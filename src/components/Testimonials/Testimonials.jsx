import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/287636502_1462312094198004_2615935801933715216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z7iSKgf1_t4AX-deuBg&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBEjkzB9RoovrAL0bK669SOqeoasYzxdDkOMsRm7paTwA&oe=65EFDFB4"
            alt=""
          />
          <h4>Nanthapong</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/271884089_1092887351504451_2876861814569776536_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FXtAG7WccFYAX-EVCXn&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfDUobP609fMsODmpGqfLQm3xE7-iwhaa5UtUoBHARGQ5w&oe=65F037E4"
            alt=""
          />
          <h4>Sorawit</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/288483147_3192277814385013_8710387001619729272_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oc5SP5rxjygAX99xODG&_nc_ht=scontent.fbkk5-1.fna&oh=00_AfDhfwDRGxNjY14r6p03cXqhv4npRd5ICcOf_kUI0wiPtQ&oe=65EF7111"
            alt=""
          />
          <h4>Thanawat</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;