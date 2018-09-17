<template>
    <section id="subheadWrap" :class="{visible: isVisible}">
        <div id="subheader">
         <nav id="subnav">
             <ul>
                 <li>
                     <a class="space" href="#">BACK</a>
                 </li>
                 <li>
                     <a href="#"><img src="@/assets/img/HELLA_Smiley.svg" alt="Hella Smile HomeButton"></a>
                 </li>
                 <li>

                 </li>
             </ul>
         </nav>
        </div>
    </section>
    
</template>

<script>
export default {
    props: ['isVisible']
}
</script>

<style lang="stylus" scoped>

#subheadWrap 
    position: fixed
    top: 1em
    left: 0
    width: 100vw

    z-index 10
    max-height: 0
    overflow hidden
    transition: all .5s ease-in-out
    &.visible
        max-height: 5em
        +lap()
            max-height 10em
    #subnav ul 
        display: grid 
        grid-template-columns: repeat(3, 1fr)
        justify-items: center;
        li
            text-align: center
            img 
                width: 50%
                +lap()
                    width: 80%
</style>

