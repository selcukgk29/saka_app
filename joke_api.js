class jokeApi {
  constructor() {
    this.baseurl = "https://api.chucknorris.io";
    this.axiosnesne = axios.create({
      baseurl: this.baseurl,
    });
  }
  async randomsakagetir() {
    try {
      const sakaresponse = await this.axiosnesne.get(
        "https://api.chucknorris.io/jokes/random"
      );
      //console.log(sakaresponse.data.value);
      return sakaresponse.data.value;
    } catch (e) {
      console.log(e);
    }
  }
}
