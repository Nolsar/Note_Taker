// Tells node that we are creating an "express" server
const express = require ('express');


// Sets an initial port. We"ll use this later in our listener
const PORT = 8080;

const app = express();

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "..Develop\public\index.html"));
// });

// app.get(`/notes`, function (req, res) {
//     res.sendFile(path.join(__dirname, "Develop\public\notes.html"));
// });



// The following HTML routes should be created:

//   * GET `/notes` - Should return the `notes.html` file.

//   * GET `*` - Should return the `index.html` file

// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// Start our server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });