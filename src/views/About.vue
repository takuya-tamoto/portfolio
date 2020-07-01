<template>
  <div class="about">
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <div class="career">
          <h3>INFORMATION</h3>
          <img src="../../static/noimage.png" />
          <ul>
            <li>名前: 田本 卓也</li>
            <li>年齢: 28歳（1992年生まれ）</li>
            <li>出身: 福岡県久留米市</li>
            <li>学歴: 福岡県立三潴高等学校卒</li>
            <li>職歴: 航空自衛隊(1年)→法人営業(8年)</li>
            <li>趣味: サッカー/フットサル</li>
            <li>エンジニア（2020年4月~）</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  title: 'About'
}
</script>

<style scoped>
.about {
  text-align: center;
  padding-top: 10px;
}

h3 {
  font-family: "Noto Sans JP", sans-serif;
  color: rgba(0, 0, 0, 0.7);
}
img {
  padding: 15px 10px;
  border-radius: 30%;
  height: 300px;
  width: 300px;
}
.career {
  padding-bottom: 30px;
  margin-right: 10px;
}
.career li {
  list-style-type: none;
  padding-top: 15px;
  color: rgba(0, 0, 0, 0.8);
}
</style>
