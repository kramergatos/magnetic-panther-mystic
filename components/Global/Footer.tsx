import ButtonIconOnly from '../Button/IconOnly'
import styles from '../../styles/Footer.module.css'
export default function Footer() {
  const buttonTop = {
    id: 1,
    url: "#header",
    icon: "fas fa-arrow-up",
    label: "Top of Page",
    target: "_self"
  }
  return (
    <footer className={styles.footer}>
      <a className={styles.logo} href="/">
        Magnetic<br />
        Panther<br />
        Mystic
      </a>
      <ButtonIconOnly data={buttonTop} key={buttonTop.id} />
      <div className={styles.made_with}>
        Made with&nbsp;
        <i className="fas fa-code"></i>
        &nbsp;&amp;&nbsp;
        <i className="fas fa-heart"></i>
      </div>
      <div className={styles.copyright}>&copy; 2022 Kramergatos. All Rights Reserved.</div>
    </footer>
  )
}
