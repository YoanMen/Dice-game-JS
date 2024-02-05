const ruleModal = `
                  <h2 class="modal__title">Rules</h2>
                  <div class="modal__rules">
                    <p>The game consists of 2 players on a single screen.
                      Each player has a temporary score (CURRENT) and an overall score (GLOBAL).
                      In each turn, the player's CURRENT is initialized to 0, and they can roll a die as many times as they want. The
                      result of each roll is added to the CURRENT.
                      During their turn, the player can decide at any moment to:</p>
                    <ul class="rules__list">
                      <li>Click on the "Hold" option, which transfers the points from the ROUND to the GLOBAL. It then becomes the
                        other player's turn.</li>
                      <li>Roll the die. If they get a 1, their ROUND score is lost, and their turn ends.
                        The first player to reach 100 points in the global score wins the game.</li>
                    </ul>
                  </div>
                  <button class="modal__btn" onclick="closeModal()">Close</button>
                  `;

const modal = document.getElementById("modal");

showRule();

function showRule() {
  modal.innerHTML = ruleModal;
  modal.showModal();
}

function showWin(number) {
  const winModal = `
  <h2 class="modal__title--win">PLAYER ${number} WIN</h2>
  <button class="modal__btn" onclick="closeModal()">Close</button>
  `;

  modal.innerHTML = winModal;
  modal.showModal();
}

function closeModal() {
  modal.close();
}
