import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log("URL", process.env.CLEAN_NEST_MONGO_CONNECTION_STRING)
  await app.listen(3000)
}
bootstrap()