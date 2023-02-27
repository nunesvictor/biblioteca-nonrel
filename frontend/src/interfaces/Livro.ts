import Autor from "./Autor";

interface Livro {
  _id: string;
  autores: Autor[];
  nome: string;
}

export default Livro;
