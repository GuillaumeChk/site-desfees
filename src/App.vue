<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
	<!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

     <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Acceuil</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>

  </header> -->

	<q-layout view="hHh lpr fff">
		<NavBar />

		<main>
			<q-page-container>
				<router-view />
			</q-page-container>
		</main>

		<q-footer class="brand">
			<q-toolbar>
				<q-toolbar-title>
					<q-avatar>
						<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
					</q-avatar>
					<div>Title</div>
				</q-toolbar-title>
			</q-toolbar>
		</q-footer>
	</q-layout>

	<!-- <RouterView /> -->
</template>

<style>
.brand {
	/* color: white !important; */
	background: #f8961e !important;
}
.brand-2 {
	/* color: white !important; */
	background: #90be6d !important;
}
.brand-3 {
	/* color: white !important; */
	background: #c9e3ac !important;
}
.brand-4 {
	color: white !important;
	background: #faad4f !important;
}
.text-brand {
	color: #f8961e;
}
.text-brand-2 {
	color: #90be6d;
}
.text-brand-3 {
	color: #c9e3ac;
}
.cursive {
	font-family: "Mea Culpa", cursive;
}
.wrapper {
	max-width: 1300px;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}

@media (min-width: 1024px) {
	.brand {
		/* color: white !important; */
		background: #f8961e !important;
	}
	.brand-2 {
		/* color: white !important; */
		background: #90be6d !important;
	}
	.brand-3 {
		/* color: white !important; */
		background: #c9e3ac !important;
	}
	.text-brand {
		color: #f8961e;
	}
	.text-brand-2 {
		color: #90be6d;
	}
	.text-brand-3 {
		color: #c9e3ac;
	}
	.brand-4 {
		color: white !important;
		background: #faad4f !important;
	}
	.cursive {
		font-family: "Mea Culpa", cursive;
	}
	.wrapper {
		max-width: 1300px;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		width: calc(100% - 60px);
	}
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
