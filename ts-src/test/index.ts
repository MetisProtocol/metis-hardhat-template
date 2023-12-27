import { expect } from "chai";
import { ethers } from "hardhat";

describe("TestToken", function () {
  it("decimal should be 8", async function () {
    const TestToken = await ethers.getContractFactory("TestToken");
    const token = await TestToken.deploy("Test Token", "TEST");
    await token.waitForDeployment();
    expect(await token.decimals()).to.be.equal(8);
  });
});
