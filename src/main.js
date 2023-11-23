const { Engine, Render, World, Bodies,} = Matter;

const engine = Matter.Engine.create();
const render = Matter.Render.create({
    element: document.body,
    engine:engine
});

render.canvas.width = 1000;
render.canvas.height = 600;

let containerLeft = Matter.Bodies.rectangle(-50, 300, 100, (render.canvas.height), { isStatic: true });

let containerRight = Matter.Bodies.rectangle((render.canvas.width +50), 300, 100, (render.canvas.height), { isStatic: true });

let containerDown = Matter.Bodies.rectangle(500, (render.canvas.height +50), (render.canvas.width + 200), 100, { isStatic: true });

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
});

render.mouse = mouse;

let stack = Matter.Composites.stack((render.canvas.width / 2 - 80), 200, 8, 24, 0, 0, function(x,y) {
    return Matter.Bodies.rectangle(x, y, 20, 20)
});

Matter.World.add(engine.world, [containerLeft, containerRight, containerDown, mouseConstraint, stack]);

Matter.Engine.run(engine);
Matter.Render.run(render);