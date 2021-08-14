export const ACCOUNT_HOLDERS = [
    {
        id: 2,
        firstName: "Sam",
        middleName: null,
        lastName: "Someone",
        contact: {
            id: 3,
            street: null,
            city: null,
            state: null,
            zip: null,
            email: null,
            phone: "5552121212",
            accountHolderId: 2
        },
        user: {
            id: 1,
            username: "userA",
            password: "userA",
            active: true,
            role: "ACCOUNTHOLDER"
        },
        ssn: "123456789",
        checkingAccounts: [
            {
                balance: 105000.0,
                interestRate: 1.0E-4,
                accountNumber: 7,
                openedOn: "2021-07-22T21:24:55.546+00:00"
            },
            {
                balance: 10000.0,
                interestRate: 1.0E-4,
                accountNumber: 9,
                openedOn: "2021-07-22T21:32:15.140+00:00"
            }
        ],
        savingsAccounts: [],
        cdbalance: 700.0,
        savingsBalance: 0.0,
        checkingBalance: 115000.0,
        cdaccounts: [
            {
                balance: 200.0,
                interestRate: 0.9,
                accountNumber: 31,
                openedOn: "2021-07-23T18:18:02.888+00:00",
                term: 1,
                cdOffering: null
            },
            {
                balance: 50.0,
                interestRate: 0.9,
                accountNumber: 32,
                openedOn: "2021-07-23T18:29:34.374+00:00",
                term: 1,
                cdOffering: null
            },
            {
                balance: 20.0,
                interestRate: 0.9,
                accountNumber: 33,
                openedOn: "2021-07-23T18:33:50.942+00:00",
                term: 1,
                cdOffering: null
            },
            {
                balance: 430.0,
                interestRate: 0.025,
                accountNumber: 36,
                openedOn: "2021-07-23T19:13:49.610+00:00",
                term: 5,
                cdOffering: {
                    id: 21,
                    term: 5,
                    interestRate: 0.025
                }
            }
        ],
        combinedBalance: 115700.0,
        numberOfCheckingAccounts: 2,
        numberOfSavingsAccounts: 0,
        numberOfCDAccounts: 4
    }
];