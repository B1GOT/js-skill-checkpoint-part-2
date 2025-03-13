// เริ่มเขียนโค้ดตรงนี้
const getUsers = async () => {
try {  
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const users = data.map((user) => user.name).filter((name) => name.length > 17);
    console.log(users);

    }catch (error) {
        console.log('error');
    }
;} 
getUsers();  
