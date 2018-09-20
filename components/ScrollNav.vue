<template>
    <section id="subheadWrap" :class="{visible: isVisible}">
        <div id="subheader">
         <nav id="subnav">
             <ul>
                 <li id="back">
                     <a class="space" href="__nuxt" v-scroll-to="{el: '#__nuxt'}">
                         <img src="@/assets/img/BackButton_up.svg" alt="Back to top Button">
                         <p>BACK</p>
                     </a>
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
        a 
            text-decoration: none
        li
            text-align: center
            img 
                width: 50%
                +lap()
                    width: 80%
        #back 
            align-self: center;
            a
                padding: .15em 1em;
                background:rgba(255,255,255,0.5);
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

