require('dotenv').config();

async function main() {
  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    'Deploying the contracts with the account:',
    await deployer.getAddress()
  );

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const kogeTokenFactory = await ethers.getContractFactory('KogeToken');
  const kogeToken = await kogeTokenFactory.deploy();

  await kogeToken.deployed();

  console.log('KogeToken address:', kogeToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
