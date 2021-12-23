function getAdmins(map){
    const ADMINS = []

    for([key,value] of map){
        if(value === 'Admin'){
            ADMINS.push(key)
        }
    }

    console.log(ADMINS)
}

const USERS = new Map()

USERS.set('Hudson', 'User')
USERS.set('Angélica', 'User')
USERS.set('Taciana', 'Admin')
USERS.set('Lucas', 'User')
USERS.set('Paula', 'User')
USERS.set('Sílvia', 'Admin')

getAdmins(USERS)