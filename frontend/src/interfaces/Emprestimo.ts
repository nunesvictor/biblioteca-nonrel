import Livro from "./Livro";
import Usuario from "./Usuario";

interface Emprestimo {
  _id: string;
  livro: Livro;
  usuario: Usuario;
  emprestado_em: string | Date;
  devolvido_em: null | string | Date;
  avaliacao: number;
}

export default Emprestimo;
