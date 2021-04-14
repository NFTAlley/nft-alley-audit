// migrations/1_deployment.js
// SPDX-License-Identifier: MIT
const AlleyToken = artifacts.require("AlleyToken");
const TeamVesting = artifacts.require("TeamVesting");
const EarlyBackers = artifacts.require("EarlyBackersVesting");
const FoundationVesting = artifacts.require("FoundationVesting");
const AdvisorVesting = artifacts.require("AdvisorVesting");
const EcoSystemAndRewardVesting = artifacts.require("EcoSystemAndRewardPool");

const {
  BN,
  expectRevert,
  time,
  expectEvent,
} = require("openzeppelin-test-helpers");
//const TimelockAToken = artifacts.require("TimelockAToken")

module.exports = async function(deployer) {
  const beneficiary = "0x17115a4D966d4C12bd92323ee697C796e982BB32";
 

  const start = await time.latest(); // 1612689000 // Sunday, February 7, 2021 2:40:00 PM IST

  await deployer.deploy(AlleyToken);
  var alley = await AlleyToken;
  console.log(alley.address);
  await deployer.deploy(
    TeamVesting,
    beneficiary,
    start,
    1633527000,
    1665063000,
    true,
    alley.address
  );
  await deployer.deploy(
    EarlyBackers,
    start,
    time.duration.days(3),
    time.duration.days(10),
    true,
    alley.address
  );
  await deployer.deploy(
    FoundationVesting,
    beneficiary,
    start,
    0,
    1680787800,
    true,
    alley.address
  );
  await deployer.deploy(
    AdvisorVesting,
    beneficiary,
    start,
    time.duration.days(3),
    time.duration.days(10),
    true,
    alley.address
  );
  await deployer.deploy(
    EcoSystemAndRewardVesting,
    beneficiary,
    start,
    time.duration.seconds(0),
    time.duration.days(10),
    true,
    alley.address
  );

  var temaVesting = await TeamVesting;
  var ealryBankers = await EarlyBackers;
  var foundation = await FoundationVesting;
  var advisor = await AdvisorVesting;
  var eco = await EcoSystemAndRewardVesting;
  console.log("---------------------------------------");
  console.log("AlleyToken is At   :" + alley.address);
  console.log("TeamVesting is At  :" + temaVesting.address);
  console.log("EarlyBankers is At :" + ealryBankers.address);
  console.log("Foundation is At   :" + foundation.address);
  console.log("Advisor is At      :" + advisor.address);
  console.log("Eco is At          :" + eco.address);
  console.log("---------------------------------------\n");
};
