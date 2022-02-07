import { Injectable } from "@nestjs/common";
import { ICrmServices } from "src/core/abstracts";
import { Book } from "src/core/entities";


@Injectable()
export class SalesforceService implements ICrmServices {
  bookAdded(book: Book): Promise<boolean> {
    // Implement salesforce api logic

    return Promise.resolve(true);
  }
}
