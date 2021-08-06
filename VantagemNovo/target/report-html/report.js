$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/novo_usuario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "cadastro de novo usuário",
  "description": "\r\nComo um novo usuário\r\nGostaria de criar uma nova conta\r\nPara poder acessar o site",
  "id": "cadastro-de-novo-usuário",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-novo-usuário;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "seleciono usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "seleciono criar novo usuário",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "vou para outra tela onde informo o nome de usuário",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "email",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "senha",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "confirmo a senha",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "seleciono concordo",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clico em registrar",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.que_estou_acessando_a_aplicação()"
});
formatter.result({
  "duration": 5592421200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_usuário()"
});
formatter.result({
  "duration": 1736416900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_criar_novo_usuário()"
});
formatter.result({
  "duration": 5634784900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.vou_para_outra_tela_onde_informo_o_nome_de_usuário()"
});
formatter.result({
  "duration": 255716100,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.email()"
});
formatter.result({
  "duration": 359008700,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.senha()"
});
formatter.result({
  "duration": 304743400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.confirmo_a_senha()"
});
formatter.result({
  "duration": 294731800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.seleciono_concordo()"
});
formatter.result({
  "duration": 304157400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.clico_em_registrar()"
});
formatter.result({
  "duration": 216090000,
  "status": "passed"
});
formatter.after({
  "duration": 232631700,
  "status": "passed"
});
formatter.after({
  "duration": 1157853800,
  "status": "passed"
});
});