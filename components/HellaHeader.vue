<template>
    <div id="helloHeader">
         <header class="space"> 
            <ul>
                <li>
                    <section id="mobileLeftHead" @click="toggleExpanded">
                        <transition name="fade" mode="out-in">
                            <img id="navButton" v-if="!isExpanded" key="notExpanded" src="@/assets/img/Sandwich.svg" alt="Menu Button" >
                            <img  v-else src="@/assets/img/BackButton_up.svg" alt="Back Button" key="isExpanded">
                        </transition>
                    </section>
                    <section id="lapLeftHead">
                        <a href="#" class="space">
                            <img src="@/assets/img/INSTA_oval.svg" alt="INSTAGRAM">
                        </a>
                    </section>
                </li>    
                <nuxt-link to="/" tag="li">
                    <img id="mobLogo" src="@/assets/img/HELLASTUDIO_2Z.svg" alt="Hella Studio Logo">
                    <img id="lgLogo" src="@/assets/img/HELLASTUDIO_1Z.svg" alt="Hella Studio Logo">
                </nuxt-link>
                <li>
                    <a href="mailto:hello@hellastudio.ch">MAIL</a>
                    <a href="tel:+41798308072" id="tel">
                        <img src="@/assets/img/phone_Icon_key.svg" alt="Hella Studio Phone">
                        <p class="space">+41 (0)79 830 80 72</p>
                    </a>
                </li>
             </ul>
        </header>
        <navigation :isExpanded="isExpanded"/>
        <scroll-nav :isVisible="isVisible" />
    </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import ScrollNav from '@/components/ScrollNav';

export default {
    components: {
        Navigation,
        ScrollNav
    },
    data(){
        return {
            isExpanded: false,
            isVisible: false
        }
    },
    methods: {
        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        },
        handleScroll() {
            if (process.browser) {
                this.isVisible = window.scrollY > 500;
            }
        }
    },
    created () {
    if (process.browser) { 
        window.addEventListener('scroll', this.handleScroll);
    }
    },
    destroyed () {
        if (process.browser) { 
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
}
</script>

<style lang="stylus" scoped>

#helloHeader
    margin-top: 1em
    header 
        ul
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            +lap()
                grid-template-columns: repeat(5, 1fr);
            a 
                text-decoration: none
                
            li 
                &:first-child  
                    grid-column-start: span 2;
                    +lap()
                        grid-column: 1 / 2
                        margin: 1.25em auto 0;
                        text-align: center
                        
                    +mobile()
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    div 
                        height: 100%;
                        display: grid;
                        grid-template-columns: 22% auto;
                        grid-column-gap: .5em;
                        align-content: end
                    img 
                        width: 1.5em
                        +lap()
                            width: 120px
                        display inline
                    p 
                        display: inline
                    #lapLeftHead 
                        display: none
                    +lap()
                        #lapLeftHead 
                            display inline
                        #mobileLeftHead 
                            display: none
                    
                &:nth-child(2) 
                    cursor: pointer;
                    grid-column: 3 / 5;
                    text-align: center
                    +mobile()
                        img
                            width: 60%
                    #lgLogo 
                        display none
                    +lap()
                        grid-column: 2 / 5;
                        width: 50%
                        margin: 3em auto 0;
                        #mobLogo 
                            display: none
                        #lgLogo
                            display block
                &:last-child
                    grid-column-start: span 2;
                    +lap()
                        grid-column: 5 / 6 ;
                        grid-template-columns: 1fr
                        width: 100%
                        text-align: center
                        margin-top: 2em
                    
                    +mobile()   
                        display: flex;
                        justify-content: center;
                        align-items: center;                        
                        img 
                            width: 1.5em
                            display inline
                            height 100%
                        a 
                            display: inline
                            text-decoration: none
                            text-align: right
                            margin-right: 1em
                        #tel 
                            height: 100%
                    #tel 
                        +lap()
                            display: block
                        img 
                            +lap()
                                display: none
                        p 
                            display: none 
                            +lap()
                                display block
                                margin-bottom 0
                            
    #navButton
        opacity 1
        transition: opacity .5s ease-in-out
        +lap()
            opacity 0 
            grid-column: 1 / 2;
        &.hidden
            opacity 0

.fade-enter-active, .fade-leave-active 
    transition: opacity .5s;

.fade-enter, .fade-leave-to 
    opacity: 0;


</style>

