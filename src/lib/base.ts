import { IConfig, ICreditInfo } from "./interfaces";
import soap  from "soap";


export abstract class Base {
    private username: string;
    private password: string;
    private url: string;


    constructor(config: IConfig) {

        this.url = config.endpoint ?? "https://wstest.creditinfo.co.tz/Multiconnector/MultiConnector.svc?singleWSDL";
        this.username = config.username;
        this.password = config.password;

    }


    protected invoke<T>(): Promise<ICreditInfo> {
        // can set default headers here
        const security = new soap.BasicAuthSecurity(this.username, this.password);
        security.addHeaders({
            connection: "keep-alive",
        })

        return soap.createClientAsync(this.url).then((client) => {
            client.setSecurity(security);
            return client;
        }).catch((err) => {
            throw new Error(err)
        });

    }
}