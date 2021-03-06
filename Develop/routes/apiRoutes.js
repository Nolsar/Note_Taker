const fs = require('fs');
const path = require('path');

// ROUTING
module.exports = app => {

    app.route("/api/notes")
        //   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
        .get(function (req, res) {
            res.json(database)
        })

        //   * POST `/api/notes` - Should receive a new note to save on the request body, 
        .post(function (req, res) {
            let jsonFilePath = path.join(__dirname, "/db/db.json");
            let newNote = req.body;
            let uniqueID = (savedNotes.length).toString();
            newNote.id = uniqueID;
            database.push(newNote);

            // add it to the `db.json` file
            fs.writeFilejsonFilePath, JSON.stringify(database), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Your note was aved!")
            }
            res.json(newNote);
        });

    app.delete("/api/notes/ :id", function (req, res) {
        let jsonFilePath = path.join(_dirname, "/db/db.json");
        for (let i = 0; i < database.length; i++) {
            database.splice(i, 1);
            break;
        };
        fs.writeFileSync(jsonFilePath, JSON.stringify(database), function (err) {

            if (err) {
                return console.log(err);
            } else {
                console.log("Your note was deleted!");
            }
        });
        res.json(database);
    });
};




