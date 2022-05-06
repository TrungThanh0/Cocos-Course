
cc.Class({
    extends: cc.Component,

    properties: {
        Form_Show:{
            default : null,
            type : cc.Component.EventHandler,
        },    
    },
    SHOWWW(){

        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
        .to(0.5,{scale:1,opacity: 255 },{easing: "quartInOut"})
        .start();
    },
    HIDEEEEEEE(){
        cc.tween(this.node)
        .to(0.5,{scale: 0.2, opacity: 0 },{easing: "quartInOut"})
        .call(()=> {this.node.active = false; })
        .start();

    },


    

    

    
});
