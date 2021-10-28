import { useHistory } from "react-router-dom";
import AddEventForm from "./AddEventForm";

const AddEvent = () => {
  const history = useHistory();

  const addNewEvent = (submittedData) => {
    fetch("https://stefenta-001-default-rtdb.firebaseio.com/events.json", {
      method: "POST",
      body: JSON.stringify(submittedData),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      alert("Shoot! Your Event Has Been Published Successfully!");
      history.replace("/");
    });
  };

  return (
    <div className="addEvent">
      <AddEventForm onSubmittedDate={addNewEvent} />
    </div>
  );
};
export default AddEvent;
