function playerMoves (variable) {
    if (keyDown("w")) {
      variable.y = variable.y - 12;
    }
  
    if (keyDown("s")) {
      variable.y = variable.y + 12;
    }
  
    if (keyDown("d")) {
      variable.x = variable.x + 12;
    }
  
    if (keyDown("a")) {
      variable.x = variable.x - 12;
    }
}