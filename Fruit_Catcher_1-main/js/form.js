   class Form
{

    constructor()
    {
        this.input = createInput("name")
        this.button = createButton("PLAY")
        this.reset = createButton("reset")
        this.title = createElement("h1")
        this.greeting = createElement("h2")
        

    }


    hide()

    {

        this.input.hide()
        this.button.hide()  
        this.title.hide()
        this.greeting.hide()

    }




    display()
    {

        this.title.html("FRUITCATCHER")
        this.title.position(350,50)
        this.title.style("font-size","70px")
        this.title.style("color","lightblue")
        this.input.position(550,400)
        this.input.style("width","200px")
        this.input.style("height","20px")
        this.input.style("background","lightpink")
        this.button.position(560,500)
        this.button.style("width","200px")
        this.button.style("height","40px")
        this.button.style("background","lightpink")
        this.reset.position(900,660)
        this.reset.style("width","100px")
        this.reset.style("heigth","30px")
        this.reset.style("background","lightpink")
        //creating an arrow function()=>{}
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.greeting.html("hello"+"names")
        this.greeting.position(400,250)
        this.greeting.style("color","white")
        this.greeting.style("font-size","100px")
        player.name = this.input.value()
        playerCount = playerCount + 1 
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        
        })
        
        this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
        var playerInfoRef = database.ref("players")
        playerInfoRef.remove





        })







    }



}