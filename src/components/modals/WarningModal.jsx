const WarningModal = (warning) => {
  return (
    <div id="warningModal">
      <div id="message">{warning}</div>
      <div id="warningOptionsBox"></div>
    </div>
  );
};

export default WarningModal;
