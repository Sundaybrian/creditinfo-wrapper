import { Base } from "./base"
import { ISearchInidividualInput, ISearchResults, ICreditInfo } from "./interfaces"
import { sanitizeISearchResults } from "./helpers"


export class CreditInfoService extends Base {

    async SearchIndividualAsync(param: Partial<ISearchInidividualInput>): Promise<ISearchResults> {

        const client = await this.invoke<ICreditInfo>()
        const results = await client.SearchIndividualAsync(param);

        return sanitizeISearchResults(results);

    }



}





