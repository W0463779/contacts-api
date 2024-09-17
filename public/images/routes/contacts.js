import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

export default router;

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
  });
  
  // Get a contact by id
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
  });
  
 // to-do: add post, put, and delete routers

// Create a new contact
router.post('/create', (req, res) => {
    const newContact = req.body; // 
    res.send('Contact created: ' + JSON.stringify(newContact));
});

// Update an existing contact
router.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedContact = req.body; // 
    res.send('Contact updated: ' + id + ' with data: ' + JSON.stringify(updatedContact));
});

// Delete a contact
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact deleted: ' + id);


// default route for contacts
router.get('/', (req, res) => {
    res.send('Contacts route');
})
});

// export default router;