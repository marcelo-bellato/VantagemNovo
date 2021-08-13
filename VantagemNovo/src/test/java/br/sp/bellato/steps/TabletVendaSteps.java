package br.sp.bellato.steps;

import br.sp.bellato.page.OrdemPagamentoPage;
import br.sp.bellato.page.TabletPage;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class TabletVendaSteps {
	
	TabletPage tabletPage = new TabletPage();
	OrdemPagamentoPage ordemPagamentoPage = new OrdemPagamentoPage();
	
	@Quando("^adiciono no carrinho$")
	public void adicionoNoCarrinho() throws Throwable {
		tabletPage.setAddToCart();
	}

	@Quando("^clico em checkout$")
	public void clicoEmCheckout() throws Throwable {
		tabletPage.setCheckout();
	}

	@Quando("^clico em Next$")
	public void clicoEmNext() throws Throwable {
		ordemPagamentoPage.setNext();
	}

	@Quando("^seleciono o pagamento Mastercreditic$")
	public void selecionoOPagamentoMastercreditic() throws Throwable {
		Thread.sleep(1000);
		ordemPagamentoPage.setMastercreditic();
	}

	@Quando("^informo o numero do cartão \"([^\"]*)\"$")
	public void informoONumeroDoCartão(String arg1) throws Throwable {
	   ordemPagamentoPage.setCardnumber(arg1);
	}

	@Quando("^informo o CVV \"([^\"]*)\"$")
	public void informoOCVV(String arg1) throws Throwable {
	    ordemPagamentoPage.setCVV(arg1);
	}

	@Quando("^informo o mês de expiração do cartão \"([^\"]*)\"$")
	public void informoOMêsDeExpiraçãoDoCartão(String arg1) throws Throwable {
	    ordemPagamentoPage.setMonth(arg1);
	}

	@Quando("^informo o ano de expiração do cartão \"([^\"]*)\"$")
	public void informoOAnoDeExpiraçãoDoCartão(String arg1) throws Throwable {
	    ordemPagamentoPage.setYear(arg1);
	}

	@Quando("^informo o nome do titular \"([^\"]*)\"$")
	public void informoONomeDoTitular(String arg1) throws Throwable {
	    ordemPagamentoPage.setNomeTitular(arg1);
	}

	@Então("^clico em pagar$")
	public void clicoEmPagar() throws Throwable {
	    ordemPagamentoPage.setPay();
	}

}
