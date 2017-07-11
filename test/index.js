const request         = require("supertest");
const assert          = require("assert");
const app             = require("../app");
const mongoose        = require("mongoose");
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
});

describe("POST /customerItems", function() {
  it("should return successfully", function (done) {
    request(app)
      .post("/api/customers/items/:itemId/purchases")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['purchases'], "itemspurchased");
      })
      .end(done);
  })
});

describe("GET /vendor/purchases", function() {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/vendors/purchases")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['vendorsPurchases'], "vendorpurchases");
      })
      .end(done);
  })
});

describe("GET /vendor/money", function() {
  it("should return successfully", function (done) {
    request(app)
      .get("/api/vendors/money")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['vendorsMoney'], "vendormoney");
      })
      .end(done);
  })
});

describe("POST /vendor/items", function() {
  it("should return successfully", function (done) {
    request(app)
      .post("/api/vendors/items")
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['vendorItems'], "vendoritems");
      })
      .end(done);
  })
});

describe("PUT vendor/items/:itemId", function() {
  it("should return successfully", function (done) {
    request(app)
      .put("/api/vendors/items/:itemId")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function (res) {
        assert.equal(res.body['vendorItemId'], "itemId");
      })
      .end(done);
  })
});
