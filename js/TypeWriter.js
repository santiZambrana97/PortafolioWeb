let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('San Martín,Mendoza,Argentina')
  .pauseFor(400)
  .deleteChars(20)
  .start();