import { Module } from "@nestjs/common";
import { CrmServicesModule } from "src/services/crm-services/crm-services.module";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { BookFactoryService } from "./book-factory.service";
import { BookServices } from "./book-services.service";




@Module({
  imports: [DataServicesModule, CrmServicesModule],
  providers: [BookFactoryService, BookServices],
  exports: [BookFactoryService, BookServices],
})
export class BookServicesModule {}
