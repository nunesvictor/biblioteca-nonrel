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
import AuthorListItem from "../components/AuthorListItem";
import Autor from "../interfaces/Autor";

const AuthorList = () => {
  const [autores, setAutores] = useState([] as Autor[]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/autores`)
      .then((res) => {
        res
          .json()
          .then((data) => setAutores(data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Paper className="BookList" sx={{ mb: 2, px: 2, py: 3 }}>
        {/* <SearchField /> */}
        <Typography>Lista de Livros</Typography>
        <List>
          {autores.map((autor) => (
            <AuthorListItem key={autor._id} autor={autor} />
          ))}
        </List>
      </Paper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Dados utilizados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="pre" sx={{ fontSize: ".825rem" }}>
            {JSON.stringify(autores, null, 4)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AuthorList;
