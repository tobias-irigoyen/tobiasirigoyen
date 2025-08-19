<template>
  <nav class="flex justify-between pt-8">
    <img src="../../assets/logo.svg" class="h-8" />
    <ul>
      <li>
        <router-link class="text-2xl ml-16" :to="'#my-work'">My Work</router-link>
        <router-link class="text-2xl ml-16" :to="'#contact'">Contact</router-link>
        <button
          @click="downloadResume"
          class="border border-white py-2 px-3 ml-16 bg-transparent !text-white text-2xl hover:bg-white hover:!text-black hover:cursor-pointer"
        >
          My Resume
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Tobías Irigoyen - Resume.pdf'
  link.download = 'Tobías Irigoyen - Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
