<script context="module">
    import About from "./about.svelte";
    import Projects from "./projects.svelte";
    export const navItems = [
        {
            page: "About",
            href: null,
            component: About,
        },
        {
            page: "Projects [WIP]",
            href: null,
            component: Projects,
        },
        {
            page: "GitHub",
            href: "https://github.com/QRiche",
            target: "_blank",
        },
        {
            page: "LinkedIn",
            href: "https://www.linkedin.com/in/quanr/",
            target: "_blank",
        },
    ];
</script>
