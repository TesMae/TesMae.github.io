let userAnswers = {};

function startSession() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("formScreen").classList.remove("hidden");
}

function copyLink() {
  const linkInput = document.getElementById("partnerLink");
  linkInput.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
}

function startOver() {
  window.location.href = window.location.pathname;
}

document.getElementById("quizForm").onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  userAnswers = Object.fromEntries(formData.entries());
  const sessionData = encodeURIComponent(JSON.stringify(userAnswers));
  const encoded = btoa(unescape(sessionData));
  const link =
    window.location.href.split("?")[0] + "?partner=" + encoded;
  document.getElementById("formScreen").classList.add("hidden");
  document.getElementById("linkScreen").classList.remove("hidden");
  document.getElementById("partnerLink").value = link;
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const partnerDataEncoded = getQueryParam("partner");
if (partnerDataEncoded) {

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("partnerFormScreen").classList.remove("hidden");
  userAnswers = JSON.parse(decodeURIComponent(escape(atob(partnerDataEncoded))));
}

document.getElementById("partnerForm").onsubmit = function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const partnerAnswers = Object.fromEntries(formData.entries());
  const results = compareAnswers(userAnswers, partnerAnswers);
  document.getElementById("partnerFormScreen").classList.add("hidden");
  document.getElementById("resultsScreen").classList.remove("hidden");
  document.getElementById("results").innerHTML = results;
};

function compareAnswers(a1, a2) {
  let total = 0;
  let match = 0;
  let output = "";

  const questionLabels = {
    vacation: "Favorite vacation",
    drink: "Beverage preference",
    sleep: "Sleep habit",
  };

  for (let key in a1) {
    total++;
    const isMatch = a1[key].toLowerCase() === a2[key].toLowerCase();
    if (isMatch) match++;

    output += `<p><strong>${questionLabels[key] || key}</strong>: 
<span style="color: ${isMatch ? "#4CAF50" : "#FF6B6B"}">
  ${a1[key]} vs ${a2[key]} 
  ${isMatch ? "✅ Correct!" : "❌ Incorrect"}
</span>
    </p>`;
  }

  const percentage = Math.round((match / total) * 100);
  let emoji = "💔";
  if (percentage >= 33) emoji = "💕";
  if (percentage >= 66) emoji = "❤️";
  if (percentage === 100) emoji = "💯❤️";

  output = `<h3>${emoji} ${percentage}% of your answers were correct ${emoji}</h3>` + output;
  return output;
}