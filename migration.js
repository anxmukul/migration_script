const { Client } = require('pg')
var isTrueSet = (process.env.Ssl === 'true');
const client = new Client({
	user: process.env.user,
	host: process.env.hostName,
	database: process.env.dataBase,
	password: process.env.passWord,
	port: process.env.portNumber,
	ssl: {
		rejectUnauthorized: false
	}
})
client.connect(function (err) {
    if (err) {
        console.log("Error in connection with database");
		console.log("error", err);
    }
    else {
        console.log("Conection Established");
		var qry = 'alter table third_blog_table rename to blogs';
		// var qry  = 'create table third_blog_table(id int, title varchar(60), content text)';
					client.query(qry, (err, res) => {
						if (err) {
							console.log('err for', err, qry)
						}
						else {
							console.log('Created');
						}
					})
    }
})
console.log('done');