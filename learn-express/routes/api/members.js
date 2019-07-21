const express = require('express');
const router = express.Router();
const members = require('./Members');

// This route gets all Members
router.get('/api/members', (req, res) => res.json(members));

// This gets a single member
router.get('/api/members/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }  
});

module.exports = router;