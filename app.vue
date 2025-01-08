<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    title: 'Mind Sparks - Digital Agency',
    meta: [
      { name: 'description', content: 'Mind Sparks adalah agensi digital terkemuka yang mengkhususkan diri dalam strategi pemasaran inovatif dan berbasis hasil. Kami membantu bisnis membangun kehadiran online yang kuat melalui pengembangan web, pemasaran digital, branding, dan masih banyak lagi. Hubungi kami hari ini untuk mengembangkan merek Anda!' }
      ],
  });

  useSeoMeta({
    title: 'Mind Sparks - Digital Agency',
    ogTitle: 'Mind Sparks - Digital Agency',
    description: 'Mind Sparks adalah agensi digital terkemuka yang mengkhususkan diri dalam strategi pemasaran inovatif dan berbasis hasil. Kami membantu bisnis membangun kehadiran online yang kuat melalui pengembangan web, pemasaran digital, branding, dan masih banyak lagi. Hubungi kami hari ini untuk mengembangkan merek Anda!',
    ogDescription: 'Kami membantu bisnis membangun kehadiran online yang kuat melalui pengembangan web, pemasaran digital, branding, dan masih banyak lagi | Mind Sparks - Digital Agency',
    ogImage: 'logo.png',
    twitterCard: 'summary_large_image',
  })

</script>