const get_balance = async () => {
  if (window.ethereum) {//check if ethereuem object exists from metamask
    $("#manual-input").css("display", "none");
    const ethereum = window.ethereum;
    const web3Provider = new Web3(ethereum); //set web3 provider (web3 instance from metamask)
    ethereum.autoRefreshOnNetworkChange = false; //disabled to prevent error

    const address = await start_metamask(); //wait for metamask access allowed by user
    web3Provider.eth.getBalance(address, (err, wei) => {
      let balance = web3.fromWei(wei.toString(10), "ether");//get balance in ether
      $("#metamask-balance").text(balance); //print balance
      $("#metamask-note").text("Connected via Metamask plugin"); //change description text
    });
  } else { //if no ethereum object
    $("#metamask-note").text("Metamask plugin not detected - please input a public key for ropsten network (otherwise placeholder is used)"); // change description text
    let key = $("#exampleKeyInput").val();//get user input
    // console.log("input :"+key);
    if (key === ""){
      key = $("#exampleKeyInput").attr('placeholder'); //if no user input, use placeholder value
    }
    etherscan_query(key); //query etherscan for users balance
  }
};

const start_metamask = () => new Promise(resolve => { //request access to users metamask
  ethereum.enable().then(account => {
    resolve(account[0]) // return account object
  });
})
