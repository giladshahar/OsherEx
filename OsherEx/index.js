const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const cors = require('cors')
var corsOptions = {
    //origin: '/localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

app.listen(8080, () => {
    console.log('Server started!');
});

const fs = require('fs');
app.route('/api/countries').get((req, res) => {
    // fs.readFile( __dirname + "/" + "customers.json", 'utf8', function (err, data) {
    //     res.end( data );
    //  });

    //  fs.readFile("http://northwind.servicestack.net/customers.json", 'utf8', function (err, data) {
    //      res.end( data );
    //  });

    const http = require("http");

    http.get('http://northwind.servicestack.net/customers.json', result => {
        result.setEncoding("utf8");
        let body = "";
        result.on("data", data => {
          body += data;
        });
        result.on("end", () => {
        //   body = JSON.parse(body);
        //   console.log(body);
        res.end(body);
        });
      });

});  