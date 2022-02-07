import { Module } from "@nestjs/common";
import { ICrmServices } from "src/core/abstracts";
import { SalesforceService } from "./salesforce-service.service";



@Module({
  providers: [
    {
      provide: ICrmServices,
      useClass: SalesforceService,
    },
  ],
  exports: [ICrmServices],
})
export class SalesforceServicesModule {}
