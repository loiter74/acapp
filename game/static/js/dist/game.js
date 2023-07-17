class AcGameMenu{
    constructor(root){
        this.root = root;
        console.log("菜单，启动！");
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        
        this.start();
    }

    start(){
        this.add_listening_events();
    }

    add_listening_events(){
        let outer = this;
        this.$single_mode.click(function(){
            console.log("遭受到点击！");
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("多人遭受点击！");
        });
        this.$settings.click(function(){
            console.log("菜单遭受到点击！");
        });

    }

    show(){ //显示menu界面
        this.$menu.show();
    }

    hide(){ //关闭menu界面
        this.$menu.hide();
    }


}
class AcGamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $("<div>游戏中</div>");

        this.hide();
        this.root.$ac_game.append(this.$playground);
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
class AcGame{
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

