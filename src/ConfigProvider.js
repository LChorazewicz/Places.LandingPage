export default class ConfigProvider {
    constructor() {
        this.apiUrl = 'http://api.softwareservice.local:81/rest/v1/places/';
        this.apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODczMDM3NTEsImV4cCI6MTYxMDE5OTc1MSwiYWNjb3VudF91dWlkIjoibC5jaG9yYXpld2ljejEyIn0.kSSOPPW6O3dBMD_DX-xHIXrGbmhuR97lhGMu_MRt1F1S9-42sZWp_xYvwszWpM6j7VAVDmPS3JdhHIufw_HBVYzYH8oOqRBhFFo0Q8yE9ltpDA6Kf8LLVkSIWUH74Yy9jAbuoILIAQpdTE1forCtcP653hh_W3o9xtPXkWvAzNy_ttcod-YUs55qufDEcmQWU5FkQvhZ99A7DyTaMgseVJy9rqEWJFZnWLHnNMu0bz3ur4v2mJqM1ssVVlXEPBdWCbiCpHeLuULiylP5a9GXq4y93FXIrK8qp5n5CR-ubn1nxW7JGOcaOXAaWuWxwi_EakFX0yeupJZThTMTh3V07A';
    }

    getApiUrl() {
        return this.apiUrl;
    };

    getApiToken() {
        return this.apiToken;
    }
}