export default class FetchRequestClass {
    body;

    method;

    url;

    headers = {
      'content-Type': 'application/json',
    };

    constructor({ method = 'GET', body, url = '' } = {}) {
      this.body = body;
      this.method = method;
      this.url = url;
    }

    static makeRequest = async () => {
      try {
        const options = {
          method: this.method,
          body: JSON.stringify(this.body),
          headers: this.headers,
        };

        const response = await fetch(this.url, options);
        const responseResult = await response.json();
        return responseResult;
      } catch (error) {
        throw new Error(error);
      }
    }
}