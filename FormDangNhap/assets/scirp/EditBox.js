const User = cc.Class({
    id: "",
    username: "",
    password: "",
    phone: "",
    ctor () {
        this.username = "";
        this.password = "";
        this.phone = "";
    }
});

const local = JSON.parse(cc.sys.localStorage.getItem("users"));

cc.Class({
    extends: cc.Component,

    properties: {
        edbUsername: cc.EditBox,
        edbPassword: cc.EditBox,
        edbPhoneNumber: cc.EditBox,
        btnRegister: cc.Button,
        users: [],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(local != null) {
            this.users = local;
            
        }
        cc.log(local);
    },

    start() {
        this.btnRegister.node.on("click", this.clickRegister, this);
        
    },

    textDone() {
        this.edbUsername.string = this.edbUsername.string.trim();
        this.edbPassword.string = this.edbPassword.string.trim();
        this.edbPhoneNumber.string = this.edbPhoneNumber.string.trim();
    },

    clickRegister() {
        
            let u = new User();
            u.id = this.users.length + 1;
            u.username = this.edbUsername.string;
            u.password = this.edbPassword.string;
            u.phone = this.edbPhoneNumber.string;
            
            if(this.edbUsername.string != "" && this.edbPassword.string != "" && this.edbPhoneNumber.string != "") {
                this.addUserToLocalStorage(u);
                this.edbUsername.string = "";
                this.edbPassword.string = "";
                this.edbPhoneNumber.string = "";               
            }
            
            this.textDone();
    },

    addUserToLocalStorage(u) {
        this.users.push(u);
        cc.sys.localStorage.setItem("users", JSON.stringify(this.users));
    },
});
