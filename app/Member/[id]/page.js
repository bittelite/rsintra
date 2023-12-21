import WikiForm from "../../(components)/WikiForm";

const getWikiById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Wiki/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get wiki.");
  }

  return res.json();
};

const WikiPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateWikiData = {};
  if (EDITMODE) {
    updateWikiData = await getWikiById(params.id);
    updateWikiData = updateWikiData.foundWiki;
  } else {
    updateWikiData = {
      _id: "new",
    };
  }
  return (
    <>
      <WikiForm wiki={updateWikiData} />
    </>
  );
};

export default WikiPage;
