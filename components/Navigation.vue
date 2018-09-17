<template>
    <nav id="mainNav" :class="{expanded: isExpanded}" class="space">
        <ul>
            <li v-for="link in navLinks" :key="link.name"  >
                <nuxt-link tag="a" :to="link.url">{{link.name}}</nuxt-link>
            </li>
            
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['isExpanded'],
    data(){
        return {
            navLinks: [
                {name: 'Werbeagentur', url: '/agentur'},
                {name: 'Leistungen', url: '/leistungen'},
                {name: 'Arbeiten', url: '/arbeiten'}
            ]
        }
    },
}
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
        border-top: dashed 2px lighten($secondary, 20%)
        &:last-child
            border-bottom: dashed 2px lighten($secondary, 20%)
        a 
            text-decoration: none
    +lap()
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
