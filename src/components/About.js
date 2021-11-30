import React from 'react';

const About = () => {
    return (
        <section className='my-28  px-5 rounded-lg' id='about'>
            <header className='text-3xl font-bold py-5 '>
                <h2>About Me</h2>
            </header>
            <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                <div className='lg:p-28 sm:mb-10'>
                    <img className='rounded-2xl' src='https://i.ibb.co/7G8mzrh/samilinkedin.jpg' alt="" />
                </div>
                <div className='lg:space-y-10 lg:w-1/3'>
                    <h2 className='font-bold  text-5xl sm:mb-10'>Web Developer</h2>
                    <p className='font-normal text-2xl'>A graduate student from NIT (National Institute of Technology)
                        Durgapur with extreme motivation and internship experience. Can
                        speak languages (English, Bengali, Hindi). Through my internship, I
                        was able to experience international industrial working culture which
                        helped me a lot to grow more of a person. I like to complete given
                        task on time to release final moment stress. I aim to see myself as a
                        successful person in future and want to work for my country.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
// <img src="https://i.ibb.co/7G8mzrh/samilinkedin.jpg" alt="samilinkedin" border="0">