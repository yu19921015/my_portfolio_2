<template>
  <div class="contact">
    <div class="columns">
      <div class="column">
        <div class="title has-text-centered">
          Contact
        </div>
        <div class="content">
          <p>CareerページやSkillページの内容，その他ご質問がございましたら，お気軽にご連絡ください．</p>
            <span class="icon icon-envelope has-text-info">
            <i class="fas fa-envelope fa-lg"></i>
            </span>
            <span>yuu.koyama.3154@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contact"
  }
</script>

<style>
  @media (max-width: 768px) {
    .contact {
      margin-top: 3rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  @media (min-width: 769px) {
    .contact {
      margin-top: 5rem;
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }

  .icon-envelope {
    margin-right: 0.5rem;
  }
</style>