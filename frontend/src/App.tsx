import { Box, Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TabPanel from "./components/TabPanel";
import AuthorList from "./pages/AuthorList";
import BookList from "./pages/BookList";
import BookLoanList from "./pages/BookLoanList";
import UserList from "./pages/UserList";

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ my: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Livros" {...a11yProps(0)} />
          <Tab label="Autores" {...a11yProps(1)} />
          <Tab label="Empréstimos" {...a11yProps(2)} />
          <Tab label="Usuários" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BookList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AuthorList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BookLoanList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UserList />
      </TabPanel>
    </Container>
  );
};

export default App;
