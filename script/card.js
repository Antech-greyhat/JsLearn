let count = 0;

function cardCounter(card) {
  // 1. Update the count based on the card value
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }
  // No else needed for 7, 8, 9 because the count stays the same

  // 2. Determine the player's decision
  let decision = count > 0 ? "Bet" : "Hold";

  // 3. Return the count and decision separated by a space
  return count + " " + decision;
}