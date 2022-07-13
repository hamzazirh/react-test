import axios from "axios";

async function getData(userId) {

    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        params: {
            _limit: 1
        }
    })

    const newData = {
        ...user,
        posts
    }
    return newData;
}

export default getData;