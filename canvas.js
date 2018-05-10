var canvas = document.querySelector('Canvas');
canvas.width= window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

/*c.fillStyle='rgba(255,0,0,0.5)';

c.fillRect(100,100,100,100);

c.fillStyle='rgba(0,0,255,0.5)';


c.fillRect(300,200,100,100);

c.fillStyle='rgba(255,255,0,0.5)';


c.fillRect(200,400,500,100);
*/

console.log(canvas);

//line
/*c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,100);
c.strokeStyle="#fa34fa";
c.stroke();*/

var mouse =
{
x:undefined,
y:undefined
}

var maxRadius = 40;
var minRadius =2;

var colorArray=[

'#ffaa33',
'#99ffaaa',
'#00ff00',
'#4411aa',
'#ff1100',

];


window.addEventListener('mousemove',function(event)
{
/*console.log('hello world');
*/
mouse.x = event.x;
mouse.y = event.y;
})


window.addEventListener('resize',function()
{

canvas.width= window.innerWidth;
canvas.height = window.innerHeight;

init();

});


//Arc

function Circle(x,y,dx,dy,radius)
{

this.x=x;
this.y=y;
this.dx=dx;
this.dy=dy;
this.radius=radius;
this.minRadius=radius;
this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

this.draw=function()
{

c.beginPath();
c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
c.fillStyle = this.color;
c.fill();

}

this.update = function()
{

if((this.x+this.radius>innerWidth) || (this.x-radius < 0))
this.dx=-this.dx;

if((this.y + this.radius > innerHeight)|| (this.y- radius < 0))
this.dy=-this.dy;

this.x += this.dx;
this.y += this.dy;

if((mouse.x-this.x<50)&&(mouse.x-this.x>-50) &&(mouse.y-this.y<50)&&(mouse.y-this.y>-50))
{	
  
  if(this.radius<maxRadius)
  this.radius+=1;

}
else if(this.radius>this.minRadius)
{

this.radius-=1;

}

this.draw();
}
}

var circleArray=[];

for (var i = 0; i < 800;i++) 
{
var x =Math.random()*(innerWidth-radius*2)+radius;
var y=Math.random()*(innerHeight-radius*2)+radius;
var dx =(Math.random()-0.5);
var dy =(Math.random()-0.5);
var radius =Math.random()*3 + 1;

circleArray.push(new Circle(x,y,dx,dy,radius));	
		
}

//circle.draw();

var circleArray=[];

function init()
{

circleArray=[];

for (var i = 0; i < 800;i++) 
{
var x =Math.random()*(innerWidth-radius*2)+radius;
var y=Math.random()*(innerHeight-radius*2)+radius;
var dx =(Math.random()-0.5);
var dy =(Math.random()-0.5);
var radius =Math.random()*3 + 1;

circleArray.push(new Circle(x,y,dx,dy,radius));	

}



function animate()
{
requestAnimationFrame(animate);

c.clearRect(0,0,innerWidth,innerHeight);

for(var i=0;i<circleArray.length;i++)
{

circleArray[i].update();
circleArray[i].draw();

}

	
c.beginPath();
c.arc(x,y,radius,0,Math.PI*2,false);
c.strokeStyle='blue';
c.stroke();

if((x+radius>innerWidth) || (x-radius < 0))
dx=-dx;

if((y + radius > innerHeight)|| (y- radius < 0))
dy=-dy;

x += dx;
y += dy;

}

/*for(var i=0;i<50;i++)
{
var x=Math.random()*window.innerWidth;
var y=Math.random()*window.innerHeight;
c.beginPath();
c.arc(x,y,30,0,Math.PI*2,false);
c.strokeStyle='#'+(Math.random()*0xFFFFFF<<0).toString(16);
c.stroke();

}	*/

animate();
}
