<template>
  <div class="career">
    <div class="column">
      <div class="title has-text-centered">
        Career
      </div>
      <div class="timeline career-area">
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">March 2011</p>
            <p>{{getMessages.march_2011}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.highSchool"></Collapse>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2011</p>
            <p>{{getMessages.april_2011}}</p>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2013</p>
            <p>{{getMessages.april_2013}}</p>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">March 2015</p>
            <p>{{getMessages.march_2015}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.university"></Collapse>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2015</p>
            <p>{{getMessages.april_2015}}</p>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">March 2017</p>
            <p>{{getMessages.march_2017}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.master"></Collapse>
          </div>
        </div>
        <div class="timeline-item is-info">
          <div class="timeline-marker is-info"></div>
          <div class="timeline-content">
            <p class="heading">April 2017</p>
            <p>{{getMessages.april_2017}}</p>
            <Collapse class="detail-button" :name="buttonName" :item="getMessages.simplex"></Collapse>
          </div>
        </div>
        <header class="timeline-header">
          <span class="tag is-medium is-info">Now</span>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
  import Collapse from '../components/Collapse'

  export default {
    name: "Career",
    components: {Collapse},
    component: {
      Collapse
    },
    data() {
      return {
        buttonName: "Detail"
        // highSchool: "東京大学現役合格へと導いてくれた学校．" +
        //   "進学塾に一切行かずに大学受験を成功したのは，本当にこの学校のおかげです．" +
        //   "良き先生と友に恵まれたと思います．" +
        //   "今の私があるのはこの学校のよるところが大き過ぎました．",
        // university: "熱電変換をテーマに卒業論文を執筆しました．" +
        //   "熱電変換とは，温度差から電気を作り出すという技術です．" +
        //   "また，軟式野球サークルにも所属しており，スポーツにも力を入れていました．",
        // master: "翼端渦をテーマに修士論文を執筆しました．" +
        //   "翼端渦とは，字の通り，飛行機などの翼の端部に発生する渦のことであり，" +
        //   "学問の分野では，流体力学に分類される研究内容でした．",
        // simplex: "社会に出て，最初に入社した会社．以下は，所属プロジェクトの概要と所属時期の紹介です．<br><br>" +
        //   "August 2017 - December 2018<br>" +
        //   "市場リスク評価システム<br>" +
        //   "金融機関が保持しているポジションのリスク量を算出するシステムの開発チームに所属していました．" +
        //   "金融規制の追加や改正に伴う評価エンジンの追加や改修が主な業務でした．" +
        //   "要件定義や設計の経験も住む機会がありました．<br><br>" +
        //   "January 2019 - <br>" +
        //   "とある金融機関のフロント業務改善コンサルティング<br>" +
        //   "とある金融機関のコンサルティングをさせてもらっています．" +
        //   "お客さんの隣にデスクを置いてもらって，業務改善のためのツールを作成しています．"
      }
    },
    computed: {
      language() {
        return this.$store.getters.language
      },
      getMessages() {
        return require('./career_' + this.language + '.json')
      }
    }
  }
</script>

<style>
  @media (min-width: 769px) {
    .career-area {
      padding-left: 10%;
    }
  }

  .detail-button {
    margin-top: 1rem;
  }
</style>