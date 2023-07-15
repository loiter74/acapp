class AcGame{
    constructor(id){
     this.id = id;
     this.$ac_game = $('#' + id);
     this.menu = new AcGameMenu(this);
     console.log("acgame 启动！");
    }
}

