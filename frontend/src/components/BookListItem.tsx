import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import Livro from "../interfaces/Livro";

interface IProps {
  livro: Livro;
}

const BookListItem: React.FC<IProps> = ({ livro }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <MenuBookIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={livro.nome}
      secondary={livro.autores.map((a) => a.nome).join("; ")}
    />
  </ListItem>
);

export default BookListItem;
