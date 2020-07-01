<template>
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <div class="top-page">
        <figure class="top-image">
          <img src="../../static/shiba.jpg" />
          <figcaption class="top-title">
            <h2>
              Takuya's
              <br />PortFolio
              <br />Site!!
            </h2>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-image img {
  padding: 150px 0px 0px 10px;
  width: 70%;
}
.top-image {
  position: relative;
  width: 100%;
}
.top-page {
  padding-top: 50px;
}
.top-title {
  position: absolute;
  top: 40px;
  right: 5px;
}
.top-page h2 {
  font-family: "Monotype Corsiva";
  font-size: 55px;
  letter-spacing: 1px;
  color: gray;
  text-align: right;
}
@media screen and(max-width: 768px) {
  .top-image {
    padding: 30px 40px 0 0;
  }
}
</style>
