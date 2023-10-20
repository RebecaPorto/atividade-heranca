import { Bebe } from "./src/model/Bebe";
import { PessoaFisica } from "./src/model/PessoaFisica";
import { PessoaJuridica} from "./src/model/PessoaJuridica";

const um = new PessoaJuridica (`cururu`, `2323232434`);
um.setNome(`rebeca`)
um.setcnpj(`445465`)
console.log(um.getNome());
console.log(um.getcnpj());

const dois = new PessoaFisica (`livs`, `43421223233`);
dois.setNome(`roberta`);
dois.setCpf(`222332342323`);
console.log(dois.getNome());
console.log(dois.getCpf());

const Tres = new Bebe (`re`,`rebeca`, 400 , 15);
Tres.setNome(`rebeca`);
Tres.setPeso(350);
Tres.setAltura(20);
Tres.setId(`ra`);
console.log(Tres.getNome());
console.log(Tres.getPeso());
console.log(Tres.getAltura());
console.log(Tres.getId());