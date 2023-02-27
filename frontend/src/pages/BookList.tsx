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
import BookListItem from "../components/BookListItem";
import Livro from "../interfaces/Livro";

const BookList = () => {
  const [livros, setLivros] = useState([] as Livro[]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/livros`)
      .then((res) => {
        res
          .json()
          .then((data) => setLivros(data))
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
          {livros.map((livro) => (
            <BookListItem key={livro._id} livro={livro} />
          ))}
        </List>
      </Paper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Dados utilizados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="pre" sx={{ fontSize: ".825rem" }}>
            {JSON.stringify(livros, null, 4)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BookList;
