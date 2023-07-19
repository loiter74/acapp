class AcGamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $('<div class="ac-game-playground"></div>');

//      this.hide();
        this.root.$ac_game.append(this.$playground);
        this.height = this.$playground.height();
        this.width = this.$playground.width();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this, this.width/2, this.height/2, this.height*0.05, "white", this.height*0.2, true))


        this.start();
    }

    start(){
    }

    show(){
        this.$playground.show();
    }

    hide(){
        this.$playground.hide();
    }

}
