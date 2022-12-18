<script>
    const navItems = [
        {
            label: "About",
            href: "#",
        },
        {
            label: "Projects [WIP]",
            href: "",
        },
        {
            label: "GitHub",
            href: "https://github.com/QRiche",
            target: "_blank",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/quanr/",
            target: "_blank",
        },
    ];
</script>

<ul class="flex flex-wrap justify-center items-center text-center my-6 text-lg">
    {#each navItems as item}
        <li
            class="mx-2 list-none hover:text-gray-500 hover:underline underline-offset-2"
        >
            <a href={item.href} target={item.target}>{item.label}</a>
        </li>
    {/each}
</ul>
