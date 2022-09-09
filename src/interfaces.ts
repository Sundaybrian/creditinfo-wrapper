import { Client } from "soap";

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

type $decisionWorkflow = "NMB.TZA.Base"

export type IConfig = {
    username: string;
    password: string;
    endpoint: string;
    decisionworkflow?: $decisionWorkflow;


}

export type $IdNumberType = "IDNumberTypeIndividual" | "NotSpecified" | "CreditinfoId" | "TaxNumber" | "NationalID" | "PassportNumber" | "IDCardNumber" | "DrivingLicenseNumber" | "VotersID" | "ForeignUniqueID" | "ZanzibarID" | "WardID" | "NotSpecified";

type ISearchIndividual = {
    FullName?: string;
    IdNumber?: string;
    IdNumberType?: $IdNumberType;
    PhoneNumber?: string;

}

type ISearchIndividualRecord = {
    Address: string;
    CreditinfoId: string;
    DateOfBirth: string;
    DrivingLicenseNumber: string;
    FixedLine: string;
    ForeignUniqueID: string;
    FullName: string;
    IDCardNumber: string;
    MobilePhone: string;
    NationalID: string;
    PassportNumber: string;
    TaxNumber: string;
    VotersID: string;
    WardID: string;
}




type IndividualRecords = {
    SearchIndividualRecord: Partial<ISearchIndividualRecord[]>
}



export type ISearchInidividualInput = {
    query: {
        Parameters: ISearchIndividual
    }
}

export type ISearchIndividualResult = {
    SearchIndividualResult: {
        CreditinfoId?: null | string;
        IndividualRecords: null | IndividualRecords;
        Parameters: Partial<ISearchIndividual>;
        Status: "SubjectNotFound" | "SubjectFound"
    }
}


type SearchIndividualFn = (payload: Partial<ISearchInidividualInput>) =>
    Promise<ISearchIndividualResult>


export class ICreditInfo extends Client {
    /** results of search query, base on either of   FullName?: string;
    IdNumber?: string;
    IdNumberType?: $IdNumberType;
    PhoneNumber?: string; */
    SearchIndividualAsync: SearchIndividualFn
    
}


