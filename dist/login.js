
const goInside = function(){
    window.location.href = "./recipes.html";
}
 
const singup = function(){
    const username = $('#username').val().trim();
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();
    if(username === '' || email === '' || password === '') {
        console.log('Please fill in all fields.');
        return
    }
    addUser(username, email, password);
}


// const addUser = function(username,email,password){
//     $.post('/users', {username : username , email : email , password : password} , function(response){
//             console.log(response)
//     } )
// }