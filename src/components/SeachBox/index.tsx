import { ChangeEvent } from "react";
import "./styles.scss"

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({onChange}: Props){
  return(
    <input
      type="text"
      placeholder="Search User..."
      onChange={onChange}
    />
  )
}

export default SearchBox