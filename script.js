let app;
let player;

let keys = {};

// qekjo krijon katrorin e zi
window.onload = function(){
    app = new PIXI.Application({
        width:800,
        height:600,
        backgroundcolor:0xAAAAAA
    });

    //qekjo e vendos katrorin e zi ne body
    document.body.appendChild(app.view);

    // qekjo krijon nje texture te fotos ku e bojm store me nje variabel
    let texture = PIXI.Texture.from("red.png");

    //na vyn me kriju nje characater (sprite) si ne scratch
    player = new PIXI.Sprite(texture);


    //qet ne mes te faqes sprite qe e kemi krijuar
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height /2;

    //e vendos sprite ne katrorin e zi
    app.stage.addChild(player);


    //qetu i bojm funskionet for keyboard movements

    //ana e majt brenda kllapave eshte eventi qe do te ndodhe "keysdown"
    //ana e djath brenda kllapave eshte funksioni qe ka mu bo run
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);
    

    function keysDown(e){
        console.log(e.keyCode);
        keys[e.keyCode] = true;
    }

    function keysUp(e){
        keys[e.keyCode] = false;
    }
    app.ticker.add(gameLoop);
}
    function gameLoop (){
        if (keys["38"]){
            player.y -= 5;
        }
        if(keys["40"]){
            player.y += 5;
        }
        if(keys["37"]){
            player.x -= 5;
        }
        if(keys["39"]){
            player.x += 5;
        }

    }


