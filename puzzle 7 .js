function loop (){
  while (getColor() != "red"){
    down();
  }
  right();
  right();
  while (getColor() != "red"){
    up();
  }
  right();
  right();
}

loop();
loop();
while (getColor() != "red"){
  down();
}
right();
