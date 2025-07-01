import "./input.scss";

export function InputComponent() {
  return (
    <div>
      <form id="searchForm">
        <label>Search</label>
        <input name="search" id="search" placeholder="Enter search string" />
      </form>
    </div>
  );
}
