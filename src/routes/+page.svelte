<script>
    import { navItems } from "./navbar.svelte";
    let selected = navItems[0];
    let intSelected = 0;
    function changeComponent(event) {
        intSelected = event.target.id;
        selected = navItems[intSelected];
    }
</script>

<br />
<ul class="flex flex-wrap justify-center items-center text-center my-6 text-lg">
    {#each navItems as item, i}
        <li
            class="mx-2 list-none hover:text-gray-500 hover:underline underline-offset-2 cursor-pointer"
        >
            {#if item.href == null}
                <a
                    id={String(i)}
                    on:click={changeComponent}
                    on:keydown={changeComponent}>{item.page}</a
                >
            {/if}
            {#if item.href != null}
                <a id={String(i)} href={item.href} target={item.target}
                    >{item.page}</a
                >
            {/if}
        </li>
    {/each}
</ul>
<svelte:component this={selected.component} />
