package br.sp.bellato.steps;

import br.sp.bellato.page.LoginPage;
import cucumber.api.java.pt.Quando;

public class LoginSteps {
	
	LoginPage loginPage = new LoginPage();

	@Quando("^informo o usuário na pagina de login \"([^\"]*)\"$")
	public void informoOUsuárioNaPaginaDeLogin(String arg1) throws Throwable {
		loginPage.setUserName(arg1);
	}

	@Quando("^a senha na pagina de login \"([^\"]*)\"$")
	public void aSenhaNaPaginaDeLogin(String arg1) throws Throwable {
	    loginPage.setSenha(arg1);
	}

	@Quando("^clico em Sign In na pagina de login$")
	public void clicoEmSignInNaPaginaDeLogin() throws Throwable {
	    loginPage.setSignIn();
	}

}
