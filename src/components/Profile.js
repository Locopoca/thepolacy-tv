import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import { Rnd } from "react-rnd";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
// import VideoPlayer from './VideoPlayer'; // Adjust the path as needed
import CIDList from "./CIDList.js";
import "../App.css";
import MediaPlayer from "./MediaPlayer.js";
import ChatComponent from "./ChatComponent.js";

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: "eth_requestAccounts" });
}

const Profile = () => {
  const [hasNFT, setHasNFT] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();
  const [showMediaPlayer, setShowMediaPlayer] = useState(true);
  const [showCIDList, setShowCIDList] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    "https://ipfs.io/ipfs/QmUUBSApcb7of34gDEP7KUmbNyLim9vVmL7pL2Y9XAt4Ys"
  );

  const contractAddress = "0x99903e8eC87b9987bD6289DF8eff178d6E533561"; // Your NFT contract address
  let contractABI = [
    {
      inputs: [
        { internalType: "bytes32", name: "root", type: "bytes32" },
        { internalType: "uint256", name: "mintStart", type: "uint256" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "ApproveToCaller", type: "error" },
    { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
    { inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
    { inputs: [], name: "MintToZeroAddress", type: "error" },
    { inputs: [], name: "MintZeroQuantity", type: "error" },
    { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
    { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
    {
      inputs: [],
      name: "TransferToNonERC721ReceiverImplementer",
      type: "error",
    },
    { inputs: [], name: "TransferToZeroAddress", type: "error" },
    { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "toTokenId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
      ],
      name: "ConsecutiveTransfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "DURATION_PUBLIC_FREE_MINT",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DURATION_WHITELIST",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_TOKENS_PER_ADDRESS_PUBLIC_FREE_MINT",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MAX_TOKENS_PER_ADDRESS_WHITELIST",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PRICE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SUPPLY_PUBLIC_FREE_MINT",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SUPPLY_TEAM",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "SUPPLY_WHITELIST",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TOTAL_SUPPLY",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isMintingPhaseFreePublic",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "isMintingPhaseWL",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "quantity", type: "uint256" },
        { internalType: "bytes32[]", name: "proof", type: "bytes32[]" },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "mintStartTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "numberMinted",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "_data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "baseURI", type: "string" }],
      name: "setBaseURI",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ]; // ABI of your NFT contract

  const selectCID = (cid) => {
    const newVideoUrl = `https://ipfs.io/ipfs/${cid}`;
    setCurrentVideoUrl(newVideoUrl);
    console.log("Selected CID:", cid, "New Video URL:", newVideoUrl);
  };

  const getNFTBalance = useCallback(async (address) => {
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    try {
      const balance = await contract.methods.balanceOf(address).call();
      const nftCount = Number(balance);
      setHasNFT(nftCount > 0);
    } catch (error) {
      console.error("Error fetching NFT balance:", error);
    }
  }, []);



  useEffect(() => {
    if (isConnected && address) {
      getNFTBalance(address);
    }
  }, [isConnected, address, getNFTBalance]);

  // useEffect(() => {
  //   console.log("Address", address);
  // }, [address]);

  const userAccount = address;

  return (
    <div>
      {/* Menu for controlling visibility */}
      {isConnected && (
      <div className="top-left-menu">
        <div>
          <input
            type="checkbox"
            id="toggle-media-player"
            checked={showMediaPlayer}
            onChange={() => setShowMediaPlayer(!showMediaPlayer)}
          />
          <label htmlFor="toggle-media-player">Telewizor</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="toggle-cid-list"
            checked={showCIDList}
            onChange={() => setShowCIDList(!showCIDList)}
          />
          <label htmlFor="toggle-cid-list">Program</label>
        </div>
      </div>
      )}
      {/* Container for the top right buttons */}
      <div className="buttons-container-top-right">
        {isConnected ? (
          <button className="connect-btn-top" onClick={() => disconnect()}>
            Rozłącz...
          </button>
        ) : (
          <button className="connect-btn-top" onClick={() => connect()}>
            Połącz...
          </button>
        )}
      </div>
      
      {/* Rest of the content */}

      {isConnected && showMediaPlayer && (
        <Rnd
          default={{
            x: 40,
            y: 140,
            width: 640,
            height: 500,
          }}
          className="rnd-container-video"
        >
          <div className="window-header">
            <button
              className="close-btn"
              onClick={() => setShowMediaPlayer(false)}
            >
              X
            </button>
          </div>
          <MediaPlayer currentVideoUrl={currentVideoUrl} />
        </Rnd>
      )}
      {isConnected && showMediaPlayer && (
        <Rnd
          default={{
            x: 740,
            y: 190,
            width: 350,
            height: 420,
          }}
          className="rnd-container-chat"
        >
          <div className="window-header">
            <button
              className="close-btn"
              onClick={() => setShowMediaPlayer(false)}
            >
              X
            </button>
          </div>
          <ChatComponent userAccount={userAccount} />
        </Rnd>
      )}
      {isConnected && showCIDList && (
        <Rnd
          default={{
            x: 800,
            y: 230,
            width: 420,
            height: 300,
          }}
          className="rnd-container-cid"
        >
          <div className="window-header">
            <button className="close-btn" onClick={() => setShowCIDList(false)}>
              X
            </button>
          </div>
          <CIDList onSelectCid={selectCID} />
        </Rnd>
      )}
    </div>
  );
};

export default Profile;
