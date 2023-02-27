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
import BookLoanListItem from "../components/BookLoanListItem";
import Emprestimo from "../interfaces/Emprestimo";

const BookLoanList = () => {
  const [emprestimos, setEmprestimos] = useState([] as Emprestimo[]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/emprestimos`)
      .then((res) => {
        res
          .json()
          .then((data) => setEmprestimos(data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Paper className="BookLoanList" sx={{ mb: 2, px: 2, py: 3 }}>
        {/* <SearchField /> */}
        <Typography>Empréstimos</Typography>
        <List>
          {emprestimos.map((emprestimo) => (
            <BookLoanListItem key={emprestimo._id} emprestimo={emprestimo} />
          ))}
        </List>
      </Paper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Dados utilizados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="pre" sx={{ fontSize: ".825rem" }}>
            {JSON.stringify(emprestimos, null, 4)}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BookLoanList;
