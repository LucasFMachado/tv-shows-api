# tv-shows-api

> In this project, an API was developed, using Node, Postgres and Docker.
>
> The request collection is also available for import, in the ```requests.json``` file.
>
> **PS:** To run the project, it is necessary to have Docker and Docker Compose for the database to be created in a container.

### To run the project, run the following commands:

1- Clone the repository: ```$ git clone /* project_repository */ ```

2- Install project dependencies: ```$ yarn```

3- Create database on docker container: ```$ docker-compose up -d```
  * With this command, a postgreSQL database will be created with the following data:
    * Name: tv-shows-app
    * Host: 127.0.0.1
    * Port: 5432
    * User: docker
    * Password: docker
    
4- Create database structure: ```$ yarn typeorm migration:run```

4- Create default database data: ```$ yarn seeds```
  * This command will create all data pre-registered in the database (tv shows, episodes), including an administrator user.

5- Run the API: ```$ yarn dev```

<br />

### API requests:
  * **Users:**
    * Register User:
      * Method: POST
      * URL: http://localhost:3333/users
      * Body: ```{ "name": "User Test", "email": "test@mail.com", "password": "123", "password_confirm": "123" }```

    * Authenticate User (generate an authorization token):
      * Method: POST
      * URL: http://localhost:3333/users/authenticate
      * Body: ```{ "email": "admin@admin.com", "password": "admin" }```
      
    * Change User Password:
      * Method: PUT
      * URL: http://users/change-password/:user_id
      * Body: ```{ "old_password": "123", "new_password": "321", "new_password_confirm": "321" }```
      > Bearer authorization token is needed.
      
    * Update User:
      * Method: PUT
      * URL: http://users/change-password/:user_id
      * Body: ```{ "name": "User Test Updated", "email": "test_updated@mail.com" }```
      > Bearer authorization token is needed.
      
    * Delete User:
      * Method: DELETE
      * URL: http://users/:user_id
      > Bearer authorization token is needed.

    * Get One Users:
      * Method: GET
      * URL: http://localhost:3333/users/:user_id
      > Bearer authorization token is needed.
      
    * Get All Users:
      * Method: GET
      * URL: http://localhost:3333/users
      > Bearer authorization token is needed.
      
  * **Tv Shows:**
    * Get One Tv Show (returns a Tv Show information with respectives episodes):
      * Method: GET
      * URL: http://localhost:3333/tv-shows/:tv_show_id
      > Bearer authorization token is needed.
      
    * Get All Tv Shows:
      * Method: GET
      * URL: http://localhost:3333/tv-shows
      > Bearer authorization token is needed.  
      
  * **Favorites:**
    * Add Tv Show to Favorites:
      * Method: POST
      * URL: http://localhost:3333/favorites/:tv_show_id
      > Bearer authorization token is needed.
      
    * Get All Tv Shows:
      * Method: DELETE
      * URL: http://localhost:3333/favorites/:tv_show_id
      > Bearer authorization token is needed.

<br />

### Technologies used in this project:
* [Node.js](https://nodejs.org)
* [TypesCript](https://www.typescriptlang.org)
* [Express](https://expressjs.com)
* [Docker](https://www.docker.com)
* [Docker Compose](https://docs.docker.com/compose) - to create the necessary database and initial data
* [PostgreSQL](https://www.postgresql.org) - application database
* [TypeORM](https://typeorm.io) - ORM chosen for the application
