import 'dotenv/config';

export const config = {
  DB_HOST: '167.88.32.96',
  DB_USER: 'webhookuser',
  DB_PASSWORD: '35981517',
  DB_NAME: 'spacebank',
  DB_PORT: 5432,
  DB_SSL: false,
  JWT_SECRET: 'your-secret-key'
} as const;