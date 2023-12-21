import TicketCard from "../../(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch(process.env.VERCEL_URL + "/api/Tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div>
      <h2 className="hidden">Dashboard</h2>
      <div className="bg-card hover:bg-card-hover rounded-md p-5 mb-3">
        Filter (avdeling, prioritet, kundenavn, eier/ansatt, status)
      </div>
      <div className="grid md:grid-cols-3 gap-10 pb-5">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-lg text-center">{uniqueCategory}</h3>
              <div className="lg:grid grid-flow-row sm:rows-2">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
