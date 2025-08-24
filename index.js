document.addEventListener("DOMContentLoaded", function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl =>
        new bootstrap.Popover(popoverTriggerEl)
    );
});

function handleSearch(event) {
    event.preventDefault();
    const input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (input.includes("nursing")) {
        window.location.href = "Nursing.html";
    } else if (input.includes("occasion")) {
        window.location.href = "occasion.html";
    } else if (input.includes("active")) {
        window.location.href = "active.html";
    }
    else if (input.includes("pregnant")) {
        window.location.href = "Nursing.html";
    }
    else {
        alert("Sorry, no results found for: " + input);
    }
}