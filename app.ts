import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NovaConta } from './class/novaconta'

console.log('=== TESTANDO PEOPLEACCOUNT ===')
const peopleAccount: PeopleAccount = new PeopleAccount(123456789, 'João Silva', 1001, 1000)
console.log('Saldo inicial:', 1000)
peopleAccount.deposit(500)
peopleAccount.getBalance()
peopleAccount.withdraw(300)
peopleAccount.getBalance()
peopleAccount.withdraw(2000) 

console.log('\n=== TESTANDO COMPANYACCOUNT ===')
const companyAccount: CompanyAccount = new CompanyAccount('DIO Company', 2001, 5000)
console.log('Saldo inicial:', 5000)
companyAccount.deposit(1000)
companyAccount.getBalance()
companyAccount.getLoan(2000)
companyAccount.getBalance()

console.log('\n=== TESTANDO NOVACONTA (Depósito com bônus de 10) ===')
const novaContaBonificada: NovaConta = new NovaConta('Maria Santos', 3001, 2000)
console.log('Saldo inicial:', 2000)
novaContaBonificada.depositoMais10(100) 
novaContaBonificada.getBalance()
novaContaBonificada.withdraw(50)
novaContaBonificada.getBalance()