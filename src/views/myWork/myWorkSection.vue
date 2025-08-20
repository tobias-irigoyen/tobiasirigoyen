<template>
  <section class="container" id="my-work">
    <h2 class="section-title">My work</h2>
    <div class="articles">
      <article v-for="work in works" :key="work.id" class="border border-white work mb-4">
        <a :href="work.link" target="_blank" class="mb-0 flex justify-between">
          <h3>{{ work.title }}</h3>
          <ul class="flex skills gap-1 justify-start">
            <li v-for="skill in work.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
          <svg
            class="ms-auto right-arrow"
            width="48"
            height="46"
            viewBox="0 0 48 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5833 10.3062L37.0833 22.8062L24.5833 35.3062M35.3472 22.8062H10"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import work from '../../assets/work.json'

const works = ref(work)
</script>

<style lang="scss" scoped>
.work {
  border-radius: 1rem;
  width: 100%;
  &:hover {
    background-color: #fff;
    * {
      color: #000 !important;
      stroke: #000;
    }
  }
  a {
    padding: 1.5rem 1rem;
  }
  a h3 {
    width: 50%;
    font-size: 1.75rem;
  }
}
.skills li::after {
  content: '/';
  margin-left: 5px;
  margin-right: 5px;
}
.skills {
  align-items: center;
  margin-left: 2rem;
  li:last-of-type::after {
    content: none;
  }
}
@media all and (max-width: 1200px) {
  h3 {
    font-size: 1.5rem !important;
    width: 40% !important;
  }
  .right-arrow {
    width: 36px;
    height: 34.5px;
  }
}

@media all and (max-width: 400px) {
  .work a {
    height: 200px !important;
  }
}

@media all and (max-width: 768px) {
  .work {
    width: 100% !important;
  }
}
@media all and (max-width: 992px) {
  .articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .work {
    width: 49%;
    a {
      display: flex;
      flex-direction: column;
      position: relative;
      padding-bottom: 2rem;
      height: 175px;
      h3 {
        width: 100% !important;
        font-size: 1.5rem !important;
      }
      .skills {
        padding: 0;
        margin: 0;
        margin-bottom: 1.5rem;
      }
      .skills li {
        font-size: 0.75rem !important;
      }
      .right-arrow {
        margin-top: auto !important;
        position: absolute;
        bottom: 1rem;
        right: 0.5rem;
      }
    }
  }
}
</style>
