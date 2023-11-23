const { Engine, Render, World, Bodies,} = Matter;

const engine = Matter.Engine.create();
const render = Matter.Render.create({
    element: document.body,
    engine:engine,
    options: {
        wireframes: false
    }
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

let md = Matter.Composites.stack((render.canvas.width / 2 - 240), (render.canvas.height), 24, 2, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let ml = Matter.Composites.stack((render.canvas.width / 2 - 240), (render.canvas.height -220), 2, 9, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let mr = Matter.Composites.stack((render.canvas.width / 2 + 200), (render.canvas.height -220), 2, 9, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let l1 = Matter.Composites.stack ((render.canvas.width / 2 - 200), (render.canvas.height -70), 3, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let l2 = Matter.Composites.stack ((render.canvas.width / 2 - 200), (render.canvas.height - 120), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b1 = Matter.Bodies.rectangle ((render.canvas.width / 2 -130), (render.canvas.height - 70), 20, 20, {
    render: {
        fillStyle: 'white'
    }
});

let b2 = Matter.Composites.stack ((render.canvas.width / 2 - 180), (render.canvas.height - 200), 3, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let o1 = Matter.Composites.stack ((render.canvas.width / 2 - 120), (render.canvas.height -70), 3, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let o2 = Matter.Composites.stack ((render.canvas.width / 2 - 120), (render.canvas.height - 100), 1, 5, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b3 = Matter.Composites.stack ((render.canvas.width / 2 - 100), (render.canvas.height - 160), 1, 5, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let o3 = Matter.Composites.stack ((render.canvas.width / 2 - 80), (render.canvas.height - 160), 1, 5, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let o4 = Matter.Composites.stack ((render.canvas.width / 2 - 120), (render.canvas.height -190), 3, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b4 = Matter.Composites.stack ((render.canvas.width / 2 - 60), (render.canvas.height -70), 2, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let b5 = Matter.Composites.stack ((render.canvas.width / 2 - 60), (render.canvas.height - 180), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let v1 = Matter.Composites.stack ((render.canvas.width / 2 - 40), (render.canvas.height - 180), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let v2 = Matter.Composites.stack ((render.canvas.width / 2 - 20), (render.canvas.height - 60), 1, 2, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b6 = Matter.Composites.stack ((render.canvas.width / 2 - 20), (render.canvas.height - 150), 1, 5, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let b7 = Matter.Composites.stack ((render.canvas.width / 2 ), (render.canvas.height -70), 2, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let v3 = Matter.Composites.stack ((render.canvas.width / 2), (render.canvas.height - 180), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b8 = Matter.Composites.stack ((render.canvas.width / 2 + 20), (render.canvas.height - 180), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let e1 = Matter.Composites.stack ((render.canvas.width / 2 + 40), (render.canvas.height - 180), 1, 7, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let e2 = Matter.Composites.stack ((render.canvas.width / 2 + 60), (render.canvas.height -70), 2, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b9 = Matter.Composites.stack ((render.canvas.width / 2 + 60), (render.canvas.height -110), 2, 2, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let e3 = Matter.Composites.stack ((render.canvas.width / 2 + 60), (render.canvas.height -130), 2, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b10 = Matter.Composites.stack ((render.canvas.width / 2 + 60), (render.canvas.height -170), 2, 2, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let e4 = Matter.Composites.stack ((render.canvas.width / 2 + 60), (render.canvas.height -190), 2, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b11 = Matter.Composites.stack ((render.canvas.width / 2 + 100), (render.canvas.height -170), 2, 7, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let u1 = Matter.Composites.stack ((render.canvas.width / 2 + 140), (render.canvas.height -50), 3, 1, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let u2 = Matter.Composites.stack ((render.canvas.width / 2 + 140), (render.canvas.height -160), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let b12 = Matter.Composites.stack ((render.canvas.width / 2 + 160), (render.canvas.height -160), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

let u3 = Matter.Composites.stack ((render.canvas.width / 2 + 180), (render.canvas.height -160), 1, 6, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'red'
        }
    })
});

let mup = Matter.Composites.stack((render.canvas.width / 2 - 200), (render.canvas.height -220), 20, 2, 0, 0, function(x, y) {
    return Matter.Bodies.rectangle(x, y, 20, 20, {
        render: {
            fillStyle: 'white'
        }
    })
});

/**
let t1 = Matter.Bodies.rectangle((render.canvas.width / 2 -10), (render.canvas.height), 20, 20, {
    render: {
        fillStyle: 'red'
    }
});

let stack = Matter.Composites.stack((render.canvas.width / 2 - 80), 200, 8, 24, 0, 0, function(x,y) {
    return Matter.Bodies.rectangle(x, y, 20, 20 )
});
*/

Matter.World.add(engine.world, [
    containerLeft,
    containerRight,
    containerDown,
    mouseConstraint,
    md,
    ml,
    mr,
    l1,
    l2,
    b1,
    b2,
    o1,
    o2,
    b3,
    o3,
    o4,
    b4,
    b5,
    v1,
    v2,
    b6,
    b7,
    v3,
    b8,
    e1,
    e2,
    b9,
    e3,
    b10,
    e4,
    b11,
    u1,
    u2,
    b12,
    u3,
    mup
]);

Matter.Engine.run(engine);
Matter.Render.run(render);