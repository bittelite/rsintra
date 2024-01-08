import Image from "next/image";
const Article = () => {
  return (
    <div className="grid mb-10">
      <div className="articleHero">
        <Image src="/ill/lift_notice.svg" width={1326} height={980} />
      </div>
      <div className="grid lg:grid-cols-12 items-center lg:pt-0 z-10 lg:-mt-80 xl:-mt-96">
        <div className="col-start-5 md:col-start-3 md:col-span-8 xl:col-start-4 xl:col-span-6 col-span-6 gap-5 bg-white pt-10 md:p-24 xl:p-20">
          <h1 className="text-5xl md:text-4xl lg:text-4xl xl:text-6xl font-semibold mb-7">
            En portal for deling av kunnskap
          </h1>
          <p className="text-lg mb-7">
            Intranettet er laget for å gjøre arbeidshverdagen din enklere og mer
            produktiv - en ressurs for alle ansatte. Her vil du finne
            informasjon om det du trenger for å kunne lykkes i din rolle.
          </p>
          <p className="mb-5">
            Quisque vel sapien ut est fermentum tempus et non nisl. Sed quis
            mollis tortor. Maecenas lobortis nibh quis velit efficitur
            dignissim. Phasellus interdum, tellus in ullamcorper suscipit, leo
            ante venenatis ex, id rutrum metus felis vitae erat.
          </p>
          <p className="mb-5">
            Nunc libero justo, egestas at varius ac, pharetra eu tortor.
            Pellentesque iaculis elit a placerat ultrices. Nullam tempor eros
            efficitur blandit vulputate. Duis laoreet egestas elit nec
            imperdiet. Phasellus imperdiet purus vitae purus luctus euismod.
            Vivamus laoreet sapien a nibh lacinia, sed euismod ipsum pretium.
            Vestibulum consequat urna in sollicitudin elementum. Cras at
            fringilla mi.
          </p>
          <Image
            src="/ill/mobile_check.svg"
            width={748}
            height={530}
            className=""
          />
          <p className="text-xs text-gray-500 mb-7">
            Cras vitae eros diam. Nam rutrum enim vel vehicula cursus. Nullam
            quam sem, congue sit amet ante eget. Kred: Facilisis tincidunt
            tellus
          </p>
          <p className="mb-5">
            Aliquam tempus in est at dignissim. Praesent porttitor tellus enim,
            eu faucibus lectus placerat at. Duis suscipit diam a tristique
            finibus. Cras vitae eros diam. Nam rutrum enim vel vehicula cursus.
            Nullam quam sem, congue sit amet ante eget, facilisis tincidunt
            tellus.
          </p>
          <p className="mb-7">
            Mauris et arcu non nisl convallis cursus at a purus. Sed
            sollicitudin placerat lorem, sed venenatis nunc consectetur eget.
          </p>
          <div className="grid grid-cols-5 gap-4 py-5 border-y border-gray-100">
            <div className="col-span-2 md:col-span-1 rounded bg-deep-accent-hover"></div>
            <div className="grid col-span-3 md:col-span-4 md:grid-flow-col gap-5">
              <p>
                <span className="text-xs">Skrevet av</span>
                <br />
                <span className="text-xl font-semibold text-blue-accent">
                  Navn Navnesen,
                  <br />
                  stillingstittel
                </span>
              </p>
            </div>
          </div>
          <p className="text-xs pt-5">
            Publisert torsdag 14.12.2023 - 22:09 | Oppdatert torsdag 14.12.2023
            - 22:37
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
