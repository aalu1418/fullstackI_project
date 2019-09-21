const get_balance = () => {
  if (window.ethereum) {
    const ethereum = window.ethereum;
    const web3Provider = new Web3(ethereum);
    ethereum.autoRefreshOnNetworkChange = false;

    ethereum.enable().then(account => {
      const defaultAccount = account[0];
      web3Provider.eth.defaultAccount = defaultAccount;
    });

    const address = web3Provider.eth.defaultAccount;
    web3Provider.eth.getBalance(address, (err, wei) => {
      let balance = web3.fromWei(wei.toString(10), "ether");
      $("#metamask-balance").text(balance+" ether");
      $("#metamask-note").text("Connected via Metamask plugin")
    });
  }
  else {
    $("#metamask-note").text("Metamask plugin not detected")
  }
};
