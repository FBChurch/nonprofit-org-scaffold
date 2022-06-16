import React from "react";

import Banner from "../components/Global/Banner";

import Button from "../components/Global/Button";

import DonateOrVolunteer from "../components/Global/DonateOrVolunteer";

import * as styles from "../styles/pages/Contact.module.css";

export default function contact() {
  return (
    <div className={styles.contactContainer}>
      <Banner
        color="white"
        backgroundColor="darkblue"
        height={"22vh"}
        textDirection={"center"}
      >
        <h1>Contact Us</h1>
      </Banner>

      <section className={styles.contact}>
        <div className={styles.contactInfo}>
   {/*  <h2>Family Promise Administrative Offices</h2> */}
          <p>
            4032 W. Heroy Ave. <br /> Spokane, WA 99205
          </p>
          <p>
            Phone:  <br /> Fax: 
          </p>
          <p>Email: spokane.cornerstone@gmail.com</p>
          <img src="https://files.slack.com/files-pri/T03DLMN7U6R-F03FL15NSNQ/church_map.png" alt="Cornerstone Map Image"></img>
        </div>

    {/* <div className={styles.contactInfo}>
          <h2>Family Promise Emergency Shelter</h2>
          <p>
            2002 E. Mission Avenue <br /> Spokane, WA 99202 ​
          </p>
          <p>
            509-747-5487 <br /> Fax: 509-747-5537
          </p>
          <p>509-723-4663 (HOME)</p>

          <Button color={"gold"}>
            <h3 style={{ color: "#ad5aa0" }}>Looking for Help?</h3>
            <small style={{ color: "white" }}>
              Go to 2002 E. Mission Avenue.
            </small>
          </Button>
        </div> */}
      </section>

  {/* <section className={styles.formerGuest}>
        <h2>
          Are you a former guest <br /> appealing a decision?{" "}
        </h2>
        <Button
          onClick={() =>
            window.open(
              "https://familypromiseofspokane.typeform.com/to/H7u4rYp1?typeform-source=www.familypromiseofspokane.org",
              "_blank"
            )
          }
        >
          Apply here
        </Button>
      </section>

      <DonateOrVolunteer /> */}
    </div> 
  );
}
