package br.sp.bellato.steps;

import org.junit.Assert;

import br.sp.bellato.page.CadastroPage;
import br.sp.bellato.page.InicialPage;
import br.sp.bellato.page.LoginPage;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContaSteps {

	InicialPage inicialPage = new InicialPage();	
	CadastroPage cadastroPage = new CadastroPage();
	LoginPage loginPage = new LoginPage();	
	
	@Dado("^que seleciono usuário$")
	public void selecionoUsuário() throws Throwable {
		inicialPage.setUser();
	}

	@Quando("^seleciono criar novo usuário$")
	public void selecionoCriarNovoUsuário() throws Throwable {
		Thread.sleep(2000);
		loginPage.setNewAccount();
	}

	@Quando("^informo o usuário \"([^\"]*)\"$")
	public void informoOUsuário(String arg1) throws Throwable {
		cadastroPage.setUserName(arg1);
	}	
	
	@Quando("^informo o email \"([^\"]*)\"$")
	public void informoOEmail(String arg1) throws Throwable {
	    cadastroPage.setEmail(arg1);
	}
	
	@Quando("^informo a senha \"([^\"]*)\"$")
	public void informoASenha(String arg1) throws Throwable {
	    cadastroPage.setSenha(arg1);
	}
	
	@Quando("^confirmo a senha \"([^\"]*)\"$")
	public void confirmoASenha(String arg1) throws Throwable {
		cadastroPage.setConfirmSenha(arg1);
	}

	
	@Quando("^informo o nome \"([^\"]*)\"$")
	public void informoONome(String arg1) throws Throwable {
	    cadastroPage.setNome(arg1);
	}
	
	@Quando("^informo o sobrenome \"([^\"]*)\"$")
	public void informoOSobrenome(String arg1) throws Throwable {
	    cadastroPage.setSobrenome(arg1);
	}
	
	@Quando("^informo o telefone \"([^\"]*)\"$")
	public void informoOTelefone(String arg1) throws Throwable {
	    cadastroPage.setTelefone(arg1);
	}
	
	@Quando("^informo o País \"([^\"]*)\"$")
	public void informoOPaís(String arg1) throws Throwable {
	    cadastroPage.setPais(arg1);
	}

	@Quando("^informo a Cidade \"([^\"]*)\"$")
	public void informoACidade(String arg1) throws Throwable {
	    cadastroPage.setCidade(arg1);
	}

	@Quando("^informo o endereço \"([^\"]*)\"$")
	public void informoOEndereço(String arg1) throws Throwable {
	    cadastroPage.setEndereco(arg1);
	}

	@Quando("^informo o Estado \"([^\"]*)\"$")
	public void informoOEstado(String arg1) throws Throwable {
	    cadastroPage.setEstado(arg1);
	}

	@Quando("^informo o CEP \"([^\"]*)\"$")
	public void informoOCEP(String arg1) throws Throwable {
	    cadastroPage.setCep(arg1);
	}

	@Quando("^clico em concordar com as condições$")
	public void clicoEmConcordarComAsCondições() throws Throwable {
	    cadastroPage.setIagree();
	}

	@Quando("^clico em registrar$")
	public void clicoEmRegistrar() throws Throwable {
	    cadastroPage.setRegister();
	}	
	
	
	@Então("^vou para a página inicial$")
	public void vouParaAPáginaInicial() throws Throwable {
		Thread.sleep(1000);
		Assert.assertEquals("Marcelo229", inicialPage.obterLogin());
	}

}
