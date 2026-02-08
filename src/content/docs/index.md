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

  /* Eliminate scrollbar entirely on Home page */
  html, body {
    overflow: hidden !important;
    height: 100dvh !important;
  }

  /* Hide footer and first content panel (hidden h1) */
  footer,
  .content-panel:first-child {
    display: none !important;
  }

  /* Strip all extra padding from content wrappers */
  .main-frame,
  .main-pane,
  .content-panel:last-child {
    padding: 0 !important;
  }
  .content-panel:last-child > .sl-container {
    max-width: none;
    padding: 0;
    margin: 0;
  }

  /* Full viewport minus header; golden ratio placement */
  .sl-markdown-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: calc(100dvh - var(--sl-nav-height, 3.5rem));
    padding-top: calc((100dvh - var(--sl-nav-height, 3.5rem)) * 0.382);
    box-sizing: border-box;
    overflow: hidden;
  }

  /* Center sentence on the full viewport, ignoring sidebar offset */
  @media (min-width: 50rem) {
    .sl-markdown-content p {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: calc(var(--sl-nav-height, 3.5rem) + (100dvh - var(--sl-nav-height, 3.5rem)) * 0.382);
    }
  }

  /* Quiet, intentional statement styling */
  .sl-markdown-content p {
    font-size: 1.2em;
    font-weight: 300;
    letter-spacing: 0.02em;
    text-align: center;
    max-width: 32rem;
    line-height: 1.6;
    color: var(--sl-color-gray-2);
  }
</style>

Essays on awareness, systems, and the quiet mechanics of being human.
