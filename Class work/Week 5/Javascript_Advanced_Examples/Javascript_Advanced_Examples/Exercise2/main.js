
function StorePlayerData()
{

	localStorage.setItem('playerName',document.forms[0]['playername'].value);
	localStorage.setItem('playerHealth',document.forms[0]['playerhealth'].value);
	localStorage.setItem('playercolour',document.forms[0]['playercolour'].value);



}
