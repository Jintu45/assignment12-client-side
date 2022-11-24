import React from 'react';

const Blog = () => {
    return (
        <div className=' w-3/5 m-auto py-10'>
            <h2 className='text-3xl mb-2'>1. What are the different ways to manage a state in a React application?</h2>
            <p className='text-lg mb-6'>SQL is primarily used to query and operate database systems. MySQL allows you to handle, store, modify and delete data and store data in an organized way. SQL does not support any connector. MySQL comes with an in-built tool known as MySQL Workbench that facilitates creating, designing, and building databases.</p>

            <h2 className='text-3xl mb-2'>2.  How does prototypical inheritance work?</h2>
            <p className='text-lg mb-6'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

            <h2 className='text-3xl mb-2'>1. What is a unit test? Why should we write unit tests?</h2>
            <p className='text-lg mb-6'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

            <h2 className='text-3xl mb-2'>1.  React vs. Angular vs. Vue?</h2>
            <p className='text-lg mb-6'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;