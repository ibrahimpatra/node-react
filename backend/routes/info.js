const router = require('express').Router();
const Information = require('../models/information.model');
let Info = require('../models/information.model');

router.route('/').get((req, res) => {
  Info.find()
    .then(infos => res.json(infos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const phone = Number(req.body.phone);
  const email = req.body.email;;

  const newinfo = new Info({
    name,
    address,
    phone,
    email,
  });

  newinfo.save()
  .then(() => res.json('Information added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Information.findById(req.params.id)
    .then(information => res.json(information))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Information.findByIdAndDelete(req.params.id)
    .then(() => res.json('Information deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Information.findById(req.params.id)
    .then(information => {
      information.name = req.body.name;
      information.address = req.body.address;
      information.phone = Number(req.body.phone);
      information.email = req.body.email;

      information.save()
        .then(() => res.json('Info updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;