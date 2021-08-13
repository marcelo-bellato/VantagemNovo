package br.sp.bellato.steps;

import org.junit.Assert;

import br.sp.bellato.page.CadastroPage;
import br.sp.bellato.page.InicialPage;
import br.sp.bellato.page.LoginPage;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirEmailInvalidoSteps {
	
	InicialPage inicialPage = new InicialPage();	
	CadastroPage cadastroPage = new CadastroPage();
	LoginPage loginPage = new LoginPage();	
	

	@Quando("^informo o email inválido \"([^\"]*)\"$")
	public void informoOEmailInválido(String arg1) throws Throwable {
		cadastroPage.setEmail(arg1);
	}
	

	@Quando("^Seleciono password$")
	public void selecionoPassword() throws Throwable {
		cadastroPage.setClicarSenha();
	}
	
	@Então("^o site me avisa sobre o erro no campo email$")
	public void oSiteMeAvisaSobreOErroNoCampoEmail() throws Throwable {
		Thread.sleep(1000);
		Assert.assertEquals("Your email address isn't formatted correctly", cadastroPage.obterEmailCadastro());
	}	
	
	

}
