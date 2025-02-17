 export const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts' , {
        method:"GET", 
    });

    return await response.json();
};

export const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/', {
        method: "GET",
    });
    return await response.json();
}