import { Input } from "./style";

function SearchBar(props) {
  return (
    <div>
      <Input
        Type="text"
        name="search"
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBar;
