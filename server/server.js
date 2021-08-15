const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const postsList = [
    {
        id: "1",
        title: "Post 1 Title",
        subTitle: 'aliquam ultrices sagittis orci a',
        shortText: 'gravida in fermentum et sollicitudin ac orci phasellus egestas tellus',
    },
    {
        id: "2",
        title: "Post 2 Title",
        subTitle: 'volutpat commodo sed egestas egestas',
        shortText: 'risus nec feugiat in fermentum posuere urna nec tincidunt praesent'
    },
];

app.get('/posts', (request, response) => {
    response.send(postsList);
})

app.get('/post/:id', (request, response) => {
    const post = postsList.find(post => post.id === request.params.id);

    response.send(post);
})

app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`)
})
