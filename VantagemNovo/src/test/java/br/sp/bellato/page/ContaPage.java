package br.sp.bellato.page;

import br.sp.bellato.core.BasePage;

public class ContaPage extends BasePage{
	
	public void setReset() {
		clicarLabel("//div[contains(text(),'Delete Account')]");
	}
	
	public void setConfirm() {
		clicarLabel("//div[contains(text(),'yes')]");
	}

}
