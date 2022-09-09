import { Base } from "./base"
import { ISearchInidividualInput, ISearchIndividualResult, ICreditInfo } from "./interfaces"


export class CreditInfoService extends Base {

    async SearchIndividual(param: Partial<ISearchInidividualInput>): Promise<ISearchIndividualResult> {

        const client: ICreditInfo = await this.invoke()
        const results = await client.SearchIndividual(param);
        return results

    }



}





