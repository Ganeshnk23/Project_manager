import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const acceptProject = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/projects/${id}/accept`);
      alert("Project accepted successfully!");
      fetchProjects();
    } catch (error) {
      console.error("Error accepting project:", error);
    }
  };

  const updateProgress = async (id) => {
    const progress = prompt("Enter progress (0-100):");
    const score = prompt("Enter score:");
    if (progress && score) {
      try {
        await axios.put(`http://localhost:5000/api/projects/${id}/progress`, {
          progress: parseInt(progress),
          score: parseInt(score),
        });
        alert("Progress updated successfully!");
        fetchProjects();
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Project Assignments</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Progress:</strong> {project.progress}%</p>
            <p><strong>Score:</strong> {project.score}</p>
            <div className="button-group">
              {project.status !== "accepted" && (
                <button
                  className="accept-button"
                  onClick={() => acceptProject(project.id)}
                >
                  Accept Project
                </button>
              )}
              <button
                className="progress-button"
                onClick={() => updateProgress(project.id)}
              >
                Update Progress
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
