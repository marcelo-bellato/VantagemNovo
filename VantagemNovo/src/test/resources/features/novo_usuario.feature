#language: pt
Funcionalidade: cadastro de novo usuário
	
	Como um novo usuário
	Gostaria de criar uma nova conta
	Para poder acessar o site

Cenário: Deve inserir uma conta com sucesso
	Dado que estou acessando a aplicação
	Quando seleciono usuário
	E seleciono criar novo usuário
	Então vou para outra tela onde informo o nome de usuário
	E informo o email
	E informo a senha
	E confirmo a senha
	E seleciono concordo
	Então clico em registrar com sucesso
	

