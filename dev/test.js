const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
"chain": [
	{
		"index": 1,
		"timestamp": 1539667299400,
		"transactions": [],
		"nonce": 100,
		"hash": "0",
		"previousBlockHash": "0"
	},
	{
		"index": 2,
		"timestamp": 1539667815974,
		"transactions": [
			{
				"amount": 100,
				"sender": "hdcbasiuxhui23187",
				"recipient": "91h2u23hh3juweda",
				"transactionId": "83c5c1d0d10411e8b4658b90acdef47f"
			}
		],
	"nonce": 50907,
	"hash": "0000f628c7d1fc51c5fcd3f8a91b6ac22f34e380dfe6738cbcb3693c6cf2447c",
	"previousBlockHash": "0"
	},
	{
	"index": 3,
	"timestamp": 1539668084316,
	"transactions": [
	{
	"amount": 12.5,
	"sender": "00",
	"recipient": "5c08fc80d10311e8b4658b90acdef47f",
	"transactionId": "8ff19a10d10411e8b4658b90acdef47f"
	},
	{
	"amount": 200,
	"sender": "hdcbasiuxhui23187",
	"recipient": "91h2u23hh3juweda",
	"transactionId": "9d836af0d10411e8b4658b90acdef47f"
	},
	{
	"amount": 300,
	"sender": "hdcbasiuxhui23187",
	"recipient": "91h2u23hh3juweda",
	"transactionId": "a16a4210d10411e8b4658b90acdef47f"
	}
	],
	"nonce": 36457,
	"hash": "00004e116007cf6011949ca948a97fdbe78ac3dc61190e62835f510784c58995",
	"previousBlockHash": "0000f628c7d1fc51c5fcd3f8a91b6ac22f34e380dfe6738cbcb3693c6cf2447c"
	},
	{
	"index": 4,
	"timestamp": 1539668094892,
	"transactions": [
	{
	"amount": 12.5,
	"sender": "00",
	"recipient": "5c08fc80d10311e8b4658b90acdef47f",
	"transactionId": "2fe1f7e0d10511e8b4658b90acdef47f"
	}
	],
	"nonce": 253432,
	"hash": "0000a724b26c318f09ad01ae047056924f4d2bffda1aaeca0dd034e906505729",
	"previousBlockHash": "00004e116007cf6011949ca948a97fdbe78ac3dc61190e62835f510784c58995"
	}
	],
	"pendingTransactions": [
	{
	"amount": 12.5,
	"sender": "00",
	"recipient": "5c08fc80d10311e8b4658b90acdef47f",
	"transactionId": "362fe3f0d10511e8b4658b90acdef47f"
	}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};


console.log(bitcoin.chainIsValid(bc1.chain));


