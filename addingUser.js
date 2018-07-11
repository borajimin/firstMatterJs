window.addEventListener('load', function(){

  var canvas = document.getElementById('world');

  var engine = Matter.Engine.create();
  var world = engine.world;
  var render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: 1800,
      height: 950,
      wireframes: false,
      showAngleIndicator: false
    }
  });

  Matter.Render.run(render);

  var runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  Matter.World.add(world, [
    Matter.Bodies.rectangle(900, 0, 1800, 50, { isStatic: true }),
    Matter.Bodies.rectangle(900, 950, 1800, 50, { isStatic: true }),
    Matter.Bodies.rectangle(1800, 600, 50, 1200, { isStatic: true }),
    Matter.Bodies.rectangle(0, 600, 50, 1200, { isStatic: true })
  ]);
  
  var bodyOptions = {
    frictionAir: 0,
    friction: 0.0001,
    restitution: 0.8
  };

});
