import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { LoginButton } from "./(components)/LoginButton";

const Home = async () => {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <>
          <div className="grid lg:grid-cols-2 my-10">
            <div>
              <Image src="/ill/party_ballon.svg" width={754} height={557} />
            </div>
            <div className="grid lg:grid-cols-6 items-center pt-10 lg:pt-0">
              <div className="col-start-2 col-span-4 gap-5">
                <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold mb-7">
                  Velkommen!
                </h1>
                <p className="text-lg mb-5">
                  Du har på magisk vis greid å komme deg til vårt intranett. Det
                  burde feires! Hva med litt ny kunnskap?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-2 xl:gap-5">
                  <Link className="btn mb-3" href="/Member">
                    Utforsk håndboka
                  </Link>
                  <Link
                    className="btn mb-3 btnDeepAccent"
                    href="/Member/Dashboard"
                  >
                    Se oppgavelista
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 my-10 gap-5">
            <div className="bg-card hover:bg-card-hover rounded-md p-5 mb-3">
              Nyheter
            </div>
            <div className="bg-card hover:bg-card-hover rounded-md p-5 mb-3">
              Verktøy
            </div>
            <div className="bg-card hover:bg-card-hover rounded-md p-5 mb-3">
              Ressurser
            </div>
            <div className="bg-card hover:bg-card-hover rounded-md p-5 mb-3">
              Oppgaver
            </div>
          </div>
        </>
      ) : (
        <div className="grid lg:grid-cols-2 my-10">
          <div>
            <Image src="/ill/lift_notice.svg" width={754} height={557} />
          </div>
          <div className="grid lg:grid-cols-6 items-center pt-10 lg:pt-0">
            <div className="col-start-2 col-span-4 gap-5">
              <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold mb-7">
                Bli kjent med intranettet vårt
              </h1>
              <p className="text-lg mb-7">
                Intranettet er laget for å gjøre arbeidshverdagen din enklere og
                mer produktiv - en ressurs for alle ansatte. Her vil du finne
                informasjon om det du trenger for å kunne lykkes i din rolle.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-5 xl:gap-5">
                <Link className="btn" href="/Article">
                  Les mer
                </Link>
                <div className="btn btnDeepAccent grid grid-flow-col hover:text-white">
                  <span className="inline-block text-right md:hidden hover:text-white">
                    Logg inn
                  </span>
                  <LoginButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
