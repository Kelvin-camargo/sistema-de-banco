import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus() === true) {
      console.log(`Voce pegou um empréstimo de ${amount}`)
      this.deposit(amount)
      this.getBalance()
    } else {
      console.log('Conta inválida')
    }
  }
}
