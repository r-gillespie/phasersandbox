window.onload = function () {
                
                // Generate new game instance
                var game = new Phaser.Game(1000, 700, Phaser.AUTO, '', { 
                    preload: preload, create: create, update: update });
 
            
                function preload() {

                    // load graphics
                    game.load.image('tile', 'images/tile.png');
                    game.load.image('tiledown', 'images/tiledown.png');
                    game.load.image('hudBG', 'images/hudBG.png');
                    game.load.image('bomb', 'images/bomb.png');
                    game.load.image('comb', 'images/comb.png');
                    game.load.image('num0', 'images/num0.png');
                    game.load.image('num1', 'images/num1.png');
                    game.load.image('num2', 'images/num2.png');
                    game.load.image('num3', 'images/num3.png');
                    game.load.image('num4', 'images/num4.png');
                    game.load.image('num5', 'images/num5.png');
                    game.load.image('num6', 'images/num6.png');
                    game.load.image('num7', 'images/num7.png');
                    game.load.image('num8', 'images/num8.png');
                    game.load.image('num9', 'images/num9.png');
                    game.load.image('gameover', 'images/gameover.png');
                    game.load.image('winscreen', 'images/winscreen.png');
                    game.load.image('win_blank', 'images/win_blank.png');

                }

                // initialize variables for global dimensions and map layers
                var tileSize = 50;
                var bombDensity = 2;
                
                var tilew = game.width / tileSize;
                var tileh = (game.height - 100) / tileSize;
                
                var bg;
                var bombs;
                var nums;
                var tiles;
                 
                var bgLayer;
                var bombLayer;
                var numLayer;
                var tileLayer;


            
                //  Create a layer of tiles
                function createLayer(){
                    var layer = [];
                    for ( var x = 0; x < tilew; x++) {
                        layer[x] = new Array(tileh);

                        for ( var y = 0; y < tileh; y++) {
                            layer[x][y] = null;
                        }
                    }
                    return layer;
                }
            
                function create() {
                    
                    hud = game.add.group();
                    bombs = game.add.group();
                    nums = game.add.group();
                    tiles = game.add.group();
                    
                    bombLayer = createLayer();
                    numLayer = createLayer();
                    tileLayer = createLayer();
                    
                    // Generate random bombs
                    for ( var x = 0; x < tilew; x++) {
                        for ( var y = 0; y < tileh; y++) {
                            var drawBomb = (Math.floor(Math.random(10) * 10));
                            console.log(drawBomb);
                            if ( drawBomb < bombDensity ) {
                                bombLayer[x][y] = 'bomb';
                            } else {
                                bombLayer[x][y] = false;
                            }
                        }
                    }
                    

                }
                
                // Create functions for update cycle
                function drawLayer(layerName, groupName, key){
                    for (var x = 0; x < tilew; x++) {
                         for (var y = 0; y < tileh; y++) {
                             if (layerName[x][y] == key) {
                                groupName.create(x * tileSize, y * tileSize, key);
                             }
                         }
                    }
                }

                    
            
            
                function update() {
                    drawLayer(bombLayer, bombs, 'bomb');
//                    drawLayer(tileLayer, 'tile');
                    
                    // Draw Hud
                    hud.create(0, game.height - 100, 'hudBG');
                    
                    console.log('bomblayer: ' + bombLayer);
                    console.log('the bombs are: ' + bombs.children); 
                    console.log('you did it');
                }
            };
