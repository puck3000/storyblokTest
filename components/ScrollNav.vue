<template>
    <section id="subheadWrap" :class="{visible: isVisible}">
        <div id="subheader">
         <nav id="subnav">
             <ul>
                 <li id="back">
                     <a class="space" href="#" v-scroll-to="{el: 'html'}">
                         BACK
                     </a>
                 </li>
                 <li>
                     <a href="#" v-scroll-to="{el: 'html'}"><img src="@/assets/img/HELLA_Smiley.svg" alt="Hella Smile HomeButton"></a>
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
  props: ["isVisible"]
};
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
        a 
            text-decoration: none
        li
            text-align: center
            img 
                width: 25%
                +lap()
                    width: 30%
        #back 
            align-self: center;
            a
                padding: .15em 1em;
                display: flex;
                justify-content: center;
                align-items: center;
            p, img
                display inline
            
            p
                margin-top: .5em
                margin-bottom .5em
            img 
                width: 1.5em
                margin-right .5em
                padding-top: .5em

            +tab()
                a
                    padding: .5em 2em;
                p
                    margin-top: .5em
                    margin-bottom .5em
                img 
                    width: 1.5em
                    margin-right 1em
                    padding-top: .5em
</style>
