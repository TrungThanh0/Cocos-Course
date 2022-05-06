

cc.Class({
    extends: cc.Component,

    properties: {
        edbUsername: cc.EditBox,
        edbPassword: cc.EditBox,
        edbPhoneNumber: cc.EditBox,
        btnRegister: cc.Button, 
        

    },

  

    start () {
        this.btnRegister.node.on("click", this.clickRegister, this);
    },

    textDone(){
        this.edbUsername.string = this.edbUsername.string.trim();
        this.edbPassword.string = this.edbPassword.string.trim();
        this.edbPhoneNumber.string = this.edbPhoneNumber.string.trim();
    },

    clickRegister(btnRegister) {
        cc.log(btnRegister);
    },
    userEvent() {
        cc.log(this.userEvent);
        cc.sys.localStorage.setItem('user', this.edbUsername);
        cc.log(cc.sys.localStorage.getItem("user"));

    
    }


    // update (dt) {},
});