// Declaring the 6 projects I chose to display as an array
const projects = [
  {
    title: 'Just Another Text Editor',
    imageUrl: './assets/images/project1.png',
    deployedUrl: 'https://c19-text-editor.onrender.com/',
    githubUrl: 'https://github.com/enkw/c19-text-editor'
  },
  {
    title: 'Richter Rumble',
    imageUrl: './assets/images/project2.png',
    deployedUrl: 'https://enkw.github.io/business-review-game/',
    githubUrl: 'https://github.com/enkw/business-review-game'
  },
  {
    title: 'To Do List',
    imageUrl: './assets/images/project3.png',
    deployedUrl: 'https://c11-note-taker.onrender.com/',
    githubUrl: 'https://github.com/enkw/c11-Note-Taker'
  },
  {
    title: 'E-Commerce Back End',
    imageUrl: './assets/images/project4.png',
    deployedUrl: 'https://drive.google.com/file/d/1j4wviciI1lV-m28W0uTu3hd9XWKTtNwR/view',
    githubUrl: 'https://github.com/enkw/c13-e-commerce-back-end'
  },
  {
    title: 'Employee Tracker',
    imageUrl: './assets/images/project5.png',
    deployedUrl: 'https://drive.google.com/file/d/1uqC6zM-MHdlH5eF9y5g3TYYCaYgVt4EH/view',
    githubUrl: 'https://github.com/enkw/c12-Employee-Tracker'
  },
  {
    title: 'README Generator',
    imageUrl: './assets/images/project6.png',
    deployedUrl: 'https://drive.google.com/file/d/1oSL23y9zeA6RKMeNkJh8-xS52Jap3vd-/view',
    githubUrl: 'https://github.com/enkw/c09-readme-generator'
  },
];

// Exporting the portfolio page, page maps the projects array to two rows of three
export default function Portfolio() {
  return (
    <div className="container">
      {/* <h2>Portfolio</h2> */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <div key={index} className="col">
            <div className="card">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><img src={project.imageUrl} className="card-img-top" alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /></a>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
