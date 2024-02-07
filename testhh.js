// https://mainnet.infura.io/v3/03d4d51e98fb4bb0bc09716aeaae71f1

const { clear } = require('console');
const fs = require('fs');

const routerABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const erc20ABI = [
    {
      "inputs": [
        {"internalType": "address", "name": "account", "type": "address"}
      ],
      "name": "balanceOf",
      "outputs": [
        {"internalType": "uint256", "name": "", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "address", "name": "spender", "type": "address"},
        {"internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "approve",
      "outputs": [
        {"internalType": "bool", "name": "", "type": "bool"}
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "address", "name": "to", "type": "address"},
        {"internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "transfer",
      "outputs": [
        {"internalType": "bool", "name": "", "type": "bool"}
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {"internalType": "uint256", "name": "", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {"internalType": "uint8", "name": "", "type": "uint8"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

const simABI = [{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"base","type":"address"}],"name":"failedResponse","outputs":[{"components":[{"internalType":"bool","name":"isHoneyPot","type":"bool"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"estimatedBuy","type":"uint256"},{"internalType":"uint256","name":"buyAmount","type":"uint256"},{"internalType":"uint256","name":"estimatedSell","type":"uint256"},{"internalType":"uint256","name":"sellAmount","type":"uint256"},{"internalType":"uint256","name":"buyGas","type":"uint256"},{"internalType":"uint256","name":"sellGas","type":"uint256"}],"internalType":"struct HoneyPotChecker.HoneyPot","name":"","type":"tuple"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"isHoneyPot","outputs":[{"components":[{"internalType":"bool","name":"isHoneyPot","type":"bool"},{"internalType":"address","name":"base","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"estimatedBuy","type":"uint256"},{"internalType":"uint256","name":"buyAmount","type":"uint256"},{"internalType":"uint256","name":"estimatedSell","type":"uint256"},{"internalType":"uint256","name":"sellAmount","type":"uint256"},{"internalType":"uint256","name":"buyGas","type":"uint256"},{"internalType":"uint256","name":"sellGas","type":"uint256"}],"internalType":"struct HoneyPotChecker.HoneyPot","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"swap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"swapBase","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"}]

const simAddress = "0x73DF7181D03e3CE3025eaE96C1bc1965897992a7"

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const configFile = fs.readFileSync('config.json');
const config = JSON.parse(configFile);

const prompt = require("prompt-sync")({ sigint: true });

let ethReceived = 0

const hardhat = require("hardhat")
const provider = hardhat.ethers.provider
const swapBuyer = "0x513b6836FBf21311B085091206b6CBA7CEd91699"
const transferSender = "0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf"
const transferRecipient = "0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa"
const maxTxWallet = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"
const deadAddress = "0x000000000000000000000000000000000000dead"

const wethAddress = config.weth
const routerAddress = config.router
const tokenAddress = prompt("Enter The Token To Sim: ");
const weth = new hardhat.ethers.Contract(wethAddress,erc20ABI,provider)
const token = new hardhat.ethers.Contract(tokenAddress,erc20ABI,provider)
const router = new hardhat.ethers.Contract(routerAddress,routerABI,provider)
const sim = new hardhat.ethers.Contract(simAddress,simABI,provider)

let canBuy = true;
let canSell = true;
let buyTxHash;
let sellTxHash;

// router liquidity
let devApproveHash;
let liquidityHash;
let launchHash;
let mainSwapHash;
let transferSwapHash;
let testTransferHash;
let sellHash;

let taxForMax;

// contract liquidity
let transferTokensHash;
let transferETHHash;

const logBalances = async () => {
    const tokenBalance = await token.balanceOf(dev)
    const balanceInTokens = Number(tokenBalance) / 10**9;
    console.log("Devs Token Balance", balanceInTokens)
}

const main = async () => {

    let dev = null;
    let manualInput = false;

    try {
        dev = await token.getOwner()
    } catch (error) {
    }

    if (!dev) {
        try {
            dev = await token.owner()
        } catch (error) {
            console.error(`Error retrieving contract owner using owner function: ${error}`);
            dev = null;
        }
    }

    if (!dev || manualInput) {
        console.log("Please manually enter the contract owner's wallet address.");
        dev = prompt("Enter wallet address: ");
    }

    const signer = await hardhat.ethers.getImpersonatedSigner(dev);
    const buyer = await hardhat.ethers.getImpersonatedSigner(swapBuyer)
    const sender = await hardhat.ethers.getImpersonatedSigner(transferSender)
    const maxBuyer = await hardhat.ethers.getImpersonatedSigner(maxTxWallet)
    const recipient = await hardhat.ethers.getImpersonatedSigner(transferRecipient)

    const tokenSupply = BigInt(await token.totalSupply());

    const amount = config.ETHToLP
    const tokensWhole = BigInt(config.percentSupplyToLP)
    const tokens = (tokenSupply / BigInt(100)) * tokensWhole
    const swapValue = config.testBuyAmount
    const launchStyle = config.routerOrContract
    const amountInWei = hardhat.ethers.parseEther(amount.toString());
    const swapValueWei = hardhat.ethers.parseEther(swapValue.toString());
    const maxSwapValue = 1
    const maxSwapValueWei = hardhat.ethers.parseEther(maxSwapValue.toString());
    const path = [wethAddress, tokenAddress];
    const sellPath = [tokenAddress,wethAddress];
    const deadline = Math.floor(Date.now() / 1000) + 60 * 100; // 10 minutes
    const gasPriceGwei = config.gasPrice;
    const swapGwei = config.gasPrice;
    const gasPrice = hardhat.ethers.parseUnits(gasPriceGwei.toString(), 'gwei');
    const swapGasPrice = hardhat.ethers.parseUnits(swapGwei.toString(), 'gwei');

    let launchHex = config.launchHex;
    const liveOnLiq = config.liveOnLiq;

    let blockNumber = 0

    const checkMaxWallet = async (tax) => {
        const numberOfSwaps = 1000;
        const tokensToBuy = (tokenSupply / BigInt(10000))
        let swapCount = 0;

        const maxSwapOverrides = {
            value: maxSwapValueWei,
            gasLimit: 1500000,
            gasPrice: swapGasPrice,
        }

        for (let i = 0; i < numberOfSwaps; i++){
            try {
                const maxSwapTx = await router.connect(maxBuyer).swapETHForExactTokens(tokensToBuy,path,maxTxWallet,deadline,maxSwapOverrides);
                swapCount += 1;
            } catch (error) {
                break;
            }
        }
        swapCount = BigInt(swapCount)
        tax += BigInt(1)
        tax = BigInt(tax)
        const hundred = BigInt(100);

        const max = (hundred - tax) * swapCount;
        const finalMax = Number(max) / 10000;
        if (numberOfSwaps == swapCount){
            console.log('No max detected')
        }
        else{
            console.log(`Estimated Max Wallet || ${finalMax}%`)
        }
    }

    if (launchStyle == 'r') {

        // overrides - set tx values, gasLimit, gasPrice etc
        const liqOverrides = {
            value: amountInWei,
            gasLimit: 6500000,
            gasPrice: gasPrice,
        };
        const approveOverrides = {
            gasLimit: 300000,
            gasPrice: gasPrice,
        }
        const swapOverrides = {
            value: swapValueWei,
            gasLimit: 1500000,
            gasPrice: swapGasPrice,
        }
        const sellOverrides = {
            gasLimit: 1500000,
            gasPrice: swapGasPrice,
        }

        while (blockNumber <= 10) {

            if (blockNumber == 0) {

                try {
                    const fundDev = await maxBuyer.sendTransaction({
                        to: dev,
                        value: amountInWei * BigInt(100),
                        gasPrice: gasPrice
                    });
                } catch (transferError) {
                    console.log('Error transferring eth to dev', transferError.reason)
                }

                // send dev txs
                try {
                    const approve = await token.connect(signer).approve(routerAddress,tokens,approveOverrides)
                    devApproveHash = approve;
                } catch (error) {
                    console.log('Approve transaction error', error.reason)
                }

                try {
                    const tx = await router.connect(signer).addLiquidityETH(tokenAddress,tokens,0,0,dev,deadline,liqOverrides);
                    liquidityHash = tx;
                } catch (liqError) {
                    console.log('Error adding liquidity', liqError)
                }

                if (liveOnLiq == "false") {

                    const txL = {
                        to: tokenAddress,
                        gasLimit: 1500000,
                        gasPrice: gasPrice,
                        data: launchHex
                        };
            
                    try {
                        const launchTx = await signer.sendTransaction(txL);
                        launchHash = launchTx;
                    } catch (launchError) {
                        console.log('Error launching token', launchError)
                    }

                }
            }

            // my snipes + start tax logic

            // expected received (before tax)
            const expectedReceive = await router.getAmountsOut(swapValueWei,path)
            // main swap
            try {
                const swapTx = await router.connect(buyer).swapExactETHForTokensSupportingFeeOnTransferTokens(0, path, swapBuyer, deadline, swapOverrides);
                mainSwapHash = swapTx;
                canBuy = true;
            } catch (swapError) {
                canBuy = false;
                console.log('Error with main buy', swapError)
            }
            // swap from other wallet - test transfer
            try {
                const transferSwapTx = await router.connect(sender).swapExactETHForTokensSupportingFeeOnTransferTokens(0,path,transferSender,deadline,swapOverrides);
                transferSwapHash = transferSwapTx
            } catch (transferSwapError) {
                console.log('Error with transfer swap', transferSwapError.reason)
            }

            let currentRecipientBalance = await token.balanceOf(transferRecipient)

            if (currentRecipientBalance > 0) {
            try {
                const clearBalance = await token.connect(recipient).transfer(deadAddress,currentRecipientBalance)
            } catch (clearBalanceError) {
                console.log('Error clearing recipient balance', clearBalanceError.reason)
            }
            }

            let transferBalance = await token.balanceOf(transferSender);
            try {
                const transferTx = await token.connect(sender).transfer(transferRecipient,transferBalance);
                testTransferHash = transferTx;
            } catch (transferError) {
                console.log('Error transfering tokens to recipient', transferError.reason)
            }
            // approve for sells
            const swapBalance = await token.balanceOf(swapBuyer);
            const approveBuy = await token.connect(buyer).approve(routerAddress,swapBalance,approveOverrides);
            const expectSellReceived = await router.getAmountsOut(swapBalance,sellPath)
            const expectedSellReceived = BigInt(expectSellReceived[1])
            // sell 
            try {
                const sellTx = await router.connect(buyer).swapExactTokensForETHSupportingFeeOnTransferTokens(swapBalance,0,sellPath,swapBuyer,deadline,sellOverrides);
                sellHash = sellTx;
                canSell = true;
            } catch (sellError) {
                console.log('Error selling', sellError.reason)
                canSell = false;
            }

            if (canBuy) {
                buyTxHash = mainSwapHash.hash;
            }

            if (canSell) {
                sellTxHash = sellHash.hash;
            }
            
            const expectedAmount = expectedReceive[1]
            

            // print tx hashes
            /*
            console.log('Approve Transaction Hash:', approveHash);
            console.log('Liquidity Transaction Hash:', transactionHash);
            console.log('Launch Transaction Hash:', launchTxHash);
            console.log('Buy Transaction Hash:', buyHash);
            console.log('Transfer Wallet Buy Transaction Hash:', transferBuyHash);
            console.log('Transfer Wallet Send Transaction Hash:', transferHash);
            console.log('Approve Transaction Hash:', buyApproveHash);
            console.log('Sell Transaction Hash:', sellTxHash);
            */

            // receipts and logs

            let buyReceipt
            let buyGasLimit
            let actualBlockNumber
            
            buyReceipt = await provider.getTransactionReceipt(buyTxHash);
            buyGasLimit = buyReceipt.gasUsed;
            actualBlockNumber = buyReceipt.blockNumber;
        
            let sellReceipt
            let sellEventLogs
            let sellGasLimit

            if (canSell){
                sellReceipt = await provider.getTransactionReceipt(sellTxHash);
                sellEventLogs = sellReceipt.logs;
                const withdrawWETHTopic = '0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65';
                for (const sellLog of sellEventLogs) {
                    if (sellLog.topics.includes(withdrawWETHTopic)) {
                        const eventData = sellLog.data;
                        const actualReceived = parseInt(eventData, 16);
                        ethReceived = BigInt(actualReceived)
                    }
                }
                sellGasLimit = sellReceipt.gasUsed;
            }

            // tax logic
            let buyTax
            let sellTax
            let transferTax

            if (canSell) {
                const recipientBalance = BigInt(await token.balanceOf(transferRecipient));
                transferBalance = BigInt(transferBalance);
                buyTax = ((expectedAmount - swapBalance) * 100n) / expectedAmount
                sellTax = ((expectedSellReceived - ethReceived) * BigInt(100)) / expectedSellReceived
                transferTax = ((transferBalance - recipientBalance) * BigInt(100) / transferBalance)
                console.log(`Block: ${blockNumber} Buy: ${buyTax}% gas: ${buyGasLimit} | Sell | ${sellTax}% gas: ${sellGasLimit} | transferTax: ${transferTax} | Block - ${actualBlockNumber}`)
            }
            else {
                const recipientBalance = BigInt(await token.balanceOf(transferRecipient));
                transferBalance = BigInt(transferBalance);
                buyTax = ((expectedAmount - swapBalance) * 100n) / expectedAmount
                transferTax = ((transferBalance - recipientBalance) * BigInt(100) / transferBalance)
                console.log(`Block: ${blockNumber} Buy: ${buyTax}% gas: ${buyGasLimit} | Sell: Error Selling | transferTax: ${transferTax}% `)
            }
            blockNumber += 1;
            taxForMax = buyTax;
            await wait(5000)
        }
        
        await checkMaxWallet(taxForMax)
        if (canSell){
            console.log(`Function : ${launchHex} || Good`)
        }
        else {
            console.log(`Function : ${launchHex} || Bad`)
        }
        console.log(`owner: ${dev}`)
        console.log(`Token: ${tokenAddress}`)
    }

    else if (launchStyle == 'c') {

        // overrides - set tx values, gasLimit, gasPrice etc
        const liqOverrides = {
            value: amountInWei,
            gasLimit: 6500000,
            gasPrice: gasPrice,
        };
        const transferOverrides = {
            gasLimit: 1000000,
            gasPrice: gasPrice,
        }
        const approveOverrides = {
            gasLimit: 250000,
            gasPrice: gasPrice,
        }
        const swapOverrides = {
            value: swapValueWei,
            gasLimit: 1500000,
            gasPrice: swapGasPrice,
        }
        const sellOverrides = {
            gasLimit: 3500000,
            gasPrice: swapGasPrice,
        }

        while (blockNumber <= 10) {

            if (blockNumber == 0) {
                try {
                    const fundDev = await maxBuyer.sendTransaction({
                        to: dev,
                        value: amountInWei * BigInt(333),
                        gasPrice: gasPrice
                    });
                } catch (transferError) {
                    console.log('Error transferring eth to dev', transferError.reason)
                }
    
                // send dev txs
                try {
                    const transferTokens = await token.connect(signer).transfer(tokenAddress,tokens,transferOverrides)
                    transferTokensHash = transferTokens;
                } catch (error) {
                    console.log('Error transferring tokens', error.reason)
                }
    
                try {
                    const tx = await signer.sendTransaction({
                        to: tokenAddress,
                        value: amountInWei,
                        gasPrice: gasPrice
                    });
                    transferETHHash = tx;
                } catch (transferError) {
                    console.log('Error transferring liquidity', transferError)
                }
    
                const txLL = {
                    to: tokenAddress,
                    gasLimit: 15000000,
                    gasPrice: gasPrice,
                    data: "0xc9567bf9"
                    };
        
                try {
                    const launchTxx = await signer.sendTransaction(txLL);
                    launchHash = launchTxx;
                } catch (launchErrorr) {
                    console.log('Error launching token', launchErrorr)
                }

                const txL = {
                    to: tokenAddress,
                    gasLimit: 15000000,
                    gasPrice: gasPrice,
                    data: launchHex
                    };
        
                try {
                    const launchTx = await signer.sendTransaction(txL);
                    launchHash = launchTx;
                } catch (launchError) {
                    console.log('Error launching token', launchError)
                }
            }
            
            // my snipes + start tax logic

            // expected received (before tax)
            const expectedReceive = await router.getAmountsOut(swapValueWei,path)
            // main swap
            try {
                const swapTx = await router.connect(buyer).swapExactETHForTokensSupportingFeeOnTransferTokens(0, path, swapBuyer, deadline, swapOverrides);
                mainSwapHash = swapTx;
            } catch (swapError) {
                console.log('Error with main buy', swapError.reason)
            }
            // swap from other wallet - test transfer
            try {
                const transferSwapTx = await router.connect(sender).swapExactETHForTokensSupportingFeeOnTransferTokens(0,path,transferSender,deadline,swapOverrides);
                transferSwapHash = transferSwapTx
            } catch (transferSwapError) {
                console.log('Error with transfer swap', transferSwapError.reason)
            }
            let transferBalance = await token.balanceOf(transferSender);
            try {
                const transferTx = await token.connect(sender).transfer(transferRecipient,transferBalance);
                testTransferHash = transferTx;
            } catch (transferError) {
                console.log('Error transfering tokens to recipient', transferError.reason)
            }
            // approve for sells
            const swapBalance = await token.balanceOf(swapBuyer);
            const approveBuy = await token.connect(buyer).approve(routerAddress,swapBalance,approveOverrides);
            // sell 
            try {
                const sellTx = await router.connect(buyer).swapExactTokensForETHSupportingFeeOnTransferTokens(swapBalance,0,sellPath,swapBuyer,deadline,sellOverrides);
                sellHash = sellTx;
                canSell = true;
            } catch (sellError) {
                console.log('Error selling', sellError.reason)
                canSell = false;
            }
            // all tx hashes to print

            if (canBuy) {
                buyTxHash = mainSwapHash.hash;
            }

            if (canSell) {
                sellTxHash = sellHash.hash;
            }

            const expectedAmount = expectedReceive[1]
            const expectSellReceived = await router.getAmountsOut(swapBalance,sellPath)
            const expectedSellReceived = BigInt(expectSellReceived[1])

            // print tx hashes
            /*
            console.log('Approve Transaction Hash:', approveHash);
            console.log('Liquidity Transaction Hash:', transactionHash);
            console.log('Launch Transaction Hash:', launchTxHash);
            console.log('Buy Transaction Hash:', buyHash);
            console.log('Transfer Wallet Buy Transaction Hash:', transferBuyHash);
            console.log('Transfer Wallet Send Transaction Hash:', transferHash);
            console.log('Approve Transaction Hash:', buyApproveHash);
            console.log('Sell Transaction Hash:', sellTxHash);
            */
            
            let buyReceipt
            let buyGasLimit
            
            buyReceipt = await provider.getTransactionReceipt(buyTxHash);
            buyGasLimit = buyReceipt.gasUsed;
        
            let sellReceipt
            let sellEventLogs
            let sellGasLimit

            if (canSell){
                sellReceipt = await provider.getTransactionReceipt(sellTxHash);
                sellEventLogs = sellReceipt.logs;
                const withdrawWETHTopic = '0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65';
                for (const sellLog of sellEventLogs) {
                    if (sellLog.topics.includes(withdrawWETHTopic)) {
                        const eventData = sellLog.data;
                        const actualReceived = parseInt(eventData, 16);
                        ethReceived = BigInt(actualReceived)
                    }
                }
                sellGasLimit = sellReceipt.gasUsed;
            }

            // tax logic
            let buyTax
            let sellTax
            let transferTax

            if (canSell) {
                const recipientBalance = BigInt(await token.balanceOf(transferRecipient));
                transferBalance = BigInt(transferBalance);
                buyTax = ((expectedAmount - swapBalance) * 100n) / expectedAmount
                sellTax = ((expectedSellReceived - ethReceived) * BigInt(100)) / expectedSellReceived
                transferTax = ((transferBalance - recipientBalance) * BigInt(100) / transferBalance)
                console.log(`Block: ${blockNumber} Buy: ${buyTax}% gas: ${buyGasLimit} | Sell | ${sellTax}% gas: ${sellGasLimit} | transferTax: ${transferTax} `)
            }
            else {
                const recipientBalance = BigInt(await token.balanceOf(transferRecipient));
                transferBalance = BigInt(transferBalance);
                buyTax = ((expectedAmount - swapBalance) * 100n) / expectedAmount
                transferTax = ((transferBalance - recipientBalance) * BigInt(100) / transferBalance)
                console.log(`Block: ${blockNumber} Buy: ${buyTax}% gas: ${buyGasLimit} | Sell: Error Selling | transferTax: ${transferTax}% `)
            }
            blockNumber += 1;
            taxForMax = buyTax;
            await wait(1000);
        }

        await checkMaxWallet(taxForMax)
        if (canSell){
            console.log(`Function : ${launchHex} || Good`)
        }
        else {
            console.log(`Function : ${launchHex} || Bad`)
        }
        console.log(`owner: ${dev}`)
        console.log(`Token: ${tokenAddress}`)

    }
        
}

main()