export default function Input({ label, error, ...props }) {
  return (
    <div style={{ marginBottom: 15 }}>
      <label>{label}</label><br />
      <input
        {...props}
        style={{ padding: 8, width: "100%", marginTop: 5 }}
      />
      {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
    </div>
  );
}
