// Initialize monster health
let monster1Health = 10;
let monster2Health = 10;

// Get HTML elements
const monster1HealthText = document.getElementById('monster1-health');
const monster2HealthText = document.getElementById('monster2-health');
const attackMonster1Button = document.getElementById('attack-monster1');
const attackMonster2Button = document.getElementById('attack-monster2');

// Update health text displays
function updateHealthDisplays() {
    monster1HealthText.textContent = `Health: ${monster1Health}`;
    monster2HealthText.textContent = `Health: ${monster2Health}`;
}

// Attack functions
function attackMonster2() {
    monster2Health -= 2;
    if (monster2Health <= 0) {
        monster2Health = 0;
        alert('Monster 2 has been defeated!');
        // Add game over logic here if desired
    }
    updateHealthDisplays();
}

function attackMonster1() {
    monster1Health -= 2;
    if (monster1Health <= 0) {
        monster1Health = 0;
        alert('Monster 1 has been defeated!');
        // Add game over logic here if desired
    }
    updateHealthDisplays();
}

// Add event listeners to attack buttons
attackMonster1Button.addEventListener('click', attackMonster2);
attackMonster2Button.addEventListener('click', attackMonster1);

// Initialize health displays
updateHealthDisplays();