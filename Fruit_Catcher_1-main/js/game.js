class Game
{


 constructor()
 { 











 }


   //its a function to find the current state of the gamestate in the database
   getState(){

   var gameStateRef = database.ref("gameState")
   gameStateRef.on("value",function(data){
   
    gameState = data.val()


    
   })

   }
   //update is a function to update the value of the gamesyate in the gamestate in the data base and state is a variable created by the player
   //to keep a track of the gamestate in the game
   update(state)
   {
     
    database.ref("/").update({

    gameState:state

    })





   }

    

    async start(){
     
     if(gameState == 0)
     {

     player = new Player()
     
     var playerCountRef=await database.ref("playerCount").once("value")
     
     if(playerCountRef.exists()){
      
      playerCount = playerCountRef.val()
      player.getCount()



     }
      form = new Form ()
      form.display()

     }

      player1 = createSprite(200,500)
      player2 = createSprite(800,500)
      
      player1 = addImage("player1", player_img)
      player2 = addImage("player2", player_img)
      players = [player1,player2]
    }

      play(){

     form.hide()
     Player.getPlayerInfo()

      image(bacl_img,0,0,1000,800)
      var index = 0
      var x = 100
      var y = 200
      drawSprites()
 
      for(var plr in allPlayers)
      {







      }







      }
     





        end(){
         console.log("Game Over")





        }

  
 display()
 {








 }




}