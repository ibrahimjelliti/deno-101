
import {
    app,
    get,
    post,
    redirect,
    contentType,
  } from "https://denopkg.com/syumai/dinatra@0.12.0/mod.ts";
  
  app(
    //GET
    get("/", () => "it works"),
    get("/",[200,contentType("json"),JSON.stringify({ app: "deno", version: "1.0" })]),
    get("/Hi/:id", ({ params }) => `Hi :id : ${params.id}!`),
    get(
      "/Id/:id/Name/:name",
      ({ params }) => `:id is ${params.id}, :name is ${params.name}`,
    ),
    get("/foo", () => redirect("/hello", 302)), // redirect from /foo to /hello 
    get("/50x", () => [500, "an error has occured"]),
    
    //POST
    post("/callName", ({ params }) => `Hi, ${params.name}!`)
  );