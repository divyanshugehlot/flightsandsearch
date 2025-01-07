# Welcome to Flights Service

## Project Setup
- clone the project pn your local
-execute "npm install" on the same  path as of your root directry or the downloaded project
-create a ".env" file in the root directory and add the following env varriables
        - `PORT = 3000`
inside the `src/config` folder create a new file `config.json`
and add the following piece of of json
`
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": <DB_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
 now run command `npx sequelize db:create`
`

## DB Design
 - Airplane Table
 - Flight 
 - Airport
 - City 