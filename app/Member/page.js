import Image from "next/image";
import Link from "next/link";
const Member = async () => {
  return (
    <div className="grid lg:grid-cols-2 my-10">
      <div>
        <Image src="/ill/open_book.svg" width={754} height={557} />
      </div>
      <div className="grid lg:grid-cols-6 items-center pt-10 lg:pt-0">
        <div className="col-start-2 col-span-4 gap-5">
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-semibold mb-7">
            Litt tidlig ute?
          </h1>
          <p className="text-lg mb-5">
            ... psst! Det er ikke noe her ennå. Kom tilbake når intranettet er
            lansert :-)
          </p>
          <Link href="/Article" className="btn">
            Les artikkel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Member;
