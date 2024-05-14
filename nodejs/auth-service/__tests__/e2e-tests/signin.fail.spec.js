const request = require("supertest");
const app = require("../../app");

test("User not found", async () => {
  // Arrange
  const server = request.agent(app);

  // Act
  const response = await server.post("/api/auth/signin").send({
    username: "user03",
    password: "password01",
  });

  // Assert
  expect(response.status).toEqual(404);
  expect(response.body.message).toEqual("User Not found.");

});

test("Signin with invalid Password", async () => {
    // Arrange
    const server = request.agent(app);
  
    // Act
    const response = await server.post("/api/auth/signin").send({
      username: "user01",
      password: "Invalid-Password",
    });
  
    // Assert
    expect(response.status).toEqual(401);
    expect(response.body.message).toEqual("Invalid Password!");
  
  });

  test("Internal server error :: Resposne 500", async () => {
    // Arrange
    const server = request.agent(app);
  
    // Act
    const response = await server.post("/api/auth/signin").send({
      username: "user01",
    });
  
    // Assert
    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual("data and hash arguments required");
  
  });