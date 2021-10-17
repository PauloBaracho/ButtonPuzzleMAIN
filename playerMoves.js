function playerMoves (playerM) {
    if (keyDown("w")) {
      playerM.y = playerM.y - 12;
    }
  
    if (keyDown("s")) {
      playerM.y = playerM.y + 12;
    }
  
    if (keyDown("d")) {
      playerM.x = playerM.x + 12;
    }
  
    if (keyDown("a")) {
      playerM.x = playerM.x - 12;
    }
}