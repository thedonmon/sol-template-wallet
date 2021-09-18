import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { ConnectionProvider, useLocalStorage, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Wallet } from "../components/web3/Wallet";
const connection = new anchor.web3.Connection('https://api.devnet.solana.com');

const PageTransact : React.FC = () => {

  const [balance, setBalance] = useState<number>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });
  const wallet = useWallet();
  console.log("wallet",wallet);
  console.log("walleted connected",wallet.connected);

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);
  
  return (
    <main>
      {wallet.connected && (
        <p>Address: {shortenAddress(wallet.publicKey?.toBase58() || "")}</p>
      )}

      {wallet.connected && (
        <p>Balance: {(balance || 0).toLocaleString()} SOL</p>
      )}

    <div>
        {!wallet.connected ? (
          <h1>Please connect wallet</h1>
        ) : (
          <Button>
          </Button>
        )}
      </div>

      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}
 const shortenAddress = (address: string, chars = 4): string => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
  };
  
export default PageTransact;
