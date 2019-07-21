const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

// This route gets all Members
router.get('/', (req, res) => res.json(members));

// This gets a single member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }  
});

// Create Member
router.post('/', (req, res) => {
  const newMember = {
    // Have database create random id 
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newMember.name || !newMember.email){
    return res.status(400).json({ msg: 'Please include a name and email'}); // Have return so you don't need an else. You would get an error "Headers already sent" if not
  } 

  members.push(newMember);
  //res.json(members);
  res.redirect('/');
});

// Update Member
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found){
    const updatedMember = req.body;
    members.forEach(member => {
      if(member.id === parseInt(req.params.id)){
        member.name = updatedMember.name ? updatedMember.name : member.name;  // Check if name was sent with req, if not keep old name
        member.email = updatedMember.email ? updatedMember.email : member.email;

        res.json({ msg: 'Member updated', member});
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }  
});

module.exports = router;