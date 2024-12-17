const express = require('express');
const router = express.Router();
const {
    getAllProjects,
    acceptProject,
    updateProgress,
} = require('../controllers/projectController');

// Routes
router.get('/', getAllProjects);
router.put('/:id/accept', acceptProject);
router.put('/:id/progress', updateProgress);

module.exports = router;
