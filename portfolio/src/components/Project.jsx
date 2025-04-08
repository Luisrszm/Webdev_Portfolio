
const refs = {
    MagicE_Manager: 'https://github.com/Luisrszm/MagicE-Manager',
    Webdev_Portfolio: 'https://github.com/Luisrszm/Webdev_Portfolio',
    READMEGen: 'https://github.com/Luisrszm/READMEGen',
    TeachersCheck: 'https://github.com/Edgarhv/ProjectOne_Teacherscheck'
}

function Project({ projects }) {

    const varias = projects.map((project) => 
         <div className={`${project}`}>
           <div className={`${project}-div`} >
             <a href={`${refs[project]}`} className={`${project}-title asize`}>{project}</a>
           </div>
         </div>
    );

    return (
      <>
      <h2>Portfolio</h2>
      <div className="container-fluid container">
        {varias}
      </div>
      </>
    );
}

export default Project