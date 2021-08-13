#language: pt
Funcionalidade: cadastro de novo usuário
	
	Como um novo usuário
	Gostaria de criar uma nova conta
	Para poder acessar o site

Cenário: deve inserir conta com sucesso	
	Dado que seleciono usuário
	Quando seleciono criar novo usuário
	E informo o usuário "Marcelo229"
	E informo o email "bellato.consultor@gmail.com"
	E informo a senha "Os@sco10"
	E confirmo a senha "Os@sco10"
	E informo o nome "Marcelo"
	E informo o sobrenome "Silva"
	E informo o telefone "55999998855"
	E informo o País "Brazil"
	E informo a Cidade "Osasco"
	E informo o endereço "Avenida Santo Antonio"
	E informo o Estado "Sao Paulo"
	E informo o CEP "06080-000"
	E clico em concordar com as condições
	E clico em registrar
	Então vou para a página inicial
	
