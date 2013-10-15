FRUIT_BEARING_AGE=5;
MAX_AGE = 10;
function createTree(){
   this.tree = {
   isAlive: true,
    age: 0,
    height: 0,
    orangeCount:0,
    oranges : [],
    grow : function(){
     
      
      if(this.age>=MAX_AGE){
        this.die();
        return;
      }
       this.age +=1;
      if(this.age>=FRUIT_BEARING_AGE){
        this.bearFruit();
      }
      else{
        this.height+=10;
      }
    },
    bearFruit:function(){
      for(var i=1; i< Math.random()*10+1; ++i){
        this.oranges.push(createOrange());
      }
      this.orangeCount=this.oranges.length;
    },
    dropOrange : function(){
      if (this.orangeCount > 0 ){
        this.orangeCount -=1;
        return this.oranges.pop();
      }
      
    },
    die: function(){
      this.orangeCount=0;
      this.oranges=[];
      this.isAlive=false;
    }
  };
  return this.tree;
}

function createOrange(){
  var orange = {
    diameter: Math.random()*6+1
  };
  return orange;
}

