function getAdmins(map){
    const ADMINS = []

    for(let user of map){
        if(user[1] === 'Admin'){
            ADMINS.push(user[0])
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