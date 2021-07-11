class Form{
    constructor(){
        this.name=createInput("Enter Your name")
        this.button=createButton("Submit")
    }
    display(){
        this.name.position(displayWidth/3,displayHeight/3)
        this.button.position(displayWidth/3,displayHeight/3+40)

        this.button.mousePressed(()=>{
            name=this.name.value()
            this.name.hide()
            this.button.hide()
            gamestate=1
        })
    }

}