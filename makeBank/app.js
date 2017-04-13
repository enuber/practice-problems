function BankSystem() {
    this.allBanks = {};
    this.addBank = function(id) {
        this.allBanks[id] = new Bank();
    };
    this.removeBank = function(id) {
        delete(this.allBanks[id]);
    };
};

function Bank() {
    this.bankAccounts = {};
    this.addAccount = function(accountHolder) {
         this.bankAccounts[accountHolder] = new Account;
         this.bankAccounts[accountHolder].funds = 0;
    };
    this.removeAccount = function(accountHolder) {
        delete(this.bankAccounts[accountHolder]);
    };

};

function Account() {
    this.funds = null;
    this.addFunds = function(moneyToAdd) {
        this.funds += moneyToAdd;
    };
    this.removeFunds = function(moneyToRemove) {
        if (this.funds >= moneyToRemove) {
            this.funds -= moneyToRemove;
            return(moneyToRemove);
        } else {
            var fundsLeft = this.funds;
            this.funds = 0;
            return fundsLeft;
        }
    };
    this.transferAmount = function(receiver, amount) {
        var actualAmount = this.removeFunds(amount);
        receiver.addFunds(actualAmount);

    }
};




var bankInstitution = new BankSystem;
bankInstitution.addBank('wellsFargo');
bankInstitution.allBanks['wellsFargo'].addAccount("Erik");
bankInstitution.allBanks['wellsFargo'].addAccount("Sean");
bankInstitution.allBanks['wellsFargo'].bankAccounts["Erik"].addFunds(25);
bankInstitution.allBanks['wellsFargo'].bankAccounts["Erik"].removeFunds(15);
bankInstitution.allBanks['wellsFargo'].bankAccounts["Erik"].removeFunds(25);
bankInstitution.allBanks['wellsFargo'].bankAccounts["Erik"].addFunds(35);
var sean = bankInstitution.allBanks['wellsFargo'].bankAccounts["Sean"]
bankInstitution.allBanks['wellsFargo'].bankAccounts["Erik"].transferAmount(sean, 15);
