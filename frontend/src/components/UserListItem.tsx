import FaceIcon from "@mui/icons-material/Face";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import Usuario from "../interfaces/Usuario";

interface IProps {
  usuario: Usuario;
}

const UserListItem: React.FC<IProps> = ({ usuario }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <FaceIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={usuario.nome} secondary={usuario.username} />
  </ListItem>
);

export default UserListItem;
