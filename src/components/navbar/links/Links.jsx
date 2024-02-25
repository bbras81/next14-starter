"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "Sobre nós",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  //Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {
          // Se a sessao estiver logada aparece o botão de logout
          session ? (
            <>
              {/* Se for admin aparece o route para a pagina desse admin */}
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}

              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            // Se nao estiver logado aparece o link para o login page
            <NavLink item={{ title: "login", path: "/login" }} />
          )
        }
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
