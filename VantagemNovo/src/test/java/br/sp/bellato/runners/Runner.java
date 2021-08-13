package br.sp.bellato.runners;

import static br.sp.bellato.core.DriverFactory.getDriver;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import br.sp.bellato.page.ContaPage;
import br.sp.bellato.page.InicialPage;
import br.sp.bellato.page.LoginPage;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/",
		glue = "br.sp.bellato.steps",
		tags = {},
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class Runner {
	
	@BeforeClass
	public static void reset() throws InterruptedException {
		InicialPage inicialPage = new InicialPage();
		LoginPage loginPage = new LoginPage();
		ContaPage contaPage = new ContaPage();
		
		getDriver().get("http://advantageonlineshopping.com/#/");
		inicialPage.setUser();
		loginPage.setUserName("Marcelo229");
		loginPage.setSenha("Os@sco10");
		loginPage.setSignIn();
		Thread.sleep(1000);
		inicialPage.setUser();
		inicialPage.setMyAccount();
		contaPage.setReset();
		contaPage.setConfirm();	
		Thread.sleep(3000);
	}
	
}
