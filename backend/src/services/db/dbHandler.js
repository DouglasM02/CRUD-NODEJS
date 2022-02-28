import supabase from "./dbCreation.js";

async function usersGetAll() {
    const {data, error} = await supabase.from("Users").select(`id,name`)
    if(error){
        console.log(error)
        return
    }
    return data
}

async function usersGetOne(id) {
    const {data, error} = await supabase.from("Users")
    .select(`id,name`)
    .match({id:id})
    if(error){
        console.log(error)
        return
    }
    return data
}

async function usersPost(request) {
    await supabase.from("Users")
    .insert([
        {name: request}
    ])
}

async function usersPut({id, name}) {
    await supabase.from("Users")
    .update({
        name: name,
        updated_at: new Date(Date.now())
    })
    .match({id:id})

}

async function usersDelete(id) {
    await supabase.from("Users")
    .delete()
    .match({id: id})
}

export {usersGetAll,usersGetOne,usersPost, usersPut, usersDelete}
