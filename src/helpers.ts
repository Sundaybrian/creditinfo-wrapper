import { ISearchResults } from "./interfaces"

export const isArray = function (a: any) {
    return (!!a) && (a.constructor === Array);
};


export const isObject = function (a: any) {
    return (!!a) && (a.constructor === Object);
};


export const sanitizeISearchResults = function (results: ISearchResults) {
    let cloned = [...results];
    const first_results = results[0]

    if (first_results.SearchIndividualResult.IndividualRecords == null) {
        return results;
    }


    if (isObject(first_results.SearchIndividualResult.IndividualRecords?.SearchIndividualRecord)) {

        const to_array = [first_results.SearchIndividualResult.IndividualRecords?.SearchIndividualRecord]

        let rsponse: any = { ...first_results };
        rsponse.SearchIndividualResult.IndividualRecords.SearchIndividualRecord = to_array


        cloned[0] = rsponse;

        return cloned as ISearchResults


    }

    // SearchIndividualRecord contains an array
    return results;


}