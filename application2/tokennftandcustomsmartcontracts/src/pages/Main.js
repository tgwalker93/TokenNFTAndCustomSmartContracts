import {
    ConnectWallet,
    useAddress,
    useSigner
  } from "@thirdweb-dev/react";
  import React from "react";
import QuestionsPage from "./QuestionsPage";
  
  export default function Main() {
    var address = useAddress();
    var signer = useSigner();
    console.log(address)
  
  
    if (!address) {
      return (
        <div>
          <ConnectWallet colorMode="dark" />
        </div>
      );
    }
  
    return (
        <QuestionsPage currentWalletAddress={address} signer={signer}/>
    );
  }