class Player
{
//index = 1,2,3
//name,score,distance
constructor()
{
this.name = null
this.score = 0
this.distance = 0
this.index  = null






}

//to keep a track of the count of the players from the database
getCount()
{

var playerCountRef = database.ref("playerCount")
playerCountRef.on("value",function(data){

playerCount = data.val()




})


}

//count as a variable to keep a track of number of players when we are in the game
//the below function updates the value of the playerCount in the database
updateCount(count)
{
database.ref("/").update ({
  playerCount:count
})





}
//it updates the info of the players in the database
update()
{

var playerIndex = "players/player" + this.index
database.ref(playerIndex).set({
name:this.name,
distance:this.distance,
score:this.score




})







}


//it collects the inormation of the players from the database and comes back to the game
getPlayerInfo()
{

var playerInfoRef = database.ref("playerInfo")
playerInfoRef.on("value", function(data){




allPlayers = data.val







})








}


display()
{









}
















}