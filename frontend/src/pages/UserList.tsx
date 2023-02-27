import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import UserListItem from "../components/UserListItem";
import Usuario from "../interfaces/Usuario";

const UserList = () => {
  const [usuarios, setUsuarios] = useState([] as Usuario[]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/usuarios`)
      .then((res) => {
        res
          .json()
          .then((data) => setUsuarios(data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Paper className="UserList" sx={{ mb: 2, px: 2, py: 3 }}>
        {/* <SearchField /> */}
        <Typography>Autores</Typography>
        <List>
          {usuarios.map((usuario) => (
            <UserListItem key={usuario._id} usuario={usuario} />
          ))}
        </List>
      </Paper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Dados utilizados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="pre" sx={{ fontSize: ".825rem" }}>
            {JSON.stringify(usuarios, null, 4)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default UserList;
