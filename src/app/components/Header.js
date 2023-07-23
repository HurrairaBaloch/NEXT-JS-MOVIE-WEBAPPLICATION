import React from "react";
import style from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className={style.main_header}>
      <div className={style.navbar_brand}>
        <Link href="/">
          <Image src={"/m.png"} alt="my logo " width={100} height={90} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
