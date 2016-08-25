//'use strict';

var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

// var node = path.basename(process.argv[0]);
// var file = path.basename(process.argv[1]);
// var cmd = process.argv[2];
var [node, file, cmd, ...options] = process.argv

node = path.basename(process.argv[0]);
file = path.basename(process.argv[1]);


if (cmd === 'read') {
  fs.readFile(petsPath, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    var index = options;
    var pets = JSON.parse(data);

    if (index.length === 0) {
      console.log(pets);
    } else if (index >= pets.length || index < 0 ) {
      console.error(`Usage: ${node} ${file} ${cmd} INDEX`);
      process.exit(1);
    } else {
      console.log(pets[index]);
    }

  });
}
else if (cmd === 'create' && options.length === 3 ) {
  fs.readFile(petsPath, 'utf8', function(readErr, data) {
    if (readErr) {
      throw readErr;
    }

    var pets = JSON.parse(data);

    var [age, kind, name] = options;

    age = parseInt(age);

    if (!options) {
      console.error(`Usage: ${node} ${file} ${cmd} AGE KIND NAME`);
      process.exit(1);
    }

    pets.push({age, kind, name});

    var petsJSON = JSON.stringify(pets);


    fs.writeFile(petsPath, petsJSON, function(writeErr) {
      if (writeErr) {
        throw writeErr;
      }

      console.log(pets);
    });
  });
} else if (cmd === 'update') {
  fs.readFile(petsPath, 'utf8', function(readErr, data) {
    //Not Sure What Goes Here
  });
} else if (cmd === 'destroy') {
  fs.readFile(petsPath, 'utf8', function(readErr, data) {
    //Not Sure What Goes Here
  });
} else {
  console.error(`Usage: ${node} ${file} [read | create | update | destroy]`);
  process.exit(1);
}

//Example of lecture notes

// 'use strict';
//
// var fs = require('fs');
// var path = require('path');
// var guestsPath = path.join(__dirname, 'guests.json');
//
// var node = path.basename(process.argv[0]);
// var file = path.basename(process.argv[1]);
// var cmd = process.argv[2];
//
// if (cmd === 'read') {
//   fs.readFile(guestsPath, 'utf8', function(err, data) {
//     if (err) {
//       throw err;
//     }
//
//     var guests = JSON.parse(data);
//
//     console.log(guests);
//   });
// }
// else if (cmd === 'create') {
//   fs.readFile(guestsPath, 'utf8', function(readErr, data) {
//     if (readErr) {
//       throw readErr;
//     }
//
//     var guests = JSON.parse(data);
//     var guest = process.argv[3];
//
//     if (!guest) {
//       console.error(`Usage: ${node} ${file} ${cmd} GUEST`);
//       process.exit(1);
//     }
//
//     guests.push(guest);
//
//     var guestsJSON = JSON.stringify(guests);
//
//     fs.writeFile(guestsPath, guestsJSON, function(writeErr) {
//       if (writeErr) {
//         throw writeErr;
//       }
//
//       console.log(guest);
//     });
//   });
// }
// else {
//   console.error(`Usage: ${node} ${file} [read | create]`);
//   process.exit(1);
// }
