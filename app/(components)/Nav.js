import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import {
  faHome,
  faRightFromBracket,
  faRightToBracket,
  faTableColumns,
  faTicket,
  faBook,
  faUserShield,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginButton } from "./LoginButton";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-nav">
      <nav className="container uiContainer flex justify-between items-center py-4 bg-nav">
        <Link href="/">
          <div className="logo">
            <span className="hidden">Reklameservice AS</span>
          </div>
        </Link>
        <div className="pageTitle">
          <Link href="/" className="font-thin">
            Intranett
          </Link>
        </div>
        <div className="flex gap-10 uppercase">
          {session ? (
            <>
              <Link href="/" className="hidden lg:flex">
                <span className="hidden">Hjem</span>
                <FontAwesomeIcon icon={faHome} className="icon" title="Hjem" />
              </Link>
              <div className="hidden">
                <Link href="/AdminUser" className="hidden lg:flex">
                  <span className="hidden">Administrator</span>
                  <FontAwesomeIcon
                    icon={faUserShield}
                    className="icon"
                    title="Administrator"
                  />
                </Link>
              </div>
              <Link href="/TicketPage/new" className="hidden lg:flex">
                <span className="hidden">Skjema</span>
                <FontAwesomeIcon
                  icon={faTicket}
                  className="icon"
                  title="Skjema"
                />
              </Link>
              <Link href="/Member/Dashboard" className="hidden lg:flex">
                <span className="hidden">Oppgaver</span>
                <FontAwesomeIcon
                  icon={faTableColumns}
                  className="icon"
                  title="Oppgaver"
                />
              </Link>
              <Link href="/Member" className="hidden lg:flex">
                <span className="hidden">Håndbok</span>
                <FontAwesomeIcon
                  icon={faBook}
                  className="icon"
                  title="Håndbok"
                />
              </Link>
              <Link href="/api/auth/signout?callbackUrl=/" className="flex">
                <span className="hidden">Logg ut</span>
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="icon"
                  title="Logg ut"
                />
              </Link>
              <div className="flex w-1 -ml-12 -mt-3 text-xs">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-green-500"
                  title="Pålogget"
                />
              </div>
            </>
          ) : (
            <>
              <LoginButton />
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
