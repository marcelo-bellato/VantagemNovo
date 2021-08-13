#language: pt
Funcionalidade: cadastro de novo usuário

	Como um novo usuário
	Gostaria de criar uma nova conta
	Para poder acessar o site
	
Cenário: deve inserir email inválido	
	Dado que seleciono usuário
	Quando seleciono criar novo usuário
	E informo o usuário "Marcelo229"
	E informo o email inválido "silva.com.br"
	E Seleciono password
	Então o site me avisa sobre o erro no campo email