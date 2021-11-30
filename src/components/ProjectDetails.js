import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { projectid } = useParams();
    const [projects, setProjects] = useState([]);
    const [singleProjectDetails, setSingleProjectDetails] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sam002696/projectsdetails/main/projectdetails.JSON')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    useEffect(() => {
        const getService = projects.find(projectDetails => projectDetails.id == projectid);
        console.log(getService);
        setSingleProjectDetails(getService);
    }, [projectid, projects]);
    return (
        <section className='sm:my-10 md:my-15  lg:my-28 px-5 lg:w-2/3 mx-auto'>
            <div className="lg:grid lg:grid-cols-2 gap-20">
                <div className="col-span-1">
                    <img className='mx-auto m-5 sm:rounded-lg' src={singleProjectDetails?.siteSS} alt="" />
                </div>
                <div className="col-span-1">

                    <div >
                        <h1 className='font-semibold mx-auto pb-5 text-3xl'>
                            {singleProjectDetails?.title}</h1>
                        <h2 className=' sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl pb-10'> {singleProjectDetails?.description}</h2>
                        <div className='flex overflow-auto space-x-3 pb-2'>
                            {singleProjectDetails?.tools?.map((disc, index) => (
                                <span className='border border-gray-500 px-2 py-1 rounded-lg text-xl' key={index}>
                                    {disc}
                                </span>
                            ))}
                        </div>
                        <div>
                            <button className=' border-2 hover:bg-purple-800 lg:mt-3 lg:p-2 lg:text-center lg:w-56 sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl'>
                                <a href={singleProjectDetails?.link} target='_blank' rel='noreferrer'>Livesite Preview</a>
                            </button>
                            <h2 className='border-2 hover:bg-purple-800 lg:mt-3 lg:p-2 lg:text-center lg:w-56 sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl'>
                                <a href={singleProjectDetails?.github} target='_blank' rel='noreferrer'>Cliet Code</a>
                            </h2>
                            {singleProjectDetails?.githubServer &&
                                <h2 className=' border-2 hover:bg-purple-800 lg:mt-3 lg:p-2 lg:text-center lg:w-56 sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl'>
                                    <a href={singleProjectDetails?.githubServer} target='_blank' rel='noreferrer'>Server Code</a>
                                </h2>}
                        </div>
                        <div>
                            <h2 className=' sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl pb-10'>  {singleProjectDetails?.description_details?.map((disc, index) => (
                                <p className='px-2 py-3 rounded-lg text-xl ' key={index}>
                                    {disc}
                                </p>
                            ))}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;