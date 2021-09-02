class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.title=createElement("h1");
    }   
        display(){
            this.title.html("Iron Man Dash");
            this.title.position(displayWidth/2-50,0);
            this.input.position(displayWidth/2-40,displayHeight/2-80);
            this.button.position(displayWidth/2+30,displayHeight/2);
            this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();
            })
        }
    }