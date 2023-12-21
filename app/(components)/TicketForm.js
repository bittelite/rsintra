"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Avvik",
    department: "Kundesenter",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["category"] = ticket.category;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["department"] = ticket.department;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      try {
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      try {
        const res = await fetch("/api/Tickets", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
    router.refresh();
    router.push("/Member/Dashboard");
  };

  return (
    <>
      <div className="grid place-items-center pt-8">
        <h3 className="text-center">
          {EDITMODE ? "Oppdater oppgave" : "Opprett oppgave"}
        </h3>
      </div>
      <div className="grid grid-cols-12 pb-12">
        <form
          className="grid col-span-12 md:col-span-6 md:col-start-4 gap-10 p-5 bg-card rounded-md"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-flow-row">
              <label htmlFor="category" className="font-semibold">
                Type
              </label>
              <div className="inline-block relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Ordre">Ordre</option>
                  <option value="Tilbud">Tilbud</option>
                  <option value="Avvik">Avvik</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row">
              <label htmlFor="department" className="font-semibold">
                Avdeling
              </label>
              <div className="inline-block relative">
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="Kundesenter">Kundesenter</option>
                  <option value="Design">Design</option>
                  <option value="Produksjon">Produksjon</option>
                  <option value="Fakturering">Fakturering</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="title" className="font-semibold">
              Tittel
            </label>
            <div className="">
              <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.title}
                className="border-b border-b-gray-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="font-semibold">
              Beskrivelse
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
              rows="5"
            />
          </div>

          <div>
            <label className="font-semibold">Prioritet</label>
            <div className="grid grid-cols-5 gap-2">
              <div>
                <input
                  id="priority-1"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={1}
                  checked={formData.priority == 1}
                  className="peer hidden"
                />
                <label
                  htmlFor="priority-1"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-accent peer-checked font-semibold peer-checked:text-white bg-white"
                >
                  1
                </label>
              </div>
              <div>
                <input
                  id="priority-2"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={2}
                  checked={formData.priority == 2}
                  className="peer hidden"
                />
                <label
                  htmlFor="priority-2"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-accent peer-checked font-semibold peer-checked:text-white bg-white"
                >
                  2
                </label>
              </div>
              <div>
                <input
                  id="priority-3"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={3}
                  checked={formData.priority == 3}
                  className="peer hidden"
                />
                <label
                  htmlFor="priority-3"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-accent peer-checked font-semibold peer-checked:text-white bg-white"
                >
                  3
                </label>
              </div>
              <div>
                <input
                  id="priority-4"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={4}
                  checked={formData.priority == 4}
                  className="peer hidden"
                />
                <label
                  htmlFor="priority-4"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-accent peer-checked font-semibold peer-checked:text-white bg-white"
                >
                  4
                </label>
              </div>
              <div>
                <input
                  id="priority-5"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={5}
                  checked={formData.priority == 5}
                  className="peer hidden"
                />
                <label
                  htmlFor="priority-5"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-accent peer-checked font-semibold peer-checked:text-white bg-white"
                >
                  5
                </label>
              </div>
            </div>
          </div>

          <div className="grid">
            <label htmlFor="status" className="font-semibold">
              Status
            </label>
            <div className="inline-block relative">
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="ikke startet">Ikke startet</option>
                <option value="under arbeid">Under arbeid</option>
                <option value="ferdig">Ferdig</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>

          <label htmlFor="progress" className="font-semibold">
            Framdrift
          </label>
          <input
            type="range"
            id="progress"
            name="progress"
            value={formData.progress}
            min="0"
            max="100"
            onChange={handleChange}
            className="w-full h-2 rounded-xl appearance-none cursor-pointer border-none"
          />

          <div className="grid grid-flow-col gap-2">
            <input
              type="submit"
              className="btn rounded-none"
              value={EDITMODE ? "Oppdater oppgave" : "Send oppgave"}
            />
            <input
              type="submit"
              className="btn disabled:bg-gray-200 text-gray-400 rounded-none"
              value="Tøm skjema"
              disabled
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default TicketForm;
