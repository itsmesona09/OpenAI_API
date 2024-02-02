import openai from 'openai';
import dotenv from "dotenv";
import os from 'os';

dotenv.config();

const openaiApiKey = new openai({
    apiKey: process.env.OPENAI_API_KEY || os.getenv('OPENAI_API_KEY')
});

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set up');
    process.exit(1);
}
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

export default openaiApiKey;
