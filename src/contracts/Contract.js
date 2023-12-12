export class Contract {

  constructor(provider, ethers) {
    if (this.constructor === Contract) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.provider = provider;
    this.ethers = ethers;
  }

  async getBalance() {
    if (!this.balance) this.balance = await this.provider.getBalance(this.address);
    return this.balance;
 }

  getAddress() {
    return this.address;
  }

  getContract() {
    return this.contract;
  }
 
}