const express = require("express");

// const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

const knex = require("./data/dbConfig.js");

server.get("/api/accounts", (req, res) => {
  knex
    .select("*")
    .from("accounts")
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get posts" });
    });
});

server.get("/api/accounts/:id", (req, res) => {
  knex
    .select("*")
    .from("accounts")
    .where({ id: req.params.id })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get posts" });
    });
});

server.post("/api/accounts", (req, res) => {
  knex("accounts")
    .insert(req.body)
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get posts" });
    });
});

server.put("/api/accounts/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .update({ name: req.body.name, budget: req.body.budget })
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get posts" });
    });
});

server.delete("/api/accounts/:id", (req, res) => {
  knex("accounts")
    .where({ id: req.params.id })
    .del()
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get posts" });
    });
});

module.exports = server;
