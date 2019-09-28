# Full-Stack Web Development I - Final Project
Aaron Lu - 101278524  
Website: https://aalu1418.github.io/fullstackI_project/  
Github Repo: https://github.com/aalu1418/fullstackI_projects

### Project Description
General functions
- plot historical data of cryptocurrency price - updates every minute
- ability to toggle view of various cryptocurrency and base currencies
- ticker that displays the current price and change over a period of time that can be toggled
- Metamask integration (if present) to get user's ether balance
- Otherwise allows for use input of public key to get ether balance on ropsten
- Help buttons show text for assistance if opened
- Mobile friendly layout

js libraries
- jquery: used for ajax calls and button listeners
- chart.js: used for plotting cryptocurrency price data
- moment: used for getting date from certain intervals for price change
- anime.js: animating bouncing icons in the header

CSS libraries
- Skeleton CSS: used for basic framework - simple and clean
- Material UI Icons: material design icons used for ticker and navigation

Ajax calls to API
- Coin Gecko API: used for cryptocurrency price (current and historical)
- Etherscan API: used to get users current ether balance

Metamask integration
- access the ethereum & web3 objects using the injected js from Metamask

Error handling
- no internet handling - turns off plot
- no Metamask handling - allows for manual input

---

### Project Specs
FULL	STACK	DEVELOPER	– 1	– FINAL	PROJECT
DUE	DATE	– September	29,	2019

Your	final	project	– is	to	create	a	single	page	web	application	using	HTML,	CSS,	and	Javascript.
Here	are	the	required	technical	parameters for	your	page:
1. Use	of	Javascript	listeners	and	handlers	to	enable	interactivity	of	some	sort,	producing
some	desired	effect.
2. Use	of Javascript	libraries	(one	or	many) that	aid	in	the	coding	of	your	app.
3. Use	of	a CSS	library/framework that	aids	in	the	styling	of	your	app.
4. Use	of	Ajax	calls	to	an	API,	where	the	returned data	may	be	displayed	in	your app.
5. Use	of	Git	and	Github	to	track	code	changes	and	upload	your	project. Include	a
README.md	that	describes	your	project	and	how	to	load	it	(if	any	steps	required).

Projects	will	be	evaluated	based	on	the	following	aspects:
1. HTML	– proper	use	of	HTML	and	Valid	tags [10%]
2. CSS/UX/Design	– proper	use	of	CSS	 or	a	CSS	framework	to	achieve	a	user	friendly	design
and	presentation	of	the	apps	functionality [includes	the	overall	look	of	the	project,
useability	&	appropriate	information	so	the	user	can	understand	the	functionality][20%]
3. Javascript	– using	appropriate	JS	and	adhering	to	good	programming	principles	–
specifically,	well	structured	and	easily	readable/understandable	code	– and	adherence
to	core	programing	principles	such	as	DRY	(do	not	repeat	yourself). [30%]
4. Successful	communication	with	the	API	and	display	of	data	in	the	html	app.	[20%]
5. Git	– appropriate	use	of	git	for	developing	your	projects	features [Note:	If	you’re
working	with	a	partner,	you’ll	need	to	show	git	commits	from	each	partner	– we	will
want	to	see	that	each	partner	has	coded	at	least	1	feature,	both	partners	will	lose	15%	if
the	git	commits	don’t	demonstrate	this.	For	individuals	working	alone,	your	git	commit
history	should	demonstrate	the	use	of	feature	branches.][15%]
6. Bonus	5%	- connect	to	a	smart	contract	or	user’s	balance	 metaMask	balance	[5%]

---

### Resources
- [Skeleton CSS](http://getskeleton.com/)
- [Material Design Icons](https://material.io/resources/icons/?style=baseline)
- [Icon Pulsing](http://www.tipue.com/blog/css-pulse-buttons/)
- [Coin Gecko - crypto prices api](https://www.coingecko.com/en)
- [Metamask Integration](https://medium.com/coinmonks/tutorial-how-to-connect-a-javascript-front-end-to-a-smart-contract-6af4bdf45f7a)
- [Web3 Introduction](http://www.dappuniversity.com/articles/web3-js-intro)
- [Run Local Host - Simple](https://stackoverflow.com/questions/38497334/how-to-run-html-file-on-localhost)

---

### To-Do
- [x] Single page website
- [x] Realtime plotting of price of various cryptocurrencies (js librarie - api calls)
- [x] Ability to toggle on/off (buttons - js listeners)
- [x] Ability to change currency: USD/CAD/Euro (buttons - js listeners - api calls)
- [x] Show bar w/ current metamask balance in multiple currencies (web3)
- [x] Axios for ajax calls (using jquery instead)
- [x] timeout in case of no internet connection
- [x] help icon - pop-up w/ data
- [x] interactively change time range for ticker
- [x] favicon
- [x] error w/ Chart.js but doesn't stop page from functioning
- [x] comment code & write up documentation in readme
- [x] fun w/ animations (https://animejs.com/)
- [ ] dark-mode?
