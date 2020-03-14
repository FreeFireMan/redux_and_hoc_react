class PostService {
    baseUrl = 'https://jsonplaceholder.typicode.com';
    getPosts=()=> fetch(`${this.baseUrl}/posts`).then(res=>res.json());

    getCommit=()=> fetch(`${this.baseUrl}/comments`).then(res=>res.json());
}
export default new PostService();