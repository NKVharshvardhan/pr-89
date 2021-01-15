canvas=new fabric.Canvas("mycanvas");

player_x=10;
player_y=10;

block_image_height=30;
block_image_width=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set(
             {
                  top:player_y, left:player_x 
                });
         canvas.add(player_object); 
    });


}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
{
    block_image_object = Img;
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set(
             {
                  top:player_y, left:player_x 
                });
         canvas.add(block_image_object); 
    });
}


if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a");
}

if(keypressed== '66')
{
    new_image('hulk_face.png');
    console.log("b");
}

if(keypressed== '67')
{
    new_image('hulk_left_hand.png');
    console.log("c");
}

if(keypressed== '69')
{
    new_image('hulk_legs');
    console.log("e");
}

if(keypressed== '70')
{
    new_image('hulk_right_hand');
    console.log("f");
}

if(keypressed== '71')
{
    new_image('hulkd_body');
    console.log("g");
}

if(keypressed== '72')
{
    new_image('ironman_face');
    console.log("h");
}

if(keypressed== '73')
{
    new_image('ironman_left_hand');
    console.log("i");
}

if(keypressed== '74')
{
    new_image('ironman_legs');
    console.log("j");
}

if(keypressed== '75')
{
    new_image('ironman_right_hand');
    console.log("k");
}

if(keypressed== '76')
{
    new_image('spiderman_body');
    console.log("l");
}

if(keypressed== '77')
{
    new_image('spiderman_face');
    console.log("m");
}

if(keypressed== '78')
{
    new_image('spiderman_left_hand');
    console.log("n");
}

if(keypressed== '79')
{
    new_image('spiderman_legs');
    console.log("o");
{

    if(keypressed== '80')

{ 
      new_image('spiderman_right_hand');
    console.log("p");
}

if(keypressed== '89')
{ 
      new_image('thor_left_hand');
    console.log("y");
}
if(keypressed== '90')
{ 
      new_image('thor_face');
    console.log("z");
}
if(keypressed== '88')
{ 
      new_image('thor_right_hand');
    console.log("x");
}



if(keypressed == '38')
{
up();
console.log("up");
}

if(keypressed == '40')
{
up();
console.log("down");
}

if(keypressed == '37')
{
up();
console.log("left");
}

if(keypressed == '39')
{
up();
console.log("right");
}

function up() 

{
    if(player_y >=0)

     { 
         player_y = player_y - block_image_height;
         console.log("block image height = " + block_image_height); 
         console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
          canvas.remove(player_object); player_update();
         } 
        }

        

        function down() 

{
    if(player_y <=500)

     { 
         player_y = player_y + block_image_height;
         console.log("block image height = " + block_image_height); 
         console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
          canvas.remove(player_object); player_update();
         } 
        }


        function left() 
        {
             if(player_x >0) 
             { 
                 player_x = player_x - block_image_width;
                  console.log("block image width = " + block_image_width);
                   console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                   canvas.remove(player_object); player_update();
                 }
                 }




                 function right() 
                 {
                      if(player_x <=850) 
                      { 
                          player_x = player_x + block_image_width;
                           console.log("block image width = " + block_image_width);
                            console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                            canvas.remove(player_object); player_update();
                          }
                          }
