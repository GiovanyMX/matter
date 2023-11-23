const { Engine, Render, World, Bodies,} = Matter;

const engine = Matter.Engine.create();
const render = Matter.Render.create({
    element: document.body,
    engine:engine
});

render.canvas.width = 1000;
render.canvas.height = 600;

let containerLeft = Matter.Bodies.rectangle(-5, 300, 100, (render.canvas.height), { isStatic: true });

let containerRight = Matter.Bodies.rectangle((render.canvas.width -5), 300, 10, (render.canvas.height), { isStatic: true });

let containerDown = Matter.Bodies.rectangle(500, (render.canvas.height -5), (render.canvas.width), 10, { isStatic: true });

let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        render: {visible: false}
    }
});

render.mouse = mouse;

let stack = Matter.Composites.stack(200, 200, 4, 4, 0, 0, function(x,y) {
    return Matter.Bodies.rectangle(x, y, 80, 80)
});

Matter.World.add(engine.world, [containerLeft, containerRight, containerDown, mouseConstraint, stack]);

Matter.Engine.run(engine);
Matter.Render.run(render);