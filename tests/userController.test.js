// Let Copilot help generate the test case structure
const request = require("supertest");
const app = require("../app");

describe("User API", () => {
  it("should create a user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Missael", email: "missael@example.com" });
    expect(res.statusCode).toBe(201);
  });

  it("should return a user", async () => {
    const res = await request(app).get("/users/123");
    expect(res.statusCode).toBe(200);
  });
});
