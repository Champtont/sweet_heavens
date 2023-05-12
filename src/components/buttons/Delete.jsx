import { useState } from "react";
import WarningModal from "../modals/WarningModal";

const DeleteBtn = (ObjectToDelete) => {
  const [deleting, isDeleting] = useState(false);
  const handleDelete = () => {
    isDeleting(true);
  };

  return (
    <button className="Btn Danger" onClick={handleDelete()}>
      Delete
    </button>
  );
};

export default DeleteBtn;
