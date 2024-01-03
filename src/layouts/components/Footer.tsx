import Logo, { LogoColor } from "../../components/Logo";
import c from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={c.mainFooter}>
      <Logo color={LogoColor.WHITE} width={122} height={40} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
