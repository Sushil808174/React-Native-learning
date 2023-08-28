export const list = [
    {
        id:1,
        name:'Susheel',
        email:'sushil@gmail.com',
        address:'Hamirpur'
    },
    {
        id:1,
        name:'Susheel',
        email:'sushil@gmail.com',
        address:'Hamirpur'
    }
]

export function getAllUser(){
    console.log(list[0])
    return list;
}
export function addUser(user){
    let id = list.length;
    user.id = id+1
    list.push(user)
}
export function deleteUser(id){
    for(let i = 0; i < list.length; i++){
        if(id == list[i].id){
            list.splice(i,1)
        }
    }
}