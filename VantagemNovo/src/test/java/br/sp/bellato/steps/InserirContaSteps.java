package br.sp.bellato.steps;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class InserirContaSteps {
	
private WebDriver driver;	
		
	@Dado("^que estou acessando a aplicação$")
	public void que_estou_acessando_a_aplicação() throws Throwable {
		driver = new ChromeDriver();	
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.manage().window().maximize();			
		driver.get("http://advantageonlineshopping.com/#/");
	}

	@Quando("^seleciono usuário$")
	public void seleciono_usuário() throws Throwable {
		driver.findElement(By.id("menuUserLink")).click();
	}

	@Quando("^seleciono criar novo usuário$")
	public void seleciono_criar_novo_usuário() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.linkText("CREATE NEW ACCOUNT")).click();
	}

	@Então("^vou para outra tela onde informo o nome de usuário$")
	public void vou_para_outra_tela_onde_informo_o_nome_de_usuário() throws Throwable {
		driver.findElement(By.name("usernameRegisterPage")).sendKeys("Marcelo229");
	}

	@Então("^informo o email$")
	public void email() throws Throwable {
		driver.findElement(By.name("emailRegisterPage")).sendKeys("marcelo@google.com");
	}

	@Então("^informo a senha$")
	public void senha() throws Throwable {
		driver.findElement(By.name("passwordRegisterPage")).sendKeys("Os@sco10");
	}

	@Então("^confirmo a senha$")
	public void confirmo_a_senha() throws Throwable {
		driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("Os@sco10");
	}

	@Então("^seleciono concordo$")
	public void seleciono_concordo() throws Throwable {
		driver.findElement(By.name("i_agree")).click();
	}

	@Então("^clico em registrar com sucesso$")
	public void clico_em_registrar() throws Throwable {
		driver.findElement(By.id("register_btnundefined")).click();
	}	
		
	
	@After(order = 1)
	public void screenShot() {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshots/nome.jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	
	}
					
	@After(order = 0)
	public void fecharBrowser() {
		driver.quit();
	}

		
		
		
		
	}



