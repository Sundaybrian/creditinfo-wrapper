<p align="center">
<h1>Credit Info (TZ) API Wrapper for Nodejs</h1>
</p>

The Unofficial [Credit Info Tanzania](https://creditinfo.co.tz) API wrapper for Nodejs.

- [CreditInfo Tanzania website](https://tz.creditinfo.com/)
- [WSDL](https://ws.creditinfo.co.tz/WsReport/v5.39/service.svc?singleWsdl) (requires _Basic Auth_ authentication)

## Installation

Install via npm

```bash
npm i @debugger/credintinfo
```

## Configuration

### Authentication

Configure your api username and password in `.env` file as follows

```dotenv
CREDIT_INFO_USERNAME=your_api_username
CREDIT_INFO_PASSWORD=your_api_password
```

### URL

The package config file comes with default API url pointing to `production`.

```dotenv
CREDIT_INFO_WSDL=https://ws.creditinfo.co.tz/WsReport/v5.39/service.svc?wsdl
```

To point to `test` environment set the CREDIT_INFO_WSDL key in your `.env` file to point to test url given. (See below)

```dotenv
CREDIT_INFO_WSDL=https://wstest.creditinfo.co.tz/WsReport/v5.39/service.svc?wsdl
```

Remember

- The WSDL url should end with a `?wsdl` suffix, don't forget to add this if you haven't already.
- You need to first configure correct [Authentication](#authentication) details above for your respective environment, as the WSDL url is secured with Basic Auth.

## Usage

1. [SearchIndividual Report](#searchindividual) done
2. [Driving License Report](#driving-license-report) coming soon
3. [Vehicle Report](#vehicle-report) coming soon
4. [Exception Handling](#exception-handling) coming soon

### SearchIndividual

Method `SearchIndividualAsync(params)` queries client information by FullName | PhoneNumber | IdNumber | IdNumberType

```ts
import CreditInfo from "@debugger/creditinfo";

const client = new CreditInfo({
  username: proces.env.CREDIT_INFO_USERNAME,
  password: process.env.CREDIT_INFO_PASSWORD,
  endpoint:
    "https://wstest.creditinfo.co.tz/WsReport/v5.39/service.svc?singleWSDL",
});

client
  .SearchIndividualAsync({
    query: {
      Parameters: {
        FullName: "Alli Hassan Mwinyi",
      },
    },
  })
  .then(function (results) {
    console.log({ results: results[0] });
  });

```

### VehicleReport

### Driving License Report

### National Id Report

### Exception Handling

## TODO

1. [x] SearchIndividual Report
2. [ ] Driving License Report
3. [ ] Vehicle Report
4. [ ]Exception Handling



This package is bootstrapped with the help of
[express-api-starter](https://github.com/w3cj/express-api-starter).
