<template>
  <div>
       <franchiseExpression/>
  </div>
</template>

<script>
  import franchiseExpression from "~/components/static/franchise-expression/franchise-expression-interest-form";

  export default {
    name: "franchise-expression-interest-form",
    layout: 'ukStatic',
    ssr: true,
    head: {
      title: 'Jacob Electric   \n',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Wondering how to become an electrician in Washington? Check out Jacob Electric\'s Freelance ' +
            'Journeyman program and start' +
            ' a flexible and rewarding career as a freelance electrician in Washington.\n'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'how to start electrical contractor, how to become electrical company, own electrical company, run' +
            ' electrical firm, electrical services Washington, how to become an electrician in Washington state, Electrician Jobs Washington \n'
        },
      ],
    },
    components:{
      franchiseExpression,
    },
  }
</script>

