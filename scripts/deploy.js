
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  
  const Counter = await hre.ethers.getContractFactory("Counter");
  
  const counter = await Counter.deploy(0);

  await counter.deployed();

  console.log("Counter deployed to:", counter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
