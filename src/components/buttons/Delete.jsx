const DeleteBtn = () => {
  const handleDelete = () => {
    alert("Are you sure about that?");
  };

  return (
    <button className="Btn Danger" onClick={handleDelete()}>
      Delete
    </button>
  );
};

export default DeleteBtn;
