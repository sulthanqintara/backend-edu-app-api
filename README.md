# **EDU APP WEB - BACKEND**
EDU APP is an web-based E-Learning application aimed at helping students and facilitators alike to make things easier to manage classes and scorings.

<br>

### **BUILT WITH**
---
- [Node.js (JavaScript Runtime)](https://nodejs.org/en/)
- [Express.js (Back-end Web Application Framework)](https://expressjs.com/)
- [MySQL (Database)](https://www.mysql.com/)
- [CORS (Cross-Origin Resource Sharing)](https://www.npmjs.com/package/cors)
- [Multer (Upload Middleware)](https://www.npmjs.com/package/multer)
- [Morgan (Logger)](https://www.npmjs.com/package/morgan)

### **TOOLS**
---
- [Visual Studio Code](https://code.visualstudio.com/)
- [XAMPP](https://www.apachefriends.org/index.html)
- [Postman](https://www.postman.com/)

### **INSTALLATION**
---
First of all, you will need to have [Node.js](https://nodejs.org/en/) installed on your project. After it's installed, you'll need to install [Express.js](https://expressjs.com/), [MySQL](https://www.mysql.com/), [CORS](https://www.npmjs.com/package/cors), and [Multer](https://www.npmjs.com/package/multer) on your project.
 #### Install Express.js and MySQL
 ```
npm install express mysql
```
 #### Install CORS
 ```
npm install cors
```
 #### Install Multer
 ```
npm install multer
```

### **HOW TO RUN**
---
You'll need to run 
```
node index
```
The application will run on the designated port. Since we used the 8000 port to run the backend, it should run on [https://nodejs-eduapp-b-23.herokuapp.com/](https://nodejs-eduapp-b-23.herokuapp.com/).
<br>

### **AVAILABLE ROUTES**
---
There are four main routes, with each route stemming from the base route in this application. 
- [("/auth")](https://nodejs-eduapp-b-23.herokuapp.com//auth) is the route which handles anything related to authentication (Login, Register, Logout, Forgot Password). 
- [("/users")](https://nodejs-eduapp-b-23.herokuapp.com/users) handles requests involving user data, such as profile. 
- [("/classes")](https://nodejs-eduapp-b-23.herokuapp.com/classes) manages requests related to the classes available at the EduApp. 
- And lastly, [("/subjects")](https://nodejs-eduapp-b-23.herokuapp.com/subjects) deals with the subjects available within a class, as well as grading students' scores.


### **DEMO**
---
Click the link below to view the website
> **[EDU APP]()**

<br>

### **RELATED PROJECT(S)**
- [EduApp Front-end](https://github.com/sulthanqintara/react-edu-app)

### **CREDITS AND THANKS TO**

- [ARKADEMY](https://www.arkademy.com/)
- [TRAINER](https://github.com/rhymado/)
