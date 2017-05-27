# Jam*On Server

This readme in under construction. Please stand by :sparkles:

This is a GraphQL server for the Jam-On React-Native app which will serve as a frontend UI for streaming free live concert recording from the Archive.org eTree, Phish.In, and PanicStream collections. It is currently hosted at https://jb-server.herokuapp.com

If you want to check out the current state of the GraphQL schema library, go to https://jb-server.herokuapp.com/graphiql

The purpose of this app is to create a better API for the above mentioned music collections (although Phish.In has a pretty good REST API already) using GraphQL so that users can quickly and easily find and play the music they want to hear from the giant amount of available recordings in one place/app. It will allow logged in users to create their own jukebox style collections and playlists which they will be able to access from any device with web access simply by logging in. Eventually, features like sharing observable playlists and notifications when a users favorite artist has scheduled a show in close proximity to their location may be added.

### Major Todos
* Finish readme
* Seed archive metadata
* Seed phish.in metadata
* Seed panicstream metadata
* Write basic react web frontend
* Add user login and sessions, OAuth etc
* Make npm modules for seeding metadata??
* Refactor server code ie don't use Babel-precompile instead
