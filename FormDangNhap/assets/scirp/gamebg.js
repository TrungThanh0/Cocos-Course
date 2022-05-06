const User = cc.Class({
    id: "",
    username: "",
    password: "",
    email: "",
    ctor () {
        this.username = "";
        this.password = "";
        this.email = "";
    }
});

const local = JSON.parse(cc.sys.localStorage.getItem("users"));


cc.Class({
    extends: cc.Component,

    properties: {
        Regis_Event_Handler: {
            default: null,
            type: cc.Component.EventHandler,
        },


        demo: require("sroll_windown")


    },
    onLoad () {
        if(local != null) {
            this.users = local;
            
        }
        cc.log(local);
    },
    Show_Window() {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
            .to(0.5, { scale: 1, opacity: 255 }, { easing: "quartInOut" })
            .start();

    },
    Hide_Window() {
        cc.tween(this.node)
            .to(0.5, { scale: 0.2, opacity: 0 }, { easing: "quartInOut" })
            .call(() => { this.node.active = false; })
            .start();

    },
    RegisClick() {
        if (this.Regis_Event_Handler) {
            this.Regis_Event_Handler.emit();
        }
        this.Hide_Window();
    },
    textDone() {
        this.edbUsername.string = this.edbUsername.string.trim();
        this.edbPassword.string = this.edbPassword.string.trim();
        this.edbEmail.string = this.edbEmail.string.trim();
    },
    clickRegister() {

        let u = new User();
        u.id = this.users.length + 1;
        u.username = this.edbUsername.string;
        u.password = this.edbPassword.string;
        u.email = this.edbEmail.string;

        if (this.edbUsername.string != "" && this.edbPassword.string != "" && this.edbPhoneNumber.string != "") {
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


start() {
    this.btnRegister.node.on("click", this.clickRegister, this);
},

    
});
