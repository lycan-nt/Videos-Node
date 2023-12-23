# Videos Node CRUD
    Application for registering videos

## Built with
- 🍃 Typescript
- 🍃 NodeJS
- 🍃 fastify
- 🍃 postgres

## Starting
- Clone or download the project
- Import the project into your preferred IDE like VSCode for example.
- Install dependencies using: npm i
- Configuring .ENV
  - Create a .env file in the project root
  - Create and add values ​​to parameters
    - PGHOST: Database address
    - PGDATABASE: Bank name
    - PGUSER: Bank user
    - PGPASSWORD: Bank password
    - ENDPOINT_ID: This value is used for Neon's id, explained below.
 - Observation:
       During this implementation I used the postgres database, I chose to use NEON to create the database, follow the link: https://neon.tech/
       It will be possible to create an online database to access and in this case the ENDPOINT_ID must be configured in the .env, but feel free to use a local database and change the settings or even change databases.
 - To start the application, run: npm run start
 - To access the API documentation: localhost:3000/docs
