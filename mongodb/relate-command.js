// Insert 1 document
db.inventory.insertOne({
  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' },
});

// Find document with sort by descending on _id
db.inventory.find({}).sort({ _id: -1 }).limit(100);

// Insert many documents at a time
db.inventory.insertMany([
  {
    item: 'journal',
    qty: 25,
    tags: ['blank', 'red'],
    size: { h: 14, w: 21, uom: 'cm' },
  },
  {
    item: 'mat',
    qty: 85,
    tags: ['gray'],
    size: { h: 27.9, w: 35.5, uom: 'cm' },
  },
  {
    item: 'mousepad',
    qty: 25,
    tags: ['gel', 'blue'],
    size: { h: 19, w: 22.85, uom: 'cm' },
  },
]);

// Searching by condition
db.inventory
  .find({ qty: { $gt: 50 } })
  .sort({ _id: -1 })
  .limit(100);

db.inventory.find({ tags: 'red' });

// Update document
db.inventory.updateOne(
  {
    _id: ObjectId('645613c1c9bfd095fc9a834c'),
  },
  {
    $inc: {
      qty: -2,
    },
  }
);

// Delete document
db.inventory.deleteOne({ "_id" : ObjectId("645615d7c9bfd095fc9a834e") })