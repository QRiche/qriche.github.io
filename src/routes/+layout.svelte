<script>
    import "../app.css";
    import Navbar from "./navbar.svelte";
</script>

<svelte:head>
    <title>Richard Quan</title>
</svelte:head>

<header class="text-center font-semibold text-6xl">
    <h1>Richard Quan</h1>
</header>

<Navbar />

<slot />

<hr class="w-72 mx-auto bg-gray-300 my-5 h-px border-0" />
<footer class="text-sm text-center">
    <p>© Richard Quan 2022</p>
</footer>
