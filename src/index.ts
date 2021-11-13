import app from "./app";
import { createConnection } from "./db";

createConnection();

//listening post
app.listen(app.get("port"));

console.log("listening port on 3000");
