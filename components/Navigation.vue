<template>
  <nav id="mainNav" :class="{ expanded: isExpanded }" class="space">
    <ul>
      <li
        v-for="link in navLinks"
        :key="link.name"
        v-on:click="$emit('toggle')"
      >
        <nuxt-link tag="a" :to="link.url">{{ link.name }}</nuxt-link>
      </li>
      <li v-on:click="$emit('toggle')" class="job">
        <a
          href="https://www.hellastudio.ch/Stelleninserat_Praktikum_Design.pdf"
          target="_blank"
          rel="noopener"
        >
          Jobs
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["isExpanded"],
  data() {
    return {
      navLinks: [
        { name: "Agentur", url: "/agentur" },
        { name: "Leistungen", url: "/leistungen" },
        { name: "Arbeiten", url: "/arbeiten" },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>

#mainNav
    margin: 1em 0 3em
    +lap()
        margin-top: 3em
    position: relative
    top: 0
    left: 0
    li
        text-align: center
        text-transform: uppercase
        height: 3em
        padding-top: 1em
        border-top: solid 2px $main
        &:last-child
            border-bottom: solid 2px $main
        a
            text-decoration: none
    +lap()
        .job
            display: none
        ul
            display: grid
            grid-template-columns: repeat(5, 1fr);

            li
                border: none
                &:first-child
                    grid-column: 2 / 3
                &:last-child
                    border: none
    +mobile()
        max-height: 0
        overflow hidden
        margin-bottom: 0
        transition: all .5s ease-in-out
        &.expanded
            max-height: 12em
            margin-bottom: 1em;
</style>
