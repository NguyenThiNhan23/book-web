function dangnhap()
    {
        let tktest='21522405@gm.uit.edu.vn';
        let mktest=1234;
        let tk = document.getElementById("email").value;
        let mk = document.getElementById("password").value;

        if( tk==tktest && mk!=mktest)
        {
            alert("Sai mật khẩu"
                  +"\nVui lòng nhập lại!!!");
        }
        else if (tk==tktest && mk==mktest)
        {
            alert("Đăng nhập thành công");
            chuyentrang_homepage();
        }
        else
        {
            alert("Tài khoản hoặc mật khẩu không đúng"
                  +"\nVui lòng nhập lại!!!");
        }

    }
    function chuyentrang_homepage()
    {
        let go = window.open("http://127.0.0.1:5500/homepage.html");
    }

    var toggle = document.getElementById("showpassword");
    var passwordField = document.getElementById("password");

    toggle.addEventListener("change", function() {
      if (toggle.checked) {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    });

    function dangky()
    {
      let go_signup = window.open("");
    }