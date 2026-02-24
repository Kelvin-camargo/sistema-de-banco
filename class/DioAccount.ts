export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number

  // saldo da conta
  private balance: number 
  private status: boolean = true

  constructor(name: string, accountNumber: number, balance: number, status: boolean = true) {
    this.name = name
    this.accountNumber = accountNumber
    this.balance = balance
    this.status = status
  }

  deposit = (balance: number): void => {
    console.log(`voce depositou ${balance}`)
    this.balance += balance
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus() === true && this.balance >= withdraw) {
      this.balance -= withdraw
      console.log('Voce sacou')
    } else {
      console.log('Saldo insuficiente') 
    }

  }

  getBalance = (): number => {
    console.log(this.balance)
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
