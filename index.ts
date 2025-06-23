import express, { type Request, type Response } from 'express';
import Redis from 'ioredis';

const app = express();
const PORT = process.env.PORT || 3090;

const redisClient = new Redis();

redisClient.on('error', (err: Error) => {
	console.error('Redis error:', err);
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/inc', async (req: Request, res: Response) => {
	console.log('Visits endpoint hit', req.url);
	try {
		const visits = await redisClient.get('visits');

		if (!visits) {
			await redisClient.set('visits', '1');
			res.json({ visits: 1 });
			return;
		}

		const newVisits = await redisClient.incr('visits');
		res.json({ visits: newVisits });
	} catch (error) {
		console.error('Redis error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

app.listen(PORT, () => {
	console.log('Connected to Redis');
	console.log(`Server is running on port ${PORT}`);
});
