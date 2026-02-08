---
title: Home
description: Essays on awareness, systems, and the quiet mechanics of being human.
tableOfContents: false
---
<style>
  h1 { display: none; }
  /* Remove header bottom border on Home page */
  header.header { border-bottom-color: transparent; }
  /* Remove content panel divider */
  .content-panel + .content-panel { border-top-color: transparent; }

  /* Hide scrollbar cosmetically */
  html { scrollbar-width: none !important; }
  html::-webkit-scrollbar { display: none !important; }

  /* Hide footer */
  footer { display: none !important; }

/* HOME: stable vertical stage */
.home .home-hero {
  --header-h: var(--sl-nav-height, 3.5rem);

  min-height: calc(100vh - var(--header-h));
  display: grid;
  place-items: start center;      /* top-align within the cell, keep horizontal center */
  align-content: center;          /* keep grid tracks centered */

  padding: clamp(2rem, 8vh, 6rem) 2rem;
}


/* HOME: the sentence */
.home .home-tagline {
  margin: 0;

  font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.025em;
  line-height: 1.7;

  max-width: 34rem;
  text-align: center;
  color: var(--sl-color-gray-1);
}

</style>

<div class="home-hero">
  <p class="home-tagline">
    Essays on awareness, systems, and the quiet mechanics of being human.
  </p>
</div>
