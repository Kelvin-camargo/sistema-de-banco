import { DioAccount } from "./DioAccount"

export class NovaConta extends DioAccount {
    constructor(name: string, accountNumber: number, balance: number, status: boolean = true) {
        super(name, accountNumber, balance, status)
    }

    depositoMais10 = (amount: number): void => {
        console.log(`Depositando ${amount + 10} (${amount} + 10 de bônus)`)
        this.deposit(amount + 10)
    }
}