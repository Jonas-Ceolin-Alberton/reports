const fs = require('fs');
const path = require('path');

module.exports = {

    index(request, response) {
        const file = request.url === '/' ? 'index.html': request.url;
        const dirPath = '../public';

        fs.readFile(
            path.join(__dirname, dirPath, file),
            (error , content) => {
                console.log('content', content)
                response.end(content);
            }
        )

    },
}