import Link from "next/link";
import { faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = async () => {
  return (
    <footer className="footer container">
      <div className="contentContainer grid lg:grid-cols-12 gap-8 lg:gap-0">
        <div className="lg:col-start-1 lg:col-end-5">
          <h3>Hurtiglenker</h3>
          <div className="grid md:grid-cols-2 gap-5">
            <Link className="btn btnBorderWhite" href="https://www.office.com/">
              Microsoft 365
              <FontAwesomeIcon icon={faLink} className="icon text-white" />
            </Link>
            <Link
              className="btn btnBorderWhite"
              href="https://www.tripletex.no/"
            >
              Tripletex
              <FontAwesomeIcon icon={faLink} className="icon text-white" />
            </Link>
            <Link
              className="btn btnBorderWhite"
              href="http://controldesk1.ezembra.com:8080/ContentManager/#login"
            >
              Scala
              <FontAwesomeIcon icon={faLink} className="icon text-white" />
            </Link>
            <Link
              className="btn btnBorderWhite"
              href="https://app.embedsignage.com/login"
            >
              Embed
              <FontAwesomeIcon icon={faLink} className="icon text-white" />
            </Link>
          </div>
        </div>
        <div className="grid lg:col-start-6 lg:col-end-9">
          <h3>Tilbakemelding</h3>
          <p>
            Noe på hjertet? Tips til forbedringer? Vi vil høre fra deg! Send oss
            din tilbakemelding på e-post.
          </p>
          <Link className="btn btnWhite self-start" href="/">
            Gi tilbakemelding
            <FontAwesomeIcon icon={faPaperPlane} className="icon" />
          </Link>
        </div>
        <div className="lg:col-start-10 lg:col-end-12">
          <h3>Kontakt</h3>
          <p>
            Reklameservice AS
            <br />
            Eikremsvingen 7, 6400 MOLDE
          </p>
          <p>
            +47 71 71 71 71
            <br />
            post@reklameservice.no
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
