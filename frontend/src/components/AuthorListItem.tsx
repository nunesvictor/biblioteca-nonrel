import FaceIcon from "@mui/icons-material/Face";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import Autor from "../interfaces/Autor";

interface IProps {
  autor: Autor;
}

const AuthorListItem: React.FC<IProps> = ({ autor }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <FaceIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={autor.nome} />
  </ListItem>
);

export default AuthorListItem;
