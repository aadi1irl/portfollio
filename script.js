
lucide.createIcons();

document.getElementById("year").textContent = new Date().getFullYear();

async function loadStats() {
    const status = document.getElementById("stats-status");

    try {
        const response = await fetch("/api/analytics");

        if (!response.ok) throw new Error("Analytics unavailable");

        const data = await response.json();

        document.getElementById("subscribers").textContent =
            Number(data.subscribers).toLocaleString();

        document.getElementById("followers").textContent =
            Number(data.followers).toLocaleString();

        document.getElementById("audience").textContent =
            (Number(data.subscribers) + Number(data.followers)).toLocaleString();

        status.textContent = "Analytics updated from backend.";
    } catch (error) {
        status.textContent =
            "Showing saved audience snapshot. Live analytics unavailable.";
    }
}

loadStats();
