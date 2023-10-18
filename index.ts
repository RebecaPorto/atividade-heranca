import { PessoaFisica } from "./src/model/PessoaFisica";
import { PessoaJuridica} from "./src/model/PessoaJuridica";

const um = new PessoaJuridica (`cururu`, `2323232434-`);
um.setNome(`rebeca`)
um.setcnpj(`445465`)
console.log(um.getNome());
console.log(um.getcnpj());

const dois = new PessoaFisica (`livs`, `43421223233`);
dois.setNome(`roberta`);
dois.setCpf(`222332342323`);
console.log(dois.getNome());
console.log(dois.getCpf());