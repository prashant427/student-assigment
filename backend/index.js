import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const corsOptions = {
    origin: 'http://localhost:5173', // Adjust this to your frontend's origin
    optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Hello from Express server' });
});
app.get('/api/rahul', (req, res) => {
    res.json({ data: {
        name: 'rahul',
        Overall_score: "8/9",
        Score : [{Pronunciation: '9/9'},
        {Fluency: '8/9'},
        {Vocabulary: '7/9'},
        {Grammar: '8.5/9'},]
    } });
});
app.get('/api/smriti', (req, res) => {
    res.json({ data: {
        name: 'smriti',
        Overall_score: '7.5/9',
        Score : [{Pronunciation: '7/9'},
        {Fluency: '8/9'},
        {Vocabulary: '7/9'},
        {Grammar: '6.5/9'},]
    } });
});
app.get('/api/smran', (req, res) => {
    res.json({ data: {
        name: 'smran',
        Overall_score: '7.5/9',
        Score : [{Pronunciation: '7/9'},
        {Fluency: '8/9'},
        {Vocabulary: '5/9'},
        {Grammar: '6.5/9'},]
    } });
});


app.get('/health', (req, res) => res.sendStatus(200));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
