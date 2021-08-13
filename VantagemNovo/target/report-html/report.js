$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("InserirConta.feature");
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
formatter.before({
  "duration": 612065700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "deve inserir conta com sucesso",
  "description": "",
  "id": "cadastro-de-novo-usuário;deve-inserir-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que seleciono usuário",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar novo usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"Marcelo229\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "informo o email \"bellato.consultor@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informo a senha \"Os@sco10\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "confirmo a senha \"Os@sco10\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informo o nome \"Marcelo\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informo o sobrenome \"Silva\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "informo o telefone \"55999998855\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "informo o País \"Brazil\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "informo a Cidade \"Osasco\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o endereço \"Avenida Santo Antonio\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o Estado \"Sao Paulo\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "informo o CEP \"06080-000\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "clico em concordar com as condições",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clico em registrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "vou para a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.selecionoUsuário()"
});
formatter.result({
  "duration": 379949400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoCriarNovoUsuário()"
});
formatter.result({
  "duration": 2625957200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo229",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 443880100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bellato.consultor@gmail.com",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoOEmail(String)"
});
formatter.result({
  "duration": 252612500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Os@sco10",
      "offset": 17
    }
  ],
  "location": "InserirContaSteps.informoASenha(String)"
});
formatter.result({
  "duration": 123909000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Os@sco10",
      "offset": 18
    }
  ],
  "location": "InserirContaSteps.confirmoASenha(String)"
});
formatter.result({
  "duration": 175103900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo",
      "offset": 16
    }
  ],
  "location": "InserirContaSteps.informoONome(String)"
});
formatter.result({
  "duration": 139801200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silva",
      "offset": 21
    }
  ],
  "location": "InserirContaSteps.informoOSobrenome(String)"
});
formatter.result({
  "duration": 165460900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55999998855",
      "offset": 20
    }
  ],
  "location": "InserirContaSteps.informoOTelefone(String)"
});
formatter.result({
  "duration": 171895400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brazil",
      "offset": 16
    }
  ],
  "location": "InserirContaSteps.informoOPaís(String)"
});
formatter.result({
  "duration": 158728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Osasco",
      "offset": 18
    }
  ],
  "location": "InserirContaSteps.informoACidade(String)"
});
formatter.result({
  "duration": 116569300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Avenida Santo Antonio",
      "offset": 20
    }
  ],
  "location": "InserirContaSteps.informoOEndereço(String)"
});
formatter.result({
  "duration": 224562500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sao Paulo",
      "offset": 18
    }
  ],
  "location": "InserirContaSteps.informoOEstado(String)"
});
formatter.result({
  "duration": 151203000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06080-000",
      "offset": 15
    }
  ],
  "location": "InserirContaSteps.informoOCEP(String)"
});
formatter.result({
  "duration": 164343400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.clicoEmConcordarComAsCondições()"
});
formatter.result({
  "duration": 118651600,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.clicoEmRegistrar()"
});
formatter.result({
  "duration": 71597400,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.vouParaAPáginaInicial()"
});
formatter.result({
  "duration": 1051433700,
  "status": "passed"
});
formatter.after({
  "duration": 815730000,
  "status": "passed"
});
formatter.uri("InserirEmailInvalido.feature");
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
formatter.before({
  "duration": 2859220700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "deve inserir email inválido",
  "description": "",
  "id": "cadastro-de-novo-usuário;deve-inserir-email-inválido",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que seleciono usuário",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "seleciono criar novo usuário",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informo o usuário \"Marcelo229\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "informo o email inválido \"silva.com.br\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "Seleciono password",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o site me avisa sobre o erro no campo email",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.selecionoUsuário()"
});
formatter.result({
  "duration": 1208366800,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.selecionoCriarNovoUsuário()"
});
formatter.result({
  "duration": 3931457800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo229",
      "offset": 19
    }
  ],
  "location": "InserirContaSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 212707400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "silva.com.br",
      "offset": 26
    }
  ],
  "location": "InserirEmailInvalidoSteps.informoOEmailInválido(String)"
});
formatter.result({
  "duration": 236058000,
  "status": "passed"
});
formatter.match({
  "location": "InserirEmailInvalidoSteps.selecionoPassword()"
});
formatter.result({
  "duration": 169974300,
  "status": "passed"
});
formatter.match({
  "location": "InserirEmailInvalidoSteps.oSiteMeAvisaSobreOErroNoCampoEmail()"
});
formatter.result({
  "duration": 1072801800,
  "status": "passed"
});
formatter.after({
  "duration": 2119710000,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "login",
  "description": "\nComo um usuário\nGostaria de acessar o site\nPara acessar a pagina inicial",
  "id": "login",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2934132800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "logar no site",
  "description": "",
  "id": "login;logar-no-site",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que seleciono usuário",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário na pagina de login \"Marcelo229\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha na pagina de login \"Os@sco10\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em Sign In na pagina de login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "vou para a página inicial",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.selecionoUsuário()"
});
formatter.result({
  "duration": 1256166700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo229",
      "offset": 38
    }
  ],
  "location": "LoginSteps.informoOUsuárioNaPaginaDeLogin(String)"
});
formatter.result({
  "duration": 137724500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Os@sco10",
      "offset": 28
    }
  ],
  "location": "LoginSteps.aSenhaNaPaginaDeLogin(String)"
});
formatter.result({
  "duration": 544578100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoEmSignInNaPaginaDeLogin()"
});
formatter.result({
  "duration": 94760300,
  "status": "passed"
});
formatter.match({
  "location": "InserirContaSteps.vouParaAPáginaInicial()"
});
formatter.result({
  "duration": 1052779500,
  "status": "passed"
});
formatter.after({
  "duration": 813260800,
  "status": "passed"
});
formatter.uri("TabletConsulta.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Consulta tablet",
  "description": "\r\nComo um usuário\r\nGostaria de acessar o site\r\nPara consultar um tablet",
  "id": "consulta-tablet",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 3074929600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Consultar um tablet",
  "description": "",
  "id": "consulta-tablet;consultar-um-tablet",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que seleciono usuário",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário na pagina de login \"Marcelo229\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha na pagina de login \"Os@sco10\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em Sign In na pagina de login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico em tablet",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico em tablet HP1000G2",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "vou para a página do tablet HP1000G2",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.selecionoUsuário()"
});
formatter.result({
  "duration": 1100331500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo229",
      "offset": 38
    }
  ],
  "location": "LoginSteps.informoOUsuárioNaPaginaDeLogin(String)"
});
formatter.result({
  "duration": 197640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Os@sco10",
      "offset": 28
    }
  ],
  "location": "LoginSteps.aSenhaNaPaginaDeLogin(String)"
});
formatter.result({
  "duration": 403694900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoEmSignInNaPaginaDeLogin()"
});
formatter.result({
  "duration": 112009000,
  "status": "passed"
});
formatter.match({
  "location": "TabletConsultaSteps.clicoEmTablet()"
});
formatter.result({
  "duration": 1925871100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "TabletConsultaSteps.clicoEmTabletHPG(int,int)"
});
formatter.result({
  "duration": 1452058000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 35
    }
  ],
  "location": "TabletConsultaSteps.vouParaAPáginaDoTabletHPG(int,int)"
});
formatter.result({
  "duration": 936583400,
  "status": "passed"
});
formatter.after({
  "duration": 938045600,
  "status": "passed"
});
formatter.uri("TabletVenda.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Comprar tablet",
  "description": "\nComo um usuário\nGostaria de acessar o site\nPara comprar um tablet",
  "id": "comprar-tablet",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 3014615100,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Comprar um tablet",
  "description": "",
  "id": "comprar-tablet;comprar-um-tablet",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que seleciono usuário",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário na pagina de login \"Marcelo229\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha na pagina de login \"Os@sco10\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clico em Sign In na pagina de login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico em tablet",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico em tablet HP1000G2",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "adiciono no carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clico em checkout",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clico em Next",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "seleciono o pagamento Mastercreditic",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "informo o numero do cartão \"488622335566\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "informo o CVV \"101\"",
  "keyword": "E "
});
formatter.step({
  "line": 21,
  "name": "informo o mês de expiração do cartão \"10\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "informo o ano de expiração do cartão \"2024\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "informo o nome do titular \"Marcelo Silva\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clico em pagar",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContaSteps.selecionoUsuário()"
});
formatter.result({
  "duration": 1181462200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo229",
      "offset": 38
    }
  ],
  "location": "LoginSteps.informoOUsuárioNaPaginaDeLogin(String)"
});
formatter.result({
  "duration": 224946300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Os@sco10",
      "offset": 28
    }
  ],
  "location": "LoginSteps.aSenhaNaPaginaDeLogin(String)"
});
formatter.result({
  "duration": 473248700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicoEmSignInNaPaginaDeLogin()"
});
formatter.result({
  "duration": 96956500,
  "status": "passed"
});
formatter.match({
  "location": "TabletConsultaSteps.clicoEmTablet()"
});
formatter.result({
  "duration": 1833861900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "TabletConsultaSteps.clicoEmTabletHPG(int,int)"
});
formatter.result({
  "duration": 1387819200,
  "status": "passed"
});
formatter.match({
  "location": "TabletVendaSteps.adicionoNoCarrinho()"
});
formatter.result({
  "duration": 938104400,
  "status": "passed"
});
formatter.match({
  "location": "TabletVendaSteps.clicoEmCheckout()"
});
formatter.result({
  "duration": 885582200,
  "status": "passed"
});
formatter.match({
  "location": "TabletVendaSteps.clicoEmNext()"
});
formatter.result({
  "duration": 2282147100,
  "status": "passed"
});
formatter.match({
  "location": "TabletVendaSteps.selecionoOPagamentoMastercreditic()"
});
formatter.result({
  "duration": 1131259700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "488622335566",
      "offset": 28
    }
  ],
  "location": "TabletVendaSteps.informoONumeroDoCartão(String)"
});
formatter.result({
  "duration": 249381800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 15
    }
  ],
  "location": "TabletVendaSteps.informoOCVV(String)"
});
formatter.result({
  "duration": 123298300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 38
    }
  ],
  "location": "TabletVendaSteps.informoOMêsDeExpiraçãoDoCartão(String)"
});
formatter.result({
  "duration": 210307300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2024",
      "offset": 38
    }
  ],
  "location": "TabletVendaSteps.informoOAnoDeExpiraçãoDoCartão(String)"
});
formatter.result({
  "duration": 171264000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marcelo Silva",
      "offset": 27
    }
  ],
  "location": "TabletVendaSteps.informoONomeDoTitular(String)"
});
formatter.result({
  "duration": 240478300,
  "status": "passed"
});
formatter.match({
  "location": "TabletVendaSteps.clicoEmPagar()"
});
formatter.result({
  "duration": 101251800,
  "status": "passed"
});
formatter.after({
  "duration": 1370828700,
  "status": "passed"
});
});