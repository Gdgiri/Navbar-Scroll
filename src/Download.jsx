import React from "react";

const Download = () => {
  const downloadResume = () => {
    // Trigger a download programmatically
    const link = document.createElement("a");
    link.href = "mern-syllabus.pdf"; // The path to your PDF file in the public folder
    link.download = "My_Resume.pdf"; // The filename for the downloaded file
    link.click();
  };

  return (
    <div className="text-center">
      <button onClick={downloadResume} className="btn btn-primary">
        Download Resume as PDF
      </button>
    </div>
  );
};

export default Download;
