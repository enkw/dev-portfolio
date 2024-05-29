function Resume() {
  const resume = '/assets/Resume.pdf';

  // Function that handles downloading my resume
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'ian_wolfe_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Returns my resume embedded on the page with a button to download it
  return (
    <div className="container">
      {/* <h2>My Resume</h2> */}
      <div>
        <embed src={resume} type="application/pdf" width="100%" height="600px" />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={handleDownloadClick}>
          Download
        </button>
      </div>
    </div>
  );
}

export default Resume;
