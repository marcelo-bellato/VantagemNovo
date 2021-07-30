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
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

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

		@Então("^seleciono criar novo usuário$")
		public void seleciono_criar_novo_usuário() throws Throwable {
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.elementToBeClickable(By.linkText("CREATE NEW ACCOUNT")));
			driver.findElement(By.linkText("CREATE NEW ACCOUNT")).click();
		}	
		
		@Quando("^informo o nome de usuário$")
		public void informoONomeDeUsuário() throws Throwable {
			driver.findElement(By.name("usernameRegisterPage")).sendKeys("Marcelo229");
		}

		@Quando("^informo o email$")
		public void informoOEmail() throws Throwable {
			driver.findElement(By.name("emailRegisterPage")).sendKeys("marcelo@google.com");
		}

		@Quando("^informo a senha$")
		public void informoASenha() throws Throwable {
			driver.findElement(By.name("passwordRegisterPage")).sendKeys("Os@sco10");
		}

		@Quando("^confirmo a senha$")
		public void confirmoASenha() throws Throwable {
			driver.findElement(By.name("confirm_passwordRegisterPage")).sendKeys("Os@sco10");
		}

		@Quando("^informo o primeiro nome$")
		public void informoOPrimeiroNome() throws Throwable {
			driver.findElement(By.name("first_nameRegisterPage")).sendKeys("Marcelo");
		}

		@Quando("^informo o último nome$")
		public void informoOÚltimoNome() throws Throwable {
			driver.findElement(By.name("last_nameRegisterPage")).sendKeys("silva");
		}

		@Quando("^informo o número de telefone$")
		public void informoONúmeroDeTelefone() throws Throwable {
			driver.findElement(By.name("phone_numberRegisterPage")).sendKeys("55999998855");
		}

		@Quando("^informo o País$")
		public void informoOPaís() throws Throwable {
			new Select(driver.findElement(By.name("countryListboxRegisterPage")))
			.selectByVisibleText("Brazil");
		}

		@Quando("^informo a Cidade$")
		public void informoACidade() throws Throwable {
			driver.findElement(By.name("cityRegisterPage")).sendKeys("Osasco");
		}

		@Quando("^informo o endereço$")
		public void informoOEndereço() throws Throwable {
			driver.findElement(By.name("addressRegisterPage")).sendKeys("Avenida Santo Antonio");
		}

		@Quando("^informo o Estado$")
		public void informoOEstado() throws Throwable {
			driver.findElement(By.name("state_/_province_/_regionRegisterPage")).sendKeys("Sao Paulo");
		}

		@Quando("^informo o cep$")
		public void informoOCep() throws Throwable {
			driver.findElement(By.name("postal_codeRegisterPage")).sendKeys("06080-000");
		}

		@Quando("^seleciono concordo$")
		public void selecionoConcordo() throws Throwable {
			driver.findElement(By.name("i_agree")).click();
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



