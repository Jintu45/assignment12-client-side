import React from 'react';
import myimg from '../../assets/other/IMG_0573-01.jpeg'
const MyDetails = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 bg-gray-400 justify-center items-center'>
            <div className='p-20'>
                <h3 className='font-semibold'>Hi There</h3>
                <h2 className="text-3xl font-bold">I Am Jintu paul</h2>
                <h3 className='text-lg font-semibold'>I am Front End Developer</h3>
                <p className='mt-3'><strong>email :</strong> <span>jintupaul45@gmail.com</span></p>
                <p><strong>Education :</strong> 5th Semester, Computer Science & Technology at Habiganj Polytechnic Institute.</p>
            </div>
            <div>
                <img className='h-full lg:h-96' src={myimg} alt="" />
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
            <div className='py-5 px-10'>
                <h2 className="text-4xl font-semibold mb-5">Description :</h2>
                <p>My name is Jintu paul.I will learn web development.I am daily learn,practice and working 10-12 hour approx. Web developers have two main career paths to choose from, depending on work style and level of experience. You might opt for a stable, salaried position, or enjoy more autonomy as an independent contractor.Programming skills will always be in demand. Complement your coding prowess with a strong work ethic, and you’ll build a career that comes with high pay and even higher job satisfaction.</p>
            </div>
            <div className='py-5 px-10 bg-teal-400'>
                <h2 className="text-3xl font-semibold">My Skills</h2>
                <ul className='py-4'>
                    <li className=' mb-3 text-slate-700 font-semibold'>1. HTML</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>2. CSS</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>3. BOOTSTRAP</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>4. TAILWIND</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>5. JAVASCRIPT</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>6. GITHUB</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>7. REACT</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>8. MONGODB</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>9. EXPRESS JS</li>
                    <li className=' mb-3 text-slate-700 font-semibold'>10. NODE JS</li>
                </ul>
            </div>
        </div>
        </section>
    );
};

export default MyDetails;