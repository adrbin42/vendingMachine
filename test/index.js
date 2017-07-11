const request         = require("supertest");
const assert          = require("assert");
const app             = require("../app");
const mongoose        = require("mongoose")
const nodeEnv         = process.env.NODE_ENV || "test";
const config          = require("../config.json")[nodeEnv];
mongoose.Promise      = require("bluebird");

before("connect to Mongo", function (done) {
  mongoose.connect(config.mongoURL).then(done);
});

after("drop database", function (done) {
  mongoose.connection.dropDatabase(done);
});

describe("GET /customerItems", function () {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/customers/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

  it("should return successfully", function (done) {
    request(app)
      .post("/api/customers/items/:itemId/purchases")
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

  it("should return successfully", function (done) {
    request(app)
      .get("/api/vendors/purchases")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

  it("should return successfully", function (done) {
    request(app)
      .get("/api/vendors/money")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

  it("should return successfully", function (done) {
    request(app)
      .post("/api/vendors/items")
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

  it("should return successfully", function (done) {
    request(app)
      .put("/api/vendors/items/:itemId")
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['hello'], "world");
      })
      .end(done);
  })

});
