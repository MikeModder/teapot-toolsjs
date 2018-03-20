let TeapotTools = require('../index');

let tt = new TeapotTools('firefox');

console.log('Pouring');
tt.pour()
    .then(() => {
        console.log('Rotating');
        tt.rotate(180)
            .then(() => {
                console.log('Unpouring');
                tt.unpour();
            });
    })
    .catch(e => console.error(e) );