import Links from "./links/Links";
import styles from "./navbar.module.css"


const NavLink = ({item}) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>NavLink</div>
            <div>
                <Links/>
            </div>
        </div>
    )
  };
  
  export default NavLink;