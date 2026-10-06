const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3000;
const path = require("path");

app.get("/students", (req, res) => {
    let studentFilePath = path.join(__dirname, "students.json");

    fs.readFile(studentFilePath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let students = JSON.parse(data);
        res.send(students);
    });
});

app.get("/students/:id", (req, res) => {
    let studentFilePath = path.join(__dirname, "students.json");

    fs.readFile(studentFilePath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let id = req.params.id;
        let students = JSON.parse(data);
        let student = "";

        for (let i = 0; i < students.length; i++) {
            if (students[i].id == id) {
                student = students[i];
                break;
            }
        }

        if (!student) {
            res.send(`No student exists with ID: ${id}`);
        } else {
            res.send(
                `Student name: ${student.name}, Student course: ${student.course}`
            );
        }
    });
});

app.get("/search", (req, res) => {
    let studentFilePath = path.join(__dirname, "students.json");

    fs.readFile(studentFilePath, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let course = req.query.course;
        let students = JSON.parse(data);
        let result = [];

        for (let i = 0; i < students.length; i++) {
            if (students[i].course.toLowerCase() == course.toLowerCase()) {
                result.push(students[i]);
            }
        }

        if (result.length == 0) {
            res.send(`No students are enrolled in the Course: ${course}`);
        } else {
            res.send(result);
        }
    });
});

app.get("/system", (req, res) => {
    const os = require("os");

    let version = os.version();
    let platform = os.platform();
    let arc = os.arch();

    res.send(
        `Platform: ${platform}, Version: ${version}, Architecture: ${arc}`
    );
});

app.get("/dns", (req, res) => {
    const dns = require("dns");

    dns.lookup("google.com", (err, address) => {
        if (err) {
            res.send(err);
            return;
        }

        res.send(`Domain: google.com, IP Address: ${address}`);
    });
});

app.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});