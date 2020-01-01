export interface Register {
    firstName:string,
    lastName:string,
    newsLetterCheck:boolean,
    UserLogin:{
        userEmail: string,
        userPassword: string
    },
    address: string,
    termsAcceptCheck:boolean
}

