import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jtc8i1s', 'template_zeqqp85', form.current, 'user_Pw3e1VAekshKvMvTVweFQ')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    alert('email has been sent!');
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <section className='my-28' id='contact'>
            <header className='px-5 text-2xl font-bold pt-10'>
                <h2>Contact Me</h2>
                <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
            </header>
            <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
                <div className='md:w-6/12 md:px-0 p-5 my-5'>
                    <div>
                        <p className='font-bold'>Sadman Sakib</p>
                        <p className='font-thin'>SECRETARY APARTMENT COMPLEX, APARTMENT-52(14B), DHAKA</p>
                        <a href='mailto:sadman.sami62@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
                            sadman.sami62@gmail.com
                        </a>
                    </div>
                    <a className='border-b-2 mt-3 inline-block border-gray-500' href='./Sadman Sakib Resume.pdf' target='_blank' rel='noreferrer'>
                        Resume
                    </a>
                    <div className='flex flex-row flex-wrap mt-7'>
                        <div className='mr-4'>
                            <a href='https://www.linkedin.com/in/sadman-sakib-b06028165/' target='_blank' rel='noreferrer'>
                                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                                    <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                                    LinkedIn
                                </span>
                            </a>
                        </div>

                        <div className='mr-4'>
                            <a href='https://github.com/sam002696' target='_blank' rel='noreferrer'>
                                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                                    <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                                    GitHub
                                </span>
                            </a>
                        </div>

                        {/* <a href='https://codepen.io/Theelipan' target='_blank' rel='noreferrer'>
                            <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                                <img src='./images/icons/codepen.svg' alt='' width='24px' height='24px' className='mr-1' />
                                CodePen
                            </span>
                        </a> */}
                    </div>
                </div>

                <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
                    <form onSubmit={sendEmail} ref={form} className='flex flex-col space-y-3 m-auto w-full'>
                        <input type='hidden' name='form-name' value='contact' />

                        <label htmlFor='name'>Name</label>
                        <input type='text' name='from_name' id='name' className='gradient' required></input>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='reply_to' id='email' className='gradient' required></input>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' id='message' cols='25' rows='5' className='gradient' required></textarea>
                        <button type='submit' className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
                <picture>
                    <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
                    <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
                    <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
                </picture>
            </div>
        </section>
    );
};

export default Contact;
//service_jtc8i1s