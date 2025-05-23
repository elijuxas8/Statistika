const data = {
  "Lukzis": {
    time_spent: { build: "3h 10m", nether: "1h 5m" },
    helped_players: 5
  },
  "gustas_g": {
    time_spent: { spawn: "2h 40m", build: "3h 30m" },
    helped_players: 6
  },
  "alvydas": {
    time_spent: { creative: "4h 0m", survival: "1h 30m" },
    helped_players: 4
  },
  "ignelixas": {
    time_spent: { survival: "2h 15m", build: "2h 45m" },
    helped_players: 8
  }
};

const adminButtons = document.getElementById("adminButtons");
const statsOutput = document.getElementById("statsOutput");
const adminName = document.getElementById("adminName");

Object.keys(data).forEach(name => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = name;
  btn.onclick = () => showStats(name);
  li.appendChild(btn);
  adminButtons.appendChild(li);
});

function showStats(name) {
  adminName.textContent = `Statistika: ${name}`;
  const admin = data[name];
  statsOutput.innerHTML = `
    <h3>Laikas pasauliuose</h3>
    <ul>
      ${Object.entries(admin.time_spent).map(([world, time]) => `<li>${world}: ${time}</li>`).join('')}
    </ul>
    <p><strong>Padėti žaidėjai:</strong> ${admin.helped_players}</p>
  `;
}
