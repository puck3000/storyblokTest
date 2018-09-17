<template>
<section class="arbeit-detail">
    <h1>Blackwell Brewery</h1>
    <figure>
        <img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10806.jpg" alt="Blackwell Brewery CasePic 6">
        <figcaption>
            <h4>Blackwell Brewery</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem suscipit animi velit consequuntur delectus ipsa,
                quaerat dicta, eveniet aliquid ipsam quis impedit porro
                recusandae placeat, autem rerum ratione praesentium voluptas.
            </p>
        </figcaption>
    </figure> 
    <div class="casepicGrid">
        <ul>
            <li class="half"><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10801.jpg" alt="Blackwell Brewery CasePic"></li>
            <li class="half"><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10802.jpg" alt="Blackwell Brewery CasePic"></li>
            <li><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10803.jpg" alt="Blackwell Brewery CasePic"></li>
            <li class="half"><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10804.jpg" alt="Blackwell Brewery CasePic"></li>
            <li class="half"><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10805.jpg" alt="Blackwell Brewery CasePic"></li>
            <li><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10807.jpg" alt="Blackwell Brewery CasePic"></li>
            <li><img src="@/assets/img/BlackwellBrewery_Testcase/Blackwell_CASES_1920x10808.jpg" alt="Blackwell Brewery CasePic"></li>
        </ul>
    </div>    
</section>
</template>

<script>
export default {
  name: "Arbeit"
};
</script>

<style lang="stylus" scoped>
.arbeit-detail {
    margin: 0 0.5rem 3rem;
}

+lap()
    .arbeit-detail {
        max-width: 1200px;
        margin: 0 auto 3rem;

        article {
            text-align: center;
            margin: auto;
        }
    }
    .casepicGrid ul
        display: grid 
        grid-template-columns: repeat(2, 1fr)
        li 
            grid-column-start: span 2;
        .half
            grid-column-start: span 1;

</style>