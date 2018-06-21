# Desafio Forlogic



Nesse arquivo irei resumir algumas das funcionalidades implementadas durante o projeto e quais foram as limitações

  - Instalação
  - Desenvolvimento do projeto
  - Tecnologia
  - Conclusão

# Instalação

  - Instalar os seguintes pacotes
 ```sh
$ npm install -g @angular/cli
$ npm install --save @angular/material @angular/cdk
$ npm install sweetalert --save
```

Para rodar você pode:
  ```sh
ng serve -o
```
Que fará abrir o projeto ser executado e podendo ser accessado do navegador através de http://localhost:4200/

Durante o desenvolvimento do projeto tive alguns problemas com a segurança do CORS do chrome, recomendo roda-lo usando uma execução do Google Chrome sem o CORS. Para isso acesse o 'Executar' do windows e digite 

chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

Em seguida pressione entrer e abra o projeto na porta 4200.

# Desenvolvimento
Por conta do pouco contato com o Angular 6 e conhecimento adquirido de forma experimental com os retornos da API, não conseguir atender à todas exigências do escopo, segue aqui algumas delas:
 - Cadastro de avaliações
 -- Validação referente ao cliente participar somente de uma nova avaliação após 2 meses.
 -- NPS não obtido corretamente
 -- Divulgação dos resultados baseado em cores e metas


> Algumas outras funcionalidades não tiveram suas validações totalmente implementadas ou apresentam nome de campos e labels diferentes do escopo, porém, com a mesma lógica.



### Tecnologia

Um pouco da tecnologia utilizada

* [Angular6] - Framework utilizado para aplicações web!
* [HTML] - Linguagem de marcação
* [CSS] - Usado para estilização, pouca experiência, não foi muito utilizado.

### Conclusão
Durante o desenvolvimento aprendi muito sobre as tecnologias utilizadas, mesmo o projeto apresentando algums problemas de arquitetura, este já é um esboço funcional do mesmo.

# CustomerEvaluation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
