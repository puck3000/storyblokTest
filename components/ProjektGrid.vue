<template>
  <ul class="projects">
    <li>
      <router-link tag="a" to="./arbeiten/blackwellbrewery">
        <div class="overlay"></div>
        <picture>
          <source media="(min-width: 1024px)" srcset="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10803.jpg">
          <img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10803.jpg" alt="Blackwell Browery">
        </picture>
        <div class="details">
          <h4 class="projectMouseover">Blackwell Browery</h4>
        </div>
      </router-link>
    </li>
    <li v-for="(i,index) in 30" :key="index"> <!-- switch for clause to project in projects when ready -->
      <router-link tag="a" to="#">
        <div class="overlay"></div>
        <picture>
          <source media="(min-width: 1024px)" :srcset="project.thumbDesc + index+25">
          <img :src="project.thumbMobile + index+40" :alt="project.alttext">
        </picture>
        <div class="details">
          <h4 class="projectMouseover">{{project.mouseover}}</h4>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      project: {
        mouseover: "Project Title",
        url: "../arbeiten/arbeit",
        thumbMobile: "https://gradientjoy.com/250x250?id=",
        thumbDesc: "https://gradientjoy.com/468x262?id=",
        alttext: "alt Text"
      }
    }
  }
}
</script>
<style lang="stylus" scoped>

ul.projects 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: .5em;
  grid-row-gap: .25em;
  margin-bottom: 4rem;

.projects > li 
  position: relative;
  overflow: hidden;

.overlay 
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;

.projects > li:hover .overlay 
  opacity: 1;

.details 
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;

.projects > li:hover .details 
  top: 50%;
  left: 50%;
  opacity: 1;

.details,
.overlay 
  display: none;
.projectMouseover 
  color: white;

+lap()
  .details,
  .overlay 
    display: inline;
  ul.projects 
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto 4rem;

</style>

