import styles from "@/app/contact/contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdEmail />{" "}
            </i>
            <h2>Email</h2>
            <p>hurairabaloch996@gmail.com </p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <Link href="/">
              {" "}
              Send Email <span>-&gt;</span>
            </Link>
          </div>

          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdVoiceChat />{" "}
            </i>
            <h2>Live Chat</h2>
            <p>03127798411</p>
            <p className={styles.last_para}>Weekends: 9 AM — 5 PM ET </p>
            <Link href="/">
              {" "}
              Chat Now <span>-&gt;</span>
            </Link>
          </div>

          <div className={styles.grid_card}>
            <i>
              {" "}
              <MdForum />{" "}
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p className={styles.last_para}>response time: 72 hours </p>
            <Link href="/" className={styles.anchorLink}>
              {" "}
              Ask The Community <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
