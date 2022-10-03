<script>
  import Icon from "../lib/components/Icon.svelte";
  import '$lib/styles/global.css'

  let burger = false;
</script>

<main>
  <header>
    <a href="/">
      <h2 class="header-title">Mariana Costa</h2>
    </a>
    <nav>
      <button
        class="burger"
        type="button"
        on:click={() => (burger = !burger)}
      />
      <div class:hidden={!burger} class:visible={burger}>
        <a
          href="https://drive.google.com/file/d/1f33y3ngZj9BYLVfOG3Wvr8NcM-TEnZX2/view?usp=sharing"
          >CV</a
        >
        <a href="https://github.com/marianafcosta">GitHub</a>
        <a href="https://www.linkedin.com/in/marianafcosta/">LinkedIn</a>
        <a href="/blog">Blog</a>
      </div>
    </nav>
  </header>
  <hr />

  <slot />

  <footer>
    <p>&copy {new Date().getFullYear()} Mariana Costa</p>
    <p>|</p>
    <a href="https://github.com/marianafcosta"
      ><Icon width={24} height={24} name="github" /></a
    >
    <a href="https://www.linkedin.com/in/marianafcosta/"
      ><Icon width={24} height={24} name="linkedin" /></a
    >
  </footer>
</main>


<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    margin: 0;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav > div > a:not(:first-child) {
    margin-left: 8px;
  }
  main {
    padding: 1em;
    max-width: 800px;
    margin: auto;
  }
  footer {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  footer > * {
    font-weight: 100;
  }
  footer > :not(:first-child) {
    margin-left: 4px;
  }
  footer > a {
    display: flex;
  }
  .burger {
    background-image: url(../bars-solid.svg);
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    border: 0px;
    background-color: transparent;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 640px) {
    .hidden {
      display: none;
    }
    .visible {
      display: initial;
    }
    nav {
      position: relative;
      width: 32px;
      height: 32px;
    }
    nav > button {
      margin: 0;
    }
    nav > div {
      cursor: default;
      position: absolute;
      top: calc(40px);
      right: 0px;
      background-color: var(--bg-color);
      box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
      padding: 16px;
      display: none;
    }
    nav > div > a {
      display: block;
    }
    nav > div > a:not(:first-child) {
      margin-top: 16px;
      margin-left: 0;
    }
    .burger {
      display: initial;
    }
  }
</style>