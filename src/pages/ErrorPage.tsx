import { Link } from "react-router-dom";
import Header from "../layouts/components/Header";
import Footer from "../layouts/components/Footer";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <div id="error-page">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
