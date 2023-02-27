import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
} from "@mui/material";
import React from "react";
import Emprestimo from "../interfaces/Emprestimo";

interface IProps {
  emprestimo: Emprestimo;
}

const BookLoanListItem: React.FC<IProps> = ({ emprestimo }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        {emprestimo.devolvido_em !== null ? (
          <SouthWestIcon />
        ) : (
          <NorthEastIcon />
        )}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={
        <span>
          {emprestimo.livro.nome}{" "}
          <Rating
            sx={{ verticalAlign: "baseline" }}
            value={emprestimo.avaliacao}
            size="small"
            readOnly
          />
        </span>
      }
      secondary={
        <span>
          {emprestimo.devolvido_em !== null
            ? "Devolvido por"
            : "Emprestado para"}{" "}
          <strong>{emprestimo.usuario.nome}</strong> em{" "}
          {new Date(
            emprestimo.devolvido_em !== null
              ? emprestimo.devolvido_em
              : emprestimo.emprestado_em
          ).toLocaleDateString()}{" "}
          às{" "}
          {new Date(
            emprestimo.devolvido_em !== null
              ? emprestimo.devolvido_em
              : emprestimo.emprestado_em
          ).toLocaleTimeString()}
          .
        </span>
      }
    />
  </ListItem>
);

export default BookLoanListItem;
