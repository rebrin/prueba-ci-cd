// index.test.js
const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("debería responder con un mensaje JSON", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe("Hola desde mi primer CI/CD!");
  });
});
