function seeRank() {
  const xpLevel = document.getElementById("xp").value;
  let rank = "";
  const setRank = document.getElementById("ranking");

  if (isNaN(xpLevel) || document.getElementById("xp").value == "") {
    alert("insira um número!");
  } else {
    if (xpLevel < 1000) {
      rank = "ferro";
    } else if (xpLevel >= 1001 && xpLevel <= 2000) {
      rank = "bronze";
    } else if (xpLevel >= 2001 && xpLevel <= 5000) {
      rank = "prata";
    } else if (xpLevel >= 5001 && xpLevel <= 7000) {
      rank = "ouro";
    } else if (xpLevel >= 7001 && xpLevel <= 9000) {
      rank = "platina";
    } else if (xpLevel >= 9001 && xpLevel <= 10000) {
      rank = "imortal";
    } else if (xpLevel >= 10001) {
      rank = "radiante";
    }

    switch (rank) {
      case "ferro":
        setRank.innerText = "Ferro";
        setRank.style.color = "#555754"
        break;
      case "bronze":
        setRank.innerText = "Bronze";
        setRank.style.color = "#6c4200"
        break;
      case "prata":
        setRank.innerText = "Prata";
        setRank.style.color = "#b9bebd"
        break;

      case "ouro":
        setRank.innerText = "Ouro";
        setRank.style.color = "#f4d00f"
        break;

      case "platina":
        setRank.innerText = "Platina";
        setRank.style.color = "#08aebc"
        break;

      case "imortal":
        setRank.innerText = "Imortal";
        setRank.style.color = "#cb356c"
        break;

      case "radiante":
        setRank.innerText = "Radiante";
        setRank.style.color = "#eee37a"
        break;
      default:
        alert("Insira um rank válido");
    }
  }

  document.getElementById("xp").value = "";
}
