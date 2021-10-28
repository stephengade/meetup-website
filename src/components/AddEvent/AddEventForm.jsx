import { useRef } from "react";
import styles from "./AddEvent.module.css";

const AddEventForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const hostRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const timeRef = useRef();

  const submitEventHandler = (e) => {
    e.preventDefault();

    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const hostValue = hostRef.current.value;
    const imageValue = imageRef.current.value;
    const addressValue = addressRef.current.value;
    const timeValue = timeRef.current.value;

    const submittedData = {
      title: titleValue,
      description: descriptionValue,
      host: hostValue,
      image: imageValue,
      address: addressValue,
      time: timeValue,
    };

   props.onSubmittedDate(submittedData);
  };

  return (
    <div className={styles.eventForm} onSubmit={submitEventHandler}>
      <form className={styles.form}>
        <label htmlFor="title">Event Title</label>
        <input
          type="text"
          id="title"
          className={styles.input}
          required="required"
          maxLength={20}
          ref={titleRef}
        />

        <label htmlFor="description">The event is all about?</label>
        <textarea
          id="description"
          className={styles.input}
          required="required"
          maxLength={80}
          ref={descriptionRef}
        />

        <label htmlFor="address">Event Address</label>
        <input
          type="text"
          id="address"
          className={styles.input}
          required="required"
          maxLength={28}
          ref={addressRef}
        />

        <label htmlFor="time">Event Time</label>
        <input
          type="text"
          id="time"
          className={styles.input}
          required="required"
          ref={timeRef}
        />

        <label htmlFor="image">Paste Cover Image Link</label>
        <input
          type="url"
          id="image"
          className={styles.input}
          required="required"
          ref={imageRef}
        />

        <label htmlFor="host">Event Host</label>
        <input
          type="text"
          id="host"
          className={styles.input}
          required="required"
          maxLength={16}
          ref={hostRef}
        />

        <button className={styles.addFormBtn}>Publish Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
