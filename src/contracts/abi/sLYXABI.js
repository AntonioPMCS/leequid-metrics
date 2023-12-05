module.exports = [
   {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
   },
   {
      "inputs": [],
      "name": "ERC725Y_DataKeysValuesEmptyArray",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "ERC725Y_DataKeysValuesLengthMismatch",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "ERC725Y_MsgValueDisallowed",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP4TokenNameNotEditable",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP4TokenSymbolNotEditable",
      "type": "error"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "authorizedAmount",
         "type": "uint256"
      },
      {
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "LSP7AmountExceedsAuthorizedAmount",
      "type": "error"
   },
   {
      "inputs": [
      {
         "internalType": "uint256",
         "name": "balance",
         "type": "uint256"
      },
      {
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "LSP7AmountExceedsBalance",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP7CannotSendToSelf",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP7CannotSendWithAddressZero",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP7CannotUseAddressZeroAsOperator",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP7InvalidTransferBatch",
      "type": "error"
   },
   {
      "inputs": [],
      "name": "LSP7TokenOwnerCannotBeOperator",
      "type": "error"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "address",
         "name": "owner",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "spender",
         "type": "address"
      },
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "value",
         "type": "uint256"
      }
      ],
      "name": "Approval",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "AuthorizedOperator",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "bytes32",
         "name": "dataKey",
         "type": "bytes32"
      },
      {
         "indexed": false,
         "internalType": "bytes",
         "name": "dataValue",
         "type": "bytes"
      }
      ],
      "name": "DataChanged",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": false,
         "internalType": "uint8",
         "name": "version",
         "type": "uint8"
      }
      ],
      "name": "Initialized",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "uint256",
         "name": "requestIndex",
         "type": "uint256"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "account",
         "type": "address"
      },
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      },
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "newTotalPendingUnstake",
         "type": "uint256"
      }
      ],
      "name": "NewUnstakeRequest",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "address",
         "name": "previousOwner",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "newOwner",
         "type": "address"
      }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": false,
         "internalType": "address",
         "name": "account",
         "type": "address"
      }
      ],
      "name": "Paused",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      }
      ],
      "name": "RevokedOperator",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "indexed": true,
         "internalType": "bytes32",
         "name": "previousAdminRole",
         "type": "bytes32"
      },
      {
         "indexed": true,
         "internalType": "bytes32",
         "name": "newAdminRole",
         "type": "bytes32"
      }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "account",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "sender",
         "type": "address"
      }
      ],
      "name": "RoleGranted",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "account",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "sender",
         "type": "address"
      }
      ],
      "name": "RoleRevoked",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": true,
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "from",
         "type": "address"
      },
      {
         "indexed": true,
         "internalType": "address",
         "name": "to",
         "type": "address"
      },
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      },
      {
         "indexed": false,
         "internalType": "bool",
         "name": "allowNonLSP1Recipient",
         "type": "bool"
      },
      {
         "indexed": false,
         "internalType": "bytes",
         "name": "data",
         "type": "bytes"
      }
      ],
      "name": "Transfer",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": false,
         "internalType": "address",
         "name": "account",
         "type": "address"
      }
      ],
      "name": "Unpaused",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "amountMatched",
         "type": "uint256"
      },
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "newTotalPendingUnstake",
         "type": "uint256"
      }
      ],
      "name": "UnstakeMatched",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "unstakeAmount",
         "type": "uint256"
      },
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "newTotalPendingUnstake",
         "type": "uint256"
      }
      ],
      "name": "UnstakeProcessed",
      "type": "event"
   },
   {
      "anonymous": false,
      "inputs": [
      {
         "indexed": false,
         "internalType": "uint256",
         "name": "validatorsToExit",
         "type": "uint256"
      }
      ],
      "name": "UnstakeReady",
      "type": "event"
   },
   {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
      {
         "internalType": "bytes32",
         "name": "",
         "type": "bytes32"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "PAUSER_ROLE",
      "outputs": [
      {
         "internalType": "bytes32",
         "name": "",
         "type": "bytes32"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "VALIDATOR_TOTAL_DEPOSIT",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_account",
         "type": "address"
      }
      ],
      "name": "addAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_account",
         "type": "address"
      }
      ],
      "name": "addPauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      },
      {
         "internalType": "address",
         "name": "operator",
         "type": "address"
      }
      ],
      "name": "allowance",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "approve",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "authorizeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "operator",
         "type": "address"
      },
      {
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      }
      ],
      "name": "authorizedAmountFor",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      }
      ],
      "name": "balanceOf",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "account",
         "type": "address"
      },
      {
         "internalType": "uint256[]",
         "name": "unstakeRequestIndexes",
         "type": "uint256[]"
      }
      ],
      "name": "claimUnstake",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "decimals",
      "outputs": [
      {
         "internalType": "uint8",
         "name": "",
         "type": "uint8"
      }
      ],
      "stateMutability": "pure",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "distributorPrincipal",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "dataKey",
         "type": "bytes32"
      }
      ],
      "name": "getData",
      "outputs": [
      {
         "internalType": "bytes",
         "name": "dataValue",
         "type": "bytes"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32[]",
         "name": "dataKeys",
         "type": "bytes32[]"
      }
      ],
      "name": "getDataBatch",
      "outputs": [
      {
         "internalType": "bytes[]",
         "name": "dataValues",
         "type": "bytes[]"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      }
      ],
      "name": "getRoleAdmin",
      "outputs": [
      {
         "internalType": "bytes32",
         "name": "",
         "type": "bytes32"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "internalType": "address",
         "name": "account",
         "type": "address"
      }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "internalType": "address",
         "name": "account",
         "type": "address"
      }
      ],
      "name": "hasRole",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_admin",
         "type": "address"
      },
      {
         "internalType": "contract IPool",
         "name": "_pool",
         "type": "address"
      },
      {
         "internalType": "address",
         "name": "_oracles",
         "type": "address"
      },
      {
         "internalType": "contract IRewards",
         "name": "_rewards",
         "type": "address"
      }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_account",
         "type": "address"
      }
      ],
      "name": "isAdmin",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_account",
         "type": "address"
      }
      ],
      "name": "isPauser",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "uint256",
         "name": "index",
         "type": "uint256"
      }
      ],
      "name": "isUnstakeRequestClaimable",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "matchUnstake",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "to",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      },
      {
         "internalType": "bool",
         "name": "allowNonLSP1Recipient",
         "type": "bool"
      },
      {
         "internalType": "bytes",
         "name": "data",
         "type": "bytes"
      }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "owner",
      "outputs": [
      {
         "internalType": "address",
         "name": "",
         "type": "address"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "paused",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_account",
         "type": "address"
      }
      ],
      "name": "removeAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "_account",
         "type": "address"
      }
      ],
      "name": "removePauser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "internalType": "address",
         "name": "account",
         "type": "address"
      }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "operator",
         "type": "address"
      }
      ],
      "name": "revokeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
      },
      {
         "internalType": "address",
         "name": "account",
         "type": "address"
      }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32",
         "name": "dataKey",
         "type": "bytes32"
      },
      {
         "internalType": "bytes",
         "name": "dataValue",
         "type": "bytes"
      }
      ],
      "name": "setData",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes32[]",
         "name": "dataKeys",
         "type": "bytes32[]"
      },
      {
         "internalType": "bytes[]",
         "name": "dataValues",
         "type": "bytes[]"
      }
      ],
      "name": "setDataBatch",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "setUnstakeProcessing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "bytes4",
         "name": "interfaceId",
         "type": "bytes4"
      }
      ],
      "name": "supportsInterface",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "tokenOwner",
         "type": "address"
      },
      {
         "internalType": "bool",
         "name": "isDisabled",
         "type": "bool"
      }
      ],
      "name": "toggleRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalClaimableUnstakes",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalDeposits",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalPendingUnstake",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalUnstaked",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "from",
         "type": "address"
      },
      {
         "internalType": "address",
         "name": "to",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      },
      {
         "internalType": "bool",
         "name": "allowNonLSP1Recipient",
         "type": "bool"
      },
      {
         "internalType": "bytes",
         "name": "data",
         "type": "bytes"
      }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "to",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "transfer",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address[]",
         "name": "from",
         "type": "address[]"
      },
      {
         "internalType": "address[]",
         "name": "to",
         "type": "address[]"
      },
      {
         "internalType": "uint256[]",
         "name": "amount",
         "type": "uint256[]"
      },
      {
         "internalType": "bool[]",
         "name": "allowNonLSP1Recipient",
         "type": "bool[]"
      },
      {
         "internalType": "bytes[]",
         "name": "data",
         "type": "bytes[]"
      }
      ],
      "name": "transferBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "from",
         "type": "address"
      },
      {
         "internalType": "address",
         "name": "to",
         "type": "address"
      },
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "transferFrom",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "address",
         "name": "newOwner",
         "type": "address"
      }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
      }
      ],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "uint256",
         "name": "exitedValidators",
         "type": "uint256"
      }
      ],
      "name": "unstakeProcessed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "unstakeProcessing",
      "outputs": [
      {
         "internalType": "bool",
         "name": "",
         "type": "bool"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
      {
         "internalType": "uint256",
         "name": "index",
         "type": "uint256"
      }
      ],
      "name": "unstakeRequest",
      "outputs": [
      {
         "components": [
            {
            "internalType": "address",
            "name": "account",
            "type": "address"
            },
            {
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
            },
            {
            "internalType": "uint128",
            "name": "amountFilled",
            "type": "uint128"
            },
            {
            "internalType": "bool",
            "name": "claimed",
            "type": "bool"
            }
         ],
         "internalType": "struct IStakedLyxToken.UnstakeRequest",
         "name": "",
         "type": "tuple"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "unstakeRequestCount",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "unstakeRequestCurrentIndex",
      "outputs": [
      {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
      }
      ],
      "stateMutability": "view",
      "type": "function"
   }
]