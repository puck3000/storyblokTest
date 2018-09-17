<template>
    <div id="helloHeader">
         <header class="space"> 
            <ul>
                <li id="navButton" :class="{hidden : !isExpanded}">BackButton</li>
                <li  @click="toggleExpanded">
                    <img id="mobLogo" src="@/assets/img/HELLASTUDIO_2Z.svg" alt="Hella Studio Logo">
                    <img id="lgLogo" src="@/assets/img/HELLASTUDIO_1Z.svg" alt="Hella Studio Logo">
                </li>
                <li>
                    <a href="mailto:hello@hellastudio.ch">MAIL</a>
                    <a id="tel" href="tel:+41798308072">
                        <img src="@/assets/img/phone_Icon_key.svg" alt="Hella Studio Phone"> 
                        <p>Tel: +41 (0)79 830 80 72</p>
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
                
            li 
                &:first-child  
                    grid-column-start: span 2;
                &:nth-child(2) 
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
                    align-self: center;
                    grid-column-start: span 2;
                    display: grid
                    grid-template-columns: repeat(2, 1fr)
                    +lap()
                        grid-column: 5 / 6 ;
                        grid-template-columns: 1fr
                    a 
                        text-decoration: none
                        align-self: center;
                        justify-self: center;
                        +mobile()
                            &:first-child 
                                justify-self: end;
                            img 
                                width: 1.5em
                    #tel 
                        img 
                            +lap()
                                display: none
                        p 
                            display: none 
                            +lap()
                                display: inline
    #navButton
        opacity 1
        transition: opacity .5s ease-in-out
        +lap()
            opacity 0 
            grid-column: 1 / 2;
        &.hidden
            opacity 0
                    

</style>

