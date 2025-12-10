document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Page fade-in on load
    body.classList.add("fade-in");

    // Animate internal page transitions
    document.querySelectorAll("a").forEach(link => {
        const url = link.getAttribute("href");

        // Animate only .html links
        if (url && url.endsWith(".html")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                body.classList.remove("fade-in");
                body.classList.add("fade-out");

                // Delay before navigating (match CSS animation speed)
                setTimeout(() => {
                    window.location.href = url;
                }, 300);
            });
        }
    });
});
