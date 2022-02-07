import { Module } from "@nestjs/common";
import { MongoDataServicesModule } from "src/frameworks/data-services/mongo/mongo-data-services.module";

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class DataServicesModule {}
