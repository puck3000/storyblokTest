<template>
<section id="agentur" class="bmarg4">
    <p class="lapcenter lead bmarg2">
      Wir sind HELLA STUDIO, die neue Werbeagentur aus Burgdorf.<br>
      Wir arbeiten digital und klassisch, im Team oder als Full-Service Agentur.<br>Wir lieben
      es zu Experimentieren, unsere Arbeitsweise ist aber stets Concept-First.<br>
      Wir liefern nachhaltige Konzepte und setzen diese visuell stark um.<br>Wir
      schaffen authentische Kommunikation, die Wirkung zeigt.<br>Wir sind gross
      genug, um etwas zu erreichen und klein genug, um unsere Kunden zu
      schätzen. 
    </p>
    <article>
      <ul id="weareGrid">
        
        <li>
          <figure>     
            <img src="@/assets/img/KasperKobel_farbig.jpg" alt="Kasper Kobel">
            <figcaption>
              <h4 class="uppercase space">Kasper Kobel</h4>
              <h5>Art Director</h5>
              <p>Grafiker mit über zehn Jahren Erfahrung als Art
              Director in verschiedenen Agenturen. Ausgezeichnet mit mehreren
              nationalen und internationalen Kreativ-Awards.
              </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>     
            <img src="@/assets/img/JoelleLehmann_farbig.jpg" alt="Joelle Lehmann">
            <figcaption>
              <h4 class="uppercase space">Joëlle Lehann</h4>
              <h5>Creative Director</h5>
              <p>Fotografin (ZHdK), mehrfach ausgestellt und publiziert. Schafft
              visuelle Konzepte und kreative Lösungen. </p>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>     
            <img src="@/assets/img/Daniel-Lerch_farbig.jpg" alt="Daniel Lerch">
            <figcaption>
              <h4 class="uppercase space">Daniel Lerch</h4>
              <h5>digital</h5>
              <p>Germanist und Informatiker. Liebt Code und andere Texte.</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </article>

</section>

    
</template>

<script>



</script>

<style lang="stylus" scoped>
#agentur
    #weareGrid 
        display: grid 
        +lap()
            grid-template-columns: repeat(3, 1fr)
            grid-gap: 1em
        img 
          margin-bottom .5em
          // +lap()
          //   margin-bottom 1em
        figcaption 
          +mobile()
            margin-bottom 2em
</style>

