import { InputComponent } from "./Input";
import "./search.scss";
import { HeaderComponent } from "./header/Header";

export const Search = () => (
  <>
    <HeaderComponent />
    <div className="search-bar">
      <InputComponent />
    </div>
  </>
);
