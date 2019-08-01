const http = require('http');
const fs = require('fs');
const path = require('path');
const cars = require('./cars.json');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        for (let j = 0; j < cars.cars.length; j++) {
            var vuvod;
            vuvod += `<div style="display:flex; flex-direction:column"><a href="/${j}"> ${cars.cars[j].model} - ${cars.cars[j].price}</a></div>`;
            console.log(cars.cars[j].model);
        }
        res.end(`<div style="display:flex; flex-direction:column">
        <h1 style="color:blue">Our cars:</h1></div>` + vuvod);
    } else if (req.url !== '/') {
        for (let i = 0; i < cars.cars.length; i++) {
            if (req.url === `/${i}`) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<div style="display:flex; flex-direction:column">
                <div style="display:flex; flex-direction:row; justify-content: space-around">
                <p>${cars.cars[i].model}</p>
                <p>${cars.cars[i].price}</p></div>
                <img src="${cars.cars[i].photo}" alt="Car">
                    <p>${cars.cars[i].desc}</p></div>`);
            }
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color:red;>404</h1>')
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Listening on port 3000')
})

// } else if (req.url === '/1') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`<img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bmw-5-series-1_2.jpg?itok=l9SsUkzV" alt="Tesla">\n
// <p>ModelTesla</p>
// <p>Description</p>
// <p>Price</p>`);
// } else if (req.url === '/2') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`<img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bmw-5-series-1_2.jpg?itok=l9SsUkzV" alt="BMW">\n
// <p>ModelBMW</p>
// <p>Description</p>
// <p>Price</p>`);
// } else if (req.url === '/3') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`<img src="https://i.infocar.ua/i/12/4326/1400x936.jpg" alt="Mazda 6">\n
// <p>ModelMazda 6</p>
// <p>Description</p>
// <p>Price</p>`);
// } else if (req.url === '/4') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`<img src="https://www.greatplainsford.com/wp-content/uploads/2019/05/cq5dam.web_.1280.12801.jpeg" alt = "Honda">\n
// <p>ModelHonda</p>
// <p>Description</p>\n
// <p>Price</p>`);
// } else if (req.url === '/5') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`<img src="https://www.cstatic-images.com/car-pictures/xl/usc60tss011c021001.png" alt="Ford">\n
// <p>ModelFord</p>
// <p>Description</p>
// <p>Price</p>`);



//     if (req.url === '/') {
//         fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data) => {
//             res.writeHead(200, { "Content-type": "text/html" })
//             res.end(data);
//         });

//     } else if (req.url === '/about') {
//         res.writeHead(200, { "Content-type": "text/plain" })
//         res.end('Here is text about us')
//     } else {
//         res.writeHead(404, { "Content-type": "text/html" })
//         res.end('<h3>Try to /</h3> <h1>404</h1>')
//     }
// });