# NodeJS-BE-CrashCourse-2023

This repository is used for Crash Course how to write backend in Node.js with the beginner experiences

---

## Video Playlist

[Node.js (JS) Backend Course - 2023](https://www.youtube.com/playlist?list=PLm3A9eDaMzukp-YCK4McEDFcigogvjB5V)

เป็น Playlist สอนที่ไม่แสวงหาผลกำไร จะประกอบไปด้วย

* Basic Node.js ด้วย JavaScript
* MongoDB 101
* Express.js แบบพยายามใกล้เคียง Production grade

---

### ความรู้เพิ่มเติม

Topic ด้านล่าง เป็นเพียงตัวเลือกเพิ่มเติมเพื่อต่อยอดในการทำงานจริงในระดับ New Joiner/Mid-Level/Senior ต่อไปในอนาคต

* ⭐️ แปลว่าผมแนะนำให้ดูเพิ่มเติมครับ

คำเตือน: Once you touch TypeScript, You will have some concerns when you need to pick JavaScript for the project again นะครับ

#### Functionality ที่น่าสนใจ

* ⭐️ Security for the login system
  * [How to Build a Full-Stack Authentication App With React, Express, MongoDB, Heroku, and Netlify](https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/)
  * Passport.js
    * [passport-local](https://github.com/jaredhanson/passport-local)
    * [passport-jwt](https://www.passportjs.org/packages/passport-jwt/)
  * Quick command to create key

    ```shell
      openssl genrsa -out keypair.pem 2048
      openssl rsa -in keypair.pem -pubout -out public.pem
      openssl pkcs8 -in keypair.pem -topk8 -nocrypt -out private.pem
    ```

* [multipart/form-data ในการ upload image](https://github.com/node-formidable/formidable)
* [⭐️ Integrate TypeScript](https://fireship.io/lessons/typescript-nodejs-setup/)
* [⭐️ Nest.js](https://docs.nestjs.com/first-steps)
* [⭐️ tRPC ใช้ Type ทั้ง Client/Server - Build tRPC API with React.js, Express & Node.js: Project Setup](https://codevoweb.com/trpc-api-reactjs-nodejs-mongodb-project-setup/)
* ⭐️ SQL - Prisma
  * [Build A Fullstack App with Remix, Prisma & MongoDB](https://www.prisma.io/blog/series/fullstack-remix-prisma-mongodb-MaTVLuwpaICD)
  * [Building a REST API with NestJS and Prisma](https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0)
  * [Ultimate Guide: How to use Prisma with NestJS](https://www.tomray.dev/nestjs-prisma)
  * [Building a REST API with NestJS, PostgreSQL, Swagger and Prisma](https://www.prisma.io/blog/series/nestjs-prisma-kges29apbbik)
* [SQL - Sequelize](https://codevoweb.com/build-a-crud-api-with-nodejs-and-sequelize/)
* [Auto-Instrumenting Node.js Apps with OpenTelemetry](https://logz.io/blog/nodejs-javascript-opentelemetry-auto-instrumentation/)
* [⭐️ How to Get Started with OpenTelemetry Node.js](https://www.aspecto.io/blog/getting-started-with-opentelemetry-node/)

#### Service Communication

* [GraphQL เพื่อ Flexible response - Building GraphQL APIs With Node.js](https://kinsta.com/blog/graphql-nodejs/)
* [gRPC ก้าวข้าม JSON format - Build a Complete CRUD gRPC API with Node.js and Express](https://codevoweb.com/complete-grpc-crud-api-with-nodejs-and-express/)
* [⭐️ Kafka - Confluent - Getting Started](https://developer.confluent.io/get-started/nodejs/)
* [⭐️ Kafka - Build a durable pub-sub with Kafka in Node.js](https://blog.logrocket.com/build-durable-pub-sub-with-kafka-node-js/)
* [Socket.io - Simple Realtime Chat App](https://dev.to/ndulue/building-a-simple-real-time-chat-app-with-nodejs-and-socketio-e9i)
