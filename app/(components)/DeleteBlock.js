"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      icon={faXmark}
      className="text-sm pb-1 hover:cursor-pointer hover:text-red-600"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;