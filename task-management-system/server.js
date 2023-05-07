import { PORT } from './configs/config.js';
import app from './app.js';

app.listen(PORT, () => {
  console.log('Started...');
  console.log(`Server start on port: ${PORT}`);
});
