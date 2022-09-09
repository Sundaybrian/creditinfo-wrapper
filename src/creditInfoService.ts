import { Base } from "./base"
import { ISearchInidividualInput, ISearchIndividualResult, ICreditInfo } from "./interfaces"


export class CreditInfoService extends Base {

    async SearchIndividualAsync(param: Partial<ISearchInidividualInput>): Promise<ISearchIndividualResult> {

        const client = await this.invoke<ICreditInfo>()
        const results = await client.SearchIndividualAsync(param);
        return results

    }



}





