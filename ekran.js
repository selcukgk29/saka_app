class Ekran {
  constructor() {
    this.sakagetirbtn = document.querySelector(".saka-getir-button");
    this.sakagetirbtn.addEventListener("click", () => {
      this.sakagetir();
    });
  }
  async sakagetir() {
    const joke = await new jokeApi().randomsakagetir();
    this.ekranasonucyazdir(joke);
  }
  ekranasonucyazdir(sonuc) {
    console.log(sonuc);
    document.querySelector(".sonuc").innerHTML = `  <div class="card">
    <div class="card-image">

    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <p class="title is-4 has-text-danger">
           ${sonuc}
          </p>
        </div>
      </div>
      </div>`;
  }
}
