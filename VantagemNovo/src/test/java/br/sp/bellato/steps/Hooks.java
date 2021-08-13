package br.sp.bellato.steps;

import static br.sp.bellato.core.DriverFactory.getDriver;
import static br.sp.bellato.core.DriverFactory.killDriver;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.File;
import java.io.IOException;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	private WebDriver driver;
		
	@Before
	public void inicializa() {		
		getDriver().get("http://advantageonlineshopping.com/#/");
	}
			
	
	@After(order = 1)
	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(file, new File("target/screenshot/"+cenario.getId()+".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	@After(order = 0)
	public void finaliza() {
		killDriver();
	}
					
	

}
