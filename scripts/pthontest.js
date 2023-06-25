const hre = require("hardhat");

async function main() {
    // Triển khai hợp đồng
    const [deployer] = await hre.ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );
    // Mathcoin phải đặt tên trùng với tên của hợp đồng ảo =))
    const P$YCHOCOIN = await hre.ethers.getContractFactory("P$YCHOCOIN");
    const contract = await P$YCHOCOIN.deploy("P$YCHOCOIN", "P$Y", 10000000000);

    await contract.deployed();

    console.log("Contract deployed at:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
