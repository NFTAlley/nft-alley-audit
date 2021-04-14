import constants from "openzeppelin-test-helpers/src/constants";
import ether from "../helpers/ether";

const {
  BN,
  expectRevert,
  time,
  expectEvent,
  shouldFail,
} = require("openzeppelin-test-helpers");
const { should, expect } = require("chai");
const { ZERO_ADDRESS } = constants;

const AlleyTokenBEP20 = artifacts.require("AlleyToken");
require("chai").should();

contract("AlleyToken", function([_, beni]) {
  context("once deployed", function() {
    beforeEach(async function() {
      this.token = await AlleyTokenBEP20.new();
    });

    /**
     * @dev Test case to check the symbol and name of the alley token
     */
    it("can get state", async function(){
        (await this.token.name()).should.be.equal("Alley Token");
        (await this.token.symbol()).should.be.equal("ALLEY");
    });

    /**
     * @dev Test case to check the total supply of Alley Token
     */
     it("Total Supply should be 10000000000000000000000000", async function(){
        (await this.token.totalSupply()).should.be.bignumber.equal("10000000000000000000000000");
    });

    
  });
});
