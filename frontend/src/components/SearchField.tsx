import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const SearchField = () => (
  <FormControl fullWidth>
    <InputLabel htmlFor="search-field">Pesquisar</InputLabel>
    <OutlinedInput
      id="search-field"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
      label="Pesquisar"
    />
  </FormControl>
);

export default SearchField;
