<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <article class="message is-link">
            <div class="message-header">
              <p>Java</p>
              <button @click="isClosedJava=!isClosedJava" :class="{hidden: isClosedJava}">▲</button>
              <button @click="isClosedJava=!isClosedJava" :class="{hidden: !isClosedJava}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedJava}">
              初めて学んだ言語がコレ．
              プログラミングというものに出会ってから，約2年間はJavaのみを書き続けました．
              オブジェクト指向など，プログラミングに必要な思想を学ぶことができました．
            </div>
          </article>
          <article class="message is-link">
            <div class="message-header">
              <p>Visual Basic (VBA)</p>
              <button @click="isClosedHtml=!isClosedHtml" :class="{hidden: isClosedHtml}">▲</button>
              <button @click="isClosedHtml=!isClosedHtml" :class="{hidden: !isClosedHtml}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedHtml}">
              「こやまくん，マクロ組んどいて」という上司の無茶振りから習得した言語．
              Javaに触れていたおかげで，すぐに使えるようになりました．
            </div>
          </article>
        </div>
        <div class="column">
          <article class="message is-link">
            <div class="message-header">
              <p>HTML & CSS</p>
              <button @click="isClosedVba=!isClosedVba" :class="{hidden: isClosedVba}">▲</button>
              <button @click="isClosedVba=!isClosedVba" :class="{hidden: !isClosedVba}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedVba}">
              「ゆーちゃん，勉強しなよ」という友人の一言から学び始めたフロントエンドの第一歩．
              学んで良かったと思う．cssフレームワークのbulmaを使えます．
            </div>
          </article>
          <article class="message is-link">
            <div class="message-header">
              <p>Java Script</p>
              <button @click="isClosedJavaScript=!isClosedJavaScript" :class="{hidden: isClosedJavaScript}">▲</button>
              <button @click="isClosedJavaScript=!isClosedJavaScript" :class="{hidden: !isClosedJavaScript}">▼</button>
            </div>
            <div class="message-body" :class="{hidden: isClosedJavaScript}">
              Javaと言いつつも全然Javaでは無いと実感中の言語．主にVueライブラリを使用中．
              どんどんJavaScriptのスキルアップを目指します！！
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Skill",
    data() {
      return {
        isClosedJava : true,
        isClosedHtml : true,
        isClosedVba : true,
        isClosedJavaScript : true
      }
    }
  }
</script>

<style>
 .hidden {
   display: none;
 }
</style>