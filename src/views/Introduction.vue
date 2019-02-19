<template>
  <div class="self-introduction">
    <div class="columns">
      <div class="column">
        <div class="content">
          <p class="is-size-4">小山　優</p>
          <p class="is-size-4">Yu Koyama</p>
          <p class="is-size-4">1992年10月15日生</p>
          <br>
          <p>神奈川生まれ，神奈川育ちの東京在住ITエンジニア．</p>
          <p>大学および大学院在学中は，機械工学を学んでいましたが，就職のタイミングでITの世界へ飛び込みました．</p>
          <p>以前は，流行りのFin-Techの前線でJavaを用いて金融商品のリスク評価ロジックを実装していました．</p>
          <p>現在は，ITコンサルタントとして，お客様の職場にデスクを置いて業務改善のためのツールをVBAで開発しています．</p>
          <p>また，WEB系のフロントエンドの開発も力を入れています．</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Introduction"
  }
</script>

<style>

  @media (max-width: 768px) {
    .self-introduction {
      margin-top: 3rem;
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }

  @media (min-width: 769px) {
    .self-introduction {
      margin-top: 5rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
</style>