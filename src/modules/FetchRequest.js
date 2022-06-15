export default class FetchRequestClass {
  method;

    body;

    headers = {
      'Content-type': 'application/json; charset=UTF-8',
    };

    url;

    constructor({ method = 'GET', body, url = '' } = {}) {
      this.method = method;
      this.body = body;
      this.url = url;
    }

    async makeRequest() {
      try {
        const options = {
          method: this.method,
          body: JSON.stringify(this.body),
          headers: this.headers,
        };

        const reponse = await fetch(this.url, options);
        const data = await reponse.json();
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }
}