const get_balance = async () => {
  if (window.ethereum) {
    $("#manual-input").css("display", "none");
    const ethereum = window.ethereum;
    const web3Provider = new Web3(ethereum);
    ethereum.autoRefreshOnNetworkChange = false;

    const address = await start_metamask();
    web3Provider.eth.getBalance(address, (err, wei) => {
      let balance = web3.fromWei(wei.toString(10), "ether");
      $("#metamask-balance").text(balance);
      $("#metamask-note").text("Connected via Metamask plugin");
    });
  } else {
    $("#metamask-note").text("Metamask plugin not detected - please input a public key for ropsten network (otherwise placeholder is used)");
    let key = $("#exampleKeyInput").val();
    // console.log("input :"+key);
    if (key === ""){
      key = $("#exampleKeyInput").attr('placeholder');
    }
    etherscan_query(key);
  }
};

const start_metamask = () => new Promise(resolve => {
  ethereum.enable().then(account => {
    // const defaultAccount = account[0];
    // web3Provider.eth.defaultAccount = defaultAccount;
    resolve(account[0])
  });
})
