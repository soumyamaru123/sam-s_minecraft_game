var canvas = new fabric.canvas('mycanvas');

player_x=5;
player_y=255;

block_img_width=30;
block_img_height=30;

var player_object="";
var block_img_object="";

function player_update(){
    fabric.image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaletowidth(150);
        player_object.scaletoheight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img){
    fabric.image.fromURL(get_img,function(img){
        block_img_object=img;
        block_img_object.scaletowidth(block_img_width);
        block_img_object.scaletoheight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });    
}