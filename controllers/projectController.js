const pool = require('../config/db');

// Get all projects
const getAllProjects = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projects');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Accept a project
const acceptProject = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('UPDATE projects SET status = $1 WHERE id = $2', ['accepted', id]);
        res.json({ message: 'Project accepted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update project progress and score
const updateProgress = async (req, res) => {
    const { id } = req.params;
    const { progress, score } = req.body;
    try {
        await pool.query(
            'UPDATE projects SET progress = $1, score = $2 WHERE id = $3',
            [progress, score, id]
        );
        res.json({ message: 'Progress updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllProjects, acceptProject, updateProgress };
