import Postagem from "./Postagem";

export default interface Usuario {
  id?: number | null
  nome: string;
  usuario: string;
  foto: string | null;
  senha: string;
  postagem?: Postagem[] | null;
}