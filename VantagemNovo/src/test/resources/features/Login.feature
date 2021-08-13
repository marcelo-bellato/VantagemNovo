#language: pt
Funcionalidade: login

	Como um usuário
	Gostaria de acessar o site
	Para acessar a pagina inicial

Cenário: logar no site
	Dado que seleciono usuário
	Quando informo o usuário na pagina de login "Marcelo229"
	E a senha na pagina de login "Os@sco10"
	E clico em Sign In na pagina de login
	Então vou para a página inicial