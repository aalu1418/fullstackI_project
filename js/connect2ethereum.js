const initialize_web3 = () => {
  if (window.ethereum) {
    const ethereum = window.ethereum;
    web3Provider = new Web3(ethereum);

    ethereum.enable().then(account => {
      const defaultAccount = account[0];
      web3Provider.eth.defaultAccount = defaultAccount;
    });

    update_balance();
  }
  else {
    $("#metamask-note").text("Metamask plugin not detected")
  }
};

const update_balance = () => {
  const address = web3Provider.eth.defaultAccount;
  web3Provider.eth.getBalance(address, (err, wei) => {
    let balance = web3.fromWei(wei.toString(10), "ether");
    $("#metamask-balance").text(balance+" ether");
    $("#metamask-note").text("Connected via Metamask plugin")
  });
};
