const BASE_URL = "http://localhost:9090/api";

function loadCauseList() {
    hideSearch();
    fetch(`${BASE_URL}/cause-list`)
        .then(res => res.json())
        .then(data => showResult(formatList("Cause List", data)));
}

function loadDailyOrders() {
    hideSearch();
    fetch(`${BASE_URL}/daily-orders`)
        .then(res => res.json())
        .then(data => showResult(formatList("Daily Orders", data)));
}

function loadJudgments() {
    hideSearch();
    fetch(`${BASE_URL}/judgments`)
        .then(res => res.json())
        .then(data => showResult(formatList("Judgments", data)));
}

function loadCaseStatus() {
    document.getElementById("searchBox").classList.remove("hidden");
    document.getElementById("result").innerHTML = "";
}

function searchCase() {
    const caseNo = document.getElementById("caseInput").value;

    fetch(`${BASE_URL}/cases/search?number=${caseNo}`)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
            if (!data) {
                showResult("<b>No case found!</b>");
                return;
            }
            showResult(formatCase(data));
        });
}

function formatList(title, arr) {
    let html = `<h2>${title}</h2><ul>`;
    arr.forEach(item => html += `<li>${item}</li>`);
    html += "</ul>";
    return html;
}

function formatCase(c) {
    return `
        <h2>Case Details</h2>
        <p><b>Case Number:</b> ${c.caseNumber}</p>
        <p><b>Petitioner:</b> ${c.petitioner}</p>
        <p><b>Respondent:</b> ${c.respondent}</p>
        <p><b>Status:</b> ${c.status}</p>
        <p><b>Next Hearing:</b> ${c.nextHearingDate ?? 'N/A'}</p>
        <p><b>Court Number:</b> ${c.courtNumber}</p>
        <p><b>Bench:</b> ${c.bench}</p>
    `;
}

function showResult(html) {
    document.getElementById("result").innerHTML = html;
}

function hideSearch() {
    document.getElementById("searchBox").classList.add("hidden");
}
