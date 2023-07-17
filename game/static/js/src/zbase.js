export class AcGame{
    constructor(id){
     this.id = id;
     this.$ac_game = $('#' + id);
     this.menu = new AcGameMenu(this);
     this.playground = new AcGamePlayground(this);
     console.log("acgame 启动！");

     this.start();
    }
    start(){
    }
}

