## Running the front-end application

In the project directory, you can run:

### `yarn start`

Runs the front-end app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
CORS is disabled by default and the backend will not respond properly to the API requests unless the project is built and run from the Java App

### `yarn build`

Builds the app for production to the `static` folder of the Spring Boot app.<br />
Running the Java App afterwards will serve the generated React app at http://localhost:8080/

## Running the whole application

### `npm run build` and `cd reactstojava && mvn spring-boot:run`

Runs the Spring Boot Java backend application
if it doesn't run, just run `mvn clean install` in the root java project directory
Maven and JDK 8+ need to be installed and added to the PATH variable beforehand
