var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//create function
var fight = function () {
  // tells players the round is starting
  window.alert("Welcome to Robot Gladiators!");

  // subtract 'playerAttack' from 'enemyHealth' and update the variable in 'enemyHealth'
  enemyHealth = enemyHealth - playerAttack;

  // log a result to the console to confim it worked
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );

  // check enemy health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  // subtract 'enemyAttack' from 'playerHealth' and update the variable in 'playerHealth'
  playerHealth = playerHealth - enemyAttack;

  // log a result to the console to confirm it worked
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " nor has " +
      playerHealth +
      " health remaining."
  );

  // check players health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
};

// execute function
fight();
