// noinspection ExceptionCaughtLocallyJS,DuplicatedCode

import * as vite from 'web3-vite'
import * as Errors from './classes'
import colors from 'colors'
import {type} from "os";
// ----
const nullAddress = 'vite_0000000000000000000000000000000000000000a4f3a0cb58'
const cAddr = 'vite_4d2e2175684f232a8e72fe78d0f16e210722b47a134de0ce53'
const cAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"txId","type":"string"},{"indexed":false,"internalType":"address","name":"merchantAddress","type":"address"},{"indexed":false,"internalType":"address","name":"payerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"InvoicePaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint48","name":"nameId","type":"uint48"},{"indexed":false,"internalType":"address","name":"oldOwnerAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newOwnerAddress","type":"address"}],"name":"NameTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"txId","type":"string"},{"indexed":false,"internalType":"address","name":"merchantAddress","type":"address"}],"name":"NewInvoice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":false,"internalType":"address","name":"previousHolder","type":"address"},{"indexed":false,"internalType":"address","name":"newHolder","type":"address"}],"name":"RoleHolderChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TreasuryWithdrawal","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"BASE_NAME_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CONTRACT_TOKEN","outputs":[{"internalType":"tokenId","name":"","type":"tokenId"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NAME_MANAGER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SHORT_NAME_MULTIPLIER","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TREASURY_OWNER","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VERY_SHORT_NAME_MULTIPLIER","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"_checkName","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint48","name":"nameId","type":"uint48"},{"internalType":"bool","name":"shouldTrust","type":"bool"}],"name":"changeNameTrustStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"tokenId","name":"txToken","type":"tokenId"},{"internalType":"uint48","name":"nameId","type":"uint48"},{"internalType":"uint24","name":"expireBlocks","type":"uint24"}],"name":"createInvoice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getName","outputs":[{"components":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"isTrusted","type":"bool"},{"internalType":"uint48","name":"nameId","type":"uint48"}],"internalType":"struct VitePay.Name","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint48","name":"nameId","type":"uint48"}],"name":"getNameById","outputs":[{"components":[{"internalType":"address","name":"ownerAddress","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bool","name":"isTrusted","type":"bool"},{"internalType":"uint48","name":"nameId","type":"uint48"}],"internalType":"struct VitePay.Name","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNameCount","outputs":[{"internalType":"uint56","name":"","type":"uint56"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nameHolderAddress","type":"address"}],"name":"getNamesByAddress","outputs":[{"internalType":"uint48[]","name":"","type":"uint48[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"roleId","type":"bytes32"}],"name":"getRoleHolder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"txId","type":"string"}],"name":"getTransaction","outputs":[{"components":[{"internalType":"address payable","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint48","name":"nameId","type":"uint48"},{"internalType":"uint48","name":"expireBlock","type":"uint48"},{"internalType":"tokenId","name":"txToken","type":"tokenId"},{"internalType":"uint8","name":"status","type":"uint8"}],"internalType":"struct VitePay.Transaction","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTransactionCount","outputs":[{"internalType":"uint56","name":"","type":"uint56"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"mintName","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"roleId","type":"bytes32"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint48","name":"nameId","type":"uint48"},{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"uint48","name":"indexOnArray","type":"uint48"}],"name":"transferName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"roleId","type":"bytes32"},{"internalType":"address","name":"newRoleHolder","type":"address"}],"name":"transferRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"destination","type":"address"}],"name":"withdrawFromTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
// noinspection ExceptionCaughtLocallyJS
export interface IVinuPay {
    getRegisteredNamesCount(): Promise<number>;
    getContractInfo(): Promise<ContractInfo>;
    getNameById(id: string | number): Promise<Name>;
    getName(name: string): Promise<Name>;
    getIdsByAddress(address: string): Promise<number[]>;
    canNameBeMinted(name: string): Promise<boolean>;
    checkNameRegex(name: string): boolean;
    isNameTaken(name: string): Promise<boolean>;
    getNamesByAddress(address: string): Promise<Name[]>;
    getNameLocationOnArray(nameId: string | number): Promise<number>;
    getInvoiceCount(): Promise<number>;
    getInvoice(id: string | number): Promise<Invoice>;
    checkNameRegex(name: string): boolean;
}
export interface Name {
    ownerAddress: string,
    name: string,
    isTrusted: boolean,
    nameId: number
}
export interface Invoice {
    destination: string,
    amount: string,
    nameId: number,
    expireBlock: number,
    txToken: string,
    status: number
}
export interface ContractInfo {
    baseFee: string,
    shortMultiplier: number,
    veryShortMultiplier: number,
    contractToken: string,
    treasuryOwner: string,
    nameManager: string
}

export default class VinuPay implements IVinuPay {
    nodeUrl: string;
    provider: vite.Client;
    contract: vite.Contract;

    constructor(nodeUrl: string, contractAddress : string = cAddr, contractAbi : any[] = cAbi) {
        this.nodeUrl = nodeUrl;
        this.provider = new vite.Client(nodeUrl)
        this.provider.flags.add(vite.ClientFlags.ContractResults)
        this.provider.request('ledger_getSnapshotChainHeight').then((block) => {
            if (block === null) {
                throw new Errors.NodeError('Failed to connect to node');
            }
            console.log(colors.green.bold(`Connected to node successfully! Current snapshot chain height is ${block}`));
        }); // In case of an incorrect URL it will throw Invalid JSON RPC response: null
        this.contract = new vite.Contract(this.provider,contractAddress, contractAbi)
    }

    // ------- Names (Getters) -------
    async getRegisteredNamesCount(): Promise<number> {
        try {
            return parseInt((await this.contract.get("getNameCount", [])).raw[0])

        } catch (e) {
            throw new Errors.NodeError((e as Error).message);
        }
    }
    async getContractInfo(): Promise<ContractInfo> {
        try {
            // batch (await promise.all)
            const [baseFee,shortM,veryShortM,contractToken,treasuryOwner,nameManager] = await Promise.all([
                this.contract.get("BASE_NAME_FEE", []).then(r => r.raw[0]),
                this.contract.get("SHORT_NAME_MULTIPLIER", []).then(r => parseInt(r.raw[0])),
                this.contract.get("VERY_SHORT_NAME_MULTIPLIER", []).then(r => parseInt(r.raw[0])),
                this.contract.get("CONTRACT_TOKEN", []).then(r => r.raw[0]),
                this.contract.get("getRoleHolder", ["cbe57d46f7844809422e6f95d2bbc9137663d743e4e0f79509f026faea35035d"]).then(r => r.raw[0]),
                this.contract.get("getRoleHolder", ["8943f2a7a1f48c4a2f2e38d822ece9576d3edf12698a7d01f62a7b0e85c32bcb"]).then(r => r.raw[0])
            ])

            return {
                baseFee: baseFee,
                shortMultiplier: shortM,
                veryShortMultiplier: veryShortM,
                contractToken: contractToken,
                treasuryOwner: treasuryOwner,
                nameManager: nameManager
            }


        } catch (e) {
            throw new Errors.NodeError((e as Error).message);

        }
    }
    async getName(nsName: string): Promise<Name> {
        try {
            // Make an offchain call
            const result = await this.contract.get("getName", [nsName])
            let name = JSON.parse(JSON.stringify(result.raw[0]));
            // Check whether the name exists
            if (name.merchantAddress === nullAddress) {
                throw new Errors.NotFoundError("Name doesn't exist!")
            } else {
                name.nameId = parseInt(name.nameId);
                return name;
            }
        } catch (e) {
            throw e;
        }
    }

    async isNameTaken(name: string): Promise<boolean> {
        try {
            // Make an offchain call
            const result = await this.contract.get("getName", [name])
            return (result.raw[0] as any).ownerAddress !== nullAddress;
        } catch (e) {
            throw new Errors.NodeError((e as Error).message);
        }
    }
    checkNameRegex(name: string): boolean {
        const regex = /^[a-z0-9]*$/
        if (name.length < 3 || name.length > 24) {
            return false;
        }
        return regex.test(name);
    }
    async canNameBeMinted(name: string): Promise<boolean> {
        const regex = /^[a-z0-9]*$/
        if (name.length < 3 || name.length > 24) {
            return false;
        }
        if (!regex.test(name)) return false;
        try {
            const isTaken = await this.isNameTaken(name);
            if (isTaken) return false;
        } catch (e) {
            throw new Errors.NodeError((e as Error).message);
        }
        return true;
    }
    async getNameById(id: string | number): Promise<Name> {
        try {
            // Make an offchain call
            const result = await this.contract.get("getNameById", [id.toString()])
            const name = JSON.parse(JSON.stringify(result.raw[0])); // stupid ikr
            // Check whether the name exists
            if (name.merchantAddress === nullAddress) {
                throw new Errors.NotFoundError("Name doesn't exist!")
            } else {
                name.nameId = parseInt(id as string);
                return name;
            }
        } catch (e) {
            throw e;
        }
    }

    async getIdsByAddress(address: string): Promise<number[]> {
        try {
            // Make an offchain call
            const result = await this.contract.get("getNamesByAddress", [address])
            let ids = JSON.parse(JSON.stringify(result.raw[0]));
            // Check whether the name exists
            if (ids.length === 0) {
                throw new Errors.NotFoundError("Address doesn't own any names!")
            } else {
                // change every ID to number
                for (let i = 0; i < ids.length; i++) {
                    ids[i] = parseInt(ids[i]);
                }
                return ids;
            }
        } catch (e) {
            throw e;
        }
    }
    // a bit more complicated than the previous one, gets full merchant objects.
    async getNamesByAddress(address: string): Promise<Name[]> {
        try {
            // Make an offchain call
            const result = await this.contract.get("getNamesByAddress", [address]); // array of ids
            // Check whether the address owns anything exists
            if (result.raw[0].length === 0) {
                throw new Errors.NotFoundError("Address doesn't own any names!")
            } else {
                // Magic happens here (longer than older version because *performance*)

                let functions = [];
                for (const id of (result.raw[0] as any as string[])) {
                    // Push functions and later promise.all
                    functions.push(this.contract.get("getNameById", [id]));
                }
                const names = await Promise.all(functions);
                let namesArray = [];
                for (const name of names) {
                    namesArray.push(JSON.parse(JSON.stringify(name.raw[0])));
                }

                return namesArray;
            }
        } catch (e) {
            throw e;
        }
    }

    async getNameLocationOnArray(nameId: number | string): Promise<number> {
        try {
            // Make an offchain call
            const name = await this.getNameById(nameId);
            const names = await this.getIdsByAddress(name.ownerAddress);
            for (let i = 0; i < names.length; i++) {
                if (names[i] === name.nameId) {
                    return i;
                }
            }
        } catch (e) {
            throw e;
        }
    }
    // ------- Transactions -------

    async getInvoice(id: number | string): Promise<Invoice> {
        try {
            // Stringify id
            id = id.toString();
            // Make an offchain call
            const result = await this.contract.get("getTransaction", [id])
            let tx = JSON.parse(JSON.stringify(result.raw[0])); // stupid ikr
            const height = await this.provider.request('ledger_getSnapshotChainHeight')
            if (height > tx.expireBlock) {
                tx.status = 2;
            }
            // Check whether the name exists
            if (tx.destination === nullAddress) {
                throw new Errors.NotFoundError("Transaction doesn't exist!")
            } else {
                // Add id and isCompleted to the result, also why is everything a string ://
                // Amount isn't a number, to prevent overflow
                tx.expireBlock = parseInt(tx.expireBlock);
                tx.id = parseInt(id);
                tx.nameId = parseInt(tx.nameId);
                tx.status = parseInt(tx.status);
                tx.isCompleted = tx.status === 1;
                return tx;
            }
        } catch (e) {
            throw e;
        }
    }

    async getInvoiceCount(): Promise<number> {
        try {
            return parseInt((await this.contract.get("getTransactionCount", [])).raw[0])
        } catch (e) {
            throw new Errors.NodeError((e as Error).message);

        }
    }
}

