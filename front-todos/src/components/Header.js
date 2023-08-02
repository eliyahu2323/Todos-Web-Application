function Header({ showForm, setShowForm }) {
  const appTitle = "To-Dos";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="60" width="60" alt="To-Dos" />
        <h1>{appTitle}</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a notification"}
      </button>
    </header>
  );
}
export default Header;
