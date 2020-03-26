// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model
// const vampireMl = require('./models/vampire');
const vampMl = require('./models/vampire')
// 3. Require your extra data source
  const vampireData = require('./populateVampires')

// 4. Connect your database
mongoose.connect('mongodb://localhost/vampire', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function() {
    console.log(`Connected to vampire DB`);
  });

  setTimeout(() => {
      mongoose.disconnect();
  },4000); 
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
vampMl.create(vampireData)
  .then(function (vampires){
    console.log(vampires)
    return vampires; 
  }).catch(err => {
    console.error(err)
  }); 
 
// // ### Add some new vampire data 
const vampireAdded = [
{
  name: 'Sumaya',
  dob: new Date(201, 0, 20, 13, 0),
  hair_color: 'black',
  eye_color: 'brown',
  loves: ['Netflix', 'Hurting peoples feels'],
  location: 'Waterloo, Canada',
  gender: 'f',
  victims: 209863
},
{
  name: 'Ahmed',
  dob: new Date(2020, 0, 20, 20, 0),
  hair_color: 'black',
  eye_color: 'brown',
  loves: ['Playing basketball', 'Go on youtube'],
  location: 'Waterloo, Canada',
  gender: 'm',
  victims: 8000
}, 
{
  name: 'Liban',
  dob: new Date(900, 0, 9, 6, 0),
  hair_color: 'black',
  eye_color: 'brown',
  loves: ['Buying hats', 'Reading'],
  location: 'Waterloo, Canada',
  gender: 'm',
  victims: 19083
}
]; 


/////////////////////////////////////////////////
// ## QUERYING
vampMl.find({gender:'f'})
  .then(function(vampires){
    console.log(vampires)
  }).catch(function(err){
    console.error(err)
  }); 

  vampMl.find({victims: {$gt:500}})
  .then(function(vampires){
    console.log(vampires)
  }).catch(function(err){
    console.error(err)
  }); 

  vampMl.find({victims: {$lte:150}})
  .then(function(vampires){
    console.log(vampires)
  }).catch(function(err){
    console.error(err)
  }); 

  vampMl.find({victims: {$ne:210234}})
  .then(function(vampires){
    console.log(vampires)
  }).catch(function(err){
    console.error(err)
  }); 

  vampMl.find({ $and:[{victims:{gt:150}}, {victims:{$lt:500}} ]})
  .then(function(vampires){
    console.log(vampires)
  }).catch(function(err){
    console.error(err)
  }); 

///////////////////////////////////////////////
// ### Select by comparison

vampMl.find({title: {$exists: true}})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

vampMl.find({victims: {$exists: false}})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

vampMl.find({$and:[{victims:{$exists:false}}, {title:{$exists:true}}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

vampMl.find({$and:[{victims:{$exists:false}}, {victims:{$gt:1000}}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

/////////////////////////////////////////////////
// ### Select by exists or does not exist


/////////////////////////////////////////////////
//### Negative Selection

 vampMl.find({ $or:[{location:'New York, New York, US'},{location:'New Orleans, Louisiana, US'}]})
  .then(function(vampires){
    console.log(vampires)
  }).catch(function(err){
    console.error(err)
  }); 


vampMl.find({$or:[{loves:'brooding'}, {loves:'being tragic'}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

vampMl.find({$or:[{loves:'marshmallows'}, {victims:{$gt:1000}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

vampMl.find({$or:[{hair_color:'red'}, {eye_color:'green'}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

/////////////////////////////////////////////////
// ### Select with OR

vampMl.find({$or:[{loves:'frilly shirtsleeves'}, {loves:'frilly collars'}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 

vampMl.find({loves:'brooding'})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
});

vampMl.find({$or:[{loves:'appearing innocent'},{loves:'frilly collars'},{loves:'trickery'},{loves:'lurking in rotting mansions'}, {loves:'R&B music'}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
});

vampMl.find({$and:[{loves:'fancy cloaks'},{loves: {$nin:["top hats","virgin blood"]} } ] } )
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
});


///////////////////////////////////////////////
### Select objects that match one of several values

vampMl.find({$and:[{loves:'ribbons'},{eye_color:{$nin:["brown"]}}]})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 


vampMl.find({location:{$nin:["Rome, Italy"]}})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 


vampMl.find({loves:{$nin:["fancy cloaks","frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 



vampMl.find({victims:{$not:{$gt:200}}})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
}); 


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

vampMl.findOneAndUpdate(
{name:'Claudia'},
{$set:{name:'Eve'}}, 
{new : true}
).then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
})



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

vampMl.findByIdAndUpdate(
'5e7139dc5327ad71c1a99a0d', 
{ $set: { gender: 'f' } },
{new: true},
).then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
})


vampMl.findByIdAndUpdate(
'5e714b4160190774e7576b30', '5e714b4160190774e7576b39','5e714b4160190774e7576b3e', 
{ $set: { gender: 'm' } },
{new: true},
).then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
})


Vampire.findOneAndUpdate({name: 'Eve'}, {$rename: {'name': 'moniker'}}, function(err, doc) {
  console.log(doc);
  mongoose.connection.close();
})


  vampMl.updateMany(
    {gender:'f'},{gender:'fem'},
  ) .then(function(vampires){
      console.log(vampires)
    }).catch(function(err){
      console.error(err)
    }) 


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

vampMl.findOneAndRemove({hair_color:'brown'})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
});


vampMl.deleteMany({eye_color:'blue'})
.then(function(vampires){
  console.log(vampires)
}).catch(function(err){
  console.error(err)
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
