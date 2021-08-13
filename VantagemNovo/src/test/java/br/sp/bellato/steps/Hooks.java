package br.sp.bellato.steps;

import static br.sp.bellato.core.DriverFactory.getDriver;
import static br.sp.bellato.core.DriverFactory.killDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	

		
	@Before
	public void inicializa() {		
		getDriver().get("http://advantageonlineshopping.com/#/");
	}
			
	
	@After
	public void finaliza() {
		killDriver();
	}
					
	

}
