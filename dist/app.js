import express from 'express';
import todoRoutes from './routes/todos';
const app = express();
app.use('./todos', todoRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000, 'Waiting at 3000 port');
