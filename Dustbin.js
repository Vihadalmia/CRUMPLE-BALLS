class Dustbin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y, width, height,options );
    }
    display(){
        fill("blue");
        rect(this.body,position.x,this.body.position.y,this.body.width,this.body.height);
    }
}