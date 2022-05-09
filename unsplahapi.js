class UnsplashApi {
  constructor() {
    this.baseurl = "https://api.unsplash.com/search/photos/random";
    this.clientid = "Client-ID jVvFl5tSVGYglTkojbmQy_8_HSPy_wesGWGFW0Y-zpE";
    this.axiosnesne = axios.create({
      baseurl: this.baseurl,
      header: {
        Authorization: this.clientid,
      },
    });
  }
  async randomresimgetir() {
    try {
      const resimresponse = await this.axiosnesne.get(
        "https://api.unsplash.com/search/photos/random"
      );
      console.log(resimresponse.data);
    } catch (e) {
      console.log(e);
    }
  }
}
