document.getElementById("loveForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const yourName = document.getElementById("yourName").value.trim().toLowerCase();
  const partnerName = document.getElementById("partnerName").value.trim().toLowerCase();

  if (!yourName || !partnerName) {
    alert("Please enter both names!");
    return;
  }

  const combined = yourName + partnerName;

  // 🎯 Custom forced result for "rishi" and "anisha"
  if (
    (yourName === "rishi" && partnerName === "anisha") ||
    (yourName === "anisha" && partnerName === "rishi")
  ) {
    document.getElementById("result").innerText =
      `💖 Love compatibility between Rishi and Anisha is 100%! 💍❤️`;
    return;
  }

  // 🔢 Default calculation
  let score = 0;
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }

  const lovePercent = score % 101;

  document.getElementById("result").innerText =
    `💖 Love compatibility between ${yourName} and ${partnerName} is ${lovePercent}%!`;
});
