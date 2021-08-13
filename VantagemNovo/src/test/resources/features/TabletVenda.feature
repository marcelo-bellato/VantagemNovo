#language: pt
Funcionalidade: Comprar tablet

	Como um usuário
	Gostaria de acessar o site
	Para comprar um tablet

Cenário: Comprar um tablet
	Dado que seleciono usuário
	Quando informo o usuário na pagina de login "Marcelo229"
	E a senha na pagina de login "Os@sco10"
	E clico em Sign In na pagina de login
	E clico em tablet
	E clico em tablet HP1000G2	
	E adiciono no carrinho
	E clico em checkout
	E clico em Next
	E seleciono o pagamento Mastercreditic
	E informo o numero do cartão "488622335566"
	E informo o CVV "101"
	E informo o mês de expiração do cartão "10"
	E informo o ano de expiração do cartão "2024"
	E informo o nome do titular "Marcelo Silva"
	Então clico em pagar