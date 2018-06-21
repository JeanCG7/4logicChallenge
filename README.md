# Desafio Forlogic



Nesse arquivo irei resumir algumas das funcionalidades implementadas durante o projeto e quais foram as limita��es

  - Instala��o
  - Desenvolvimento do projeto
  - Tecnologia
  - Conclus�o

# Instala��o

  - Instalar os seguintes pacotes
 ```sh
$ npm install -g @angular/cli
$ npm install --save @angular/material @angular/cdk
$ npm install sweetalert --save
```

Para rodar voc� pode:
  ```sh
ng serve -o
```
Que far� abrir o projeto ser executado e podendo ser accessado do navegador atrav�s de http://localhost:4200/

Durante o desenvolvimento do projeto tive alguns problemas com a seguran�a do CORS do chrome, recomendo roda-lo usando uma execu��o do Google Chrome sem o CORS. Para isso acesse o 'Executar' do windows e digite 

chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

Em seguida pressione entrer e abra o projeto na porta 4200.

# Desenvolvimento
Por conta do pouco contato com o Angular 6 e conhecimento adquirido de forma experimental com os retornos da API, n�o conseguir atender � todas exig�ncias do escopo, segue aqui algumas delas:
 - Cadastro de avalia��es
 -- Valida��o referente ao cliente participar somente de uma nova avalia��o ap�s 2 meses.
 -- NPS n�o obtido corretamente
 -- Divulga��o dos resultados baseado em cores e metas


> Algumas outras funcionalidades n�o tiveram suas valida��es totalmente implementadas ou apresentam nome de campos e labels diferentes do escopo, por�m, com a mesma l�gica.



### Tecnologia

Um pouco da tecnologia utilizada

* [Angular6] - Framework utilizado para aplica��es web!
* [HTML] - Linguagem de marca��o
* [CSS] - Usado para estiliza��o, pouca experi�ncia, n�o foi muito utilizado.

### Conclus�o
Durante o desenvolvimento aprendi muito sobre as tecnologias utilizadas, mesmo o projeto apresentando algums problemas de arquitetura, este j� � um esbo�o funcional do mesmo.

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
