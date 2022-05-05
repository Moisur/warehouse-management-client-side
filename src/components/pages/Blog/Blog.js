import React from 'react';
import Title from '../../shared/Title/Title';

const Blog = () => {
    return (
        <div>
            <Title title={Blog}></Title>
            <div className='px-14 bg-zinc-200  h-[100%] md:h-[100vh]'>
                <div className='py-10 '>
                    <h1 className='text-4xl font-bold py-2'>Difference between javascript and nodejs ?</h1>
                    <p className='text-xl'>JavaScript is a simple programming language that runs in any browser JavaScript Engine.NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. Nodejs is written in C, C++ and Javascript.</p>
                </div>
                <div className='mb-20'>
                    <h1 className='text-4xl font-bold py-2'>When should you use nodejs and when should you use mongodb ?</h1>
                    <p className='text-xl'>There are many web servers built with nodejs that will then use MongoDB for storing data.
                        Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.MongoDB is a technology that's revolutionizing database usage.</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold py-2'>What is the purpose of jwt and how does it work ?</h1>
                    <p className='text-xl'>JWT are mainly used for authentication.After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;