package br.sp.bellato.steps;

import org.junit.Assert;

import br.sp.bellato.page.InicialPage;
import br.sp.bellato.page.LoginPage;
import br.sp.bellato.page.TabletPage;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class TabletConsultaSteps {
	InicialPage inicialPage = new InicialPage();
	LoginPage loginPage = new LoginPage();
	TabletPage tabletPage = new TabletPage();
	
	@Quando("^clico em tablet$")
	public void clicoEmTablet() throws Throwable {
	    inicialPage.setTablets();
	}

	@Quando("^clico em tablet HP(\\d+)G(\\d+)$")
	public void clicoEmTabletHPG(int arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		tabletPage.setHP1000G2();
	}

	@Então("^vou para a página do tablet HP(\\d+)G(\\d+)$")
	public void vouParaAPáginaDoTabletHPG(int arg1, int arg2) throws Throwable {
		Assert.assertEquals("HP ELITEPAD 1000 G2 TABLET", tabletPage.obterTablet());
	}
	
	

}
