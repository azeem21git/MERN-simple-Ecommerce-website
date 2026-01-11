class User{

    constructor(name ,city){
        this.name=name;
        this.city=city;
    }

    callUser(){
          console.log("name",this.name ,"from",this.city)
    }
}

const user1=new User("Azeem","Polonnaruwa")
user1.callUser()