import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class seltest {

	public static void main(String[] args) throws InterruptedException  {
		// TODO Auto-generated method stub

		ChromeDriver driver= new ChromeDriver();
		driver.get("https://www.saucedemo.com/");
		
		//username
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		
		//password
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		
		//login
		driver.findElement(By.id("login-button")).click();
		

		//backpack
		driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
	
		//fleece-jacket
		driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
			
		
		//cart click
		driver.findElement(By.xpath("//*[@id=\"shopping_cart_container\"]/a")).click();
		
		//checkout
		driver.findElement(By.id("checkout")).click();
		
		//first-name
		driver.findElement(By.id("first-name")).sendKeys("md_hasan");
				
		//last-name
		driver.findElement(By.id("last-name")).sendKeys("ali");
	
		//postal-code
		driver.findElement(By.id("postal-code")).sendKeys("2017831048");
		
		//continue
		driver.findElement(By.id("continue")).click();
		
		//finish
		driver.findElement(By.id("finish")).click();
	
		
		
		//postal-code
		//driver.findElement(By.id("postal-code")).click();
		
//		Select drpCountry = new Select(driver.findElement(By.name("country")));
//		drpCountry.selectByVisibleText("ANTARCTICA");
				
//		driver.findElement(By.id("checkout")).sendKeys("standard_user");
//		driver.findElement(By.id("password")).sendKeys("secret_sauce");
//		
//		driver.findElement(By.xpath("//*[@id=\"login-button\"]")).click();

//		
//		WebElement listbox_webelement = driver.findElement(By.xpath("//*[@id=\"ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT\"]"));
//		listbox_webelement.click();
//		Select select = new Select(listbox_webelement);
//		((WebElement) select).sendKeys("Chennai");
//		
		
		
		
		//driver.close();
	}

}
