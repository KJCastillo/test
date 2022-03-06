//object literal

// const blogs = [
//     {title: 'coding', likes: 3},
//     {titile: 'bjj', likes: 18}
// ];

// console.log(blogs)

let user = {
    name: 'kevin',
    age: 31,
    email: 'kjc@gmail.com',
    location: 'san diego',
    blogs: [
        {title: 'coding', likes: 3},
        {title: 'bjj', likes: 18}
    ],
    login: function(){
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
    logBlogs(){
        console.log('user has written the following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
};

user.login();
user.logout();
user.logBlogs();