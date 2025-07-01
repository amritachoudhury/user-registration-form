export default function UserNotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "48px" }}>
      <h1>User Not Found</h1>
      <p>
        The user you are looking for does not exist.{" "}
        <span style={{ fontStyle: "italic" }}>Please reset search string</span>
      </p>
    </div>
  );
}
