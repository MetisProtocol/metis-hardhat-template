import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
}) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("TestToken", {
    from: deployer,
    args: ["Test Token", "TEST"],
    waitConfirmations: 1,
    log: true,
  });
};

func.tags = ["TestToken"];

export default func;
