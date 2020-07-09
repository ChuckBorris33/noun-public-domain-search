import { v1 as uuidv1 } from "uuid";
import crypto from "crypto";

const oauth = (axios, key, secret) => {
  let getOauthParams = () => {
    return {
      oauth_consumer_key: key,
      oauth_nonce: uuidv1(),
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: Math.round(new Date().getTime() / 1000.0),
      oauth_version: "1.0",
    };
  };

  let getSignatureBaseString = (config, oauthParams) => {
    const encodedUrl = encodeURIComponent(
      new URL(config.url, "https://api.thenounproject.com/").href
    );
    const urlParams = config.params || {};
    const formData = config.data || {};
    const params = { ...urlParams, ...formData, ...oauthParams };
    const encodedParams = encodeURIComponent(
      Object.keys(params)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .sort()
        .join("&")
    );
    return `${config.method.toUpperCase()}&${encodedUrl}&${encodedParams}`;
  };

  let getSignature = (signatureBaseString) => {
    const encodedSecret = encodeURIComponent(secret);
    return crypto
      .createHmac("sha1", encodedSecret + "&")
      .update(signatureBaseString)
      .digest("base64");
  };

  let getOauthHeader = (oauthParams, signature) => {
    const headerParams = {
      ...oauthParams,
      oauth_signature: signature,
    };
    const headerParamsString = Object.keys(headerParams)
      .map((key) => `${key}="${encodeURIComponent(headerParams[key])}"`)
      .join(", ");
    return `OAuth ${headerParamsString}`;
  };

  let authentificate = (config) => {
    let oauthParams = getOauthParams(config);
    let signatureBaseString = getSignatureBaseString(config, oauthParams);
    let signature = getSignature(signatureBaseString);
    config.headers.Authorization = getOauthHeader(oauthParams, signature);
    return config;
  };

  return axios.interceptors.request.use(
    function (config) {
      authentificate(config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export default oauth;
