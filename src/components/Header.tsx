import { location } from "../constants/location";

export default function Header() {
  return (
    <header className="header">
      <span></span>
      <div className="right-location">
        <span>{location}</span>
      </div>
    </header>
  );
}
