
/*gop y*/

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi lại trang
    
    var feedback = document.getElementById("danh-gia").value;
    
    // Tạo một div mới chứa thông tin góp ý
    var feedbackItem = document.createElement("div");
    feedbackItem.innerHTML = "<p><strong>Nội dung góp ý:</strong> " + feedback + "</p>";
    
    // Đưa thông tin góp ý vào box hiển thị
    var feedbackDisplay = document.getElementById("feedbackDisplay");
    feedbackDisplay.appendChild(feedbackItem);
    
    // Xóa nội dung biểu mẫu
    document.getElementById("danhgia").value = "";
  });

  /*tim kiem*/
  function gotologin()
  {
      let go = window.open("http://127.0.0.1:5500/login_page.html")
  }

  function search()
  {   
      let abc = 'ABC Toeic';
      let bubu = 'Bubu ngăn nắp';
      let su = 'Bồi dưỡng học sinh giỏi sử';
      let caycam = 'Cây cam ngọt của tôi';
      let hoi = 'Chú thuật hồi chiến';
      let truongthanh = 'Chưa kịp lớn đã phải trưởng thành';
      let gato = 'Gà Tơ đi học';
      let fire = "Fire force";
      let muahe = "Mùa hè không tên";
      let nguvan = "Ngữ văn 8";
      let sotay = "Sổ tay kiến thức toán";
      let tienghan = "Tiếng Hàn";
      let tiengnhat= "Tiếng Nhật cho mọi người";
      let toan = "Toán 11";
      let hsk = "Giáo trình HSK 5";
      let nhagiakim = "Nhà giả kim";
      let key = document.getElementById('timkiem').value;
      if (key == abc)
      {
          let go = window.open("http://127.0.0.1:5500/ABC-toeic.html");
      }
      else if (key == bubu)
      {
          let go = window.open("http://127.0.0.1:5500/bubu-ngan-nap.html");
      }
      else if (key == su)
      {
          let go = window.open("http://127.0.0.1:5500/boi-duong-hsg-su.html");
      }
      else if (key == caycam )
      {
          let go = window.open("http://127.0.0.1:5500/cay-cam-ngot-cua-toi.html");
      }
      else if (key == hoi )
      {
          let go = window.open("http://127.0.0.1:5500/chu-thuat-hoi-chien.html");
      }
      else if (key == truongthanh)
      {
          let go = window.open("http://127.0.0.1:5500/chua-kip-lon-da-truong-thanh.html");
      }
      else if (key == gato)
      {
          let go = window.open("http://127.0.0.1:5500/ga-to-di-hoc.html");
      }
      else if (key == fire)
      {
          let go = window.open("http://127.0.0.1:5500/fire%20force.html");
      }
      else if (key == muahe)
      {
          let go = window.open("http://127.0.0.1:5500/mua-he-khong-ten.html");
      }
      else if (key == nguvan)
      {
          let go = window.open("http://127.0.0.1:5500/ngu-van-8.html");
      }
      else if (key == sotay)
      {
          let go = window.open("http://127.0.0.1:5500/so-tay-kien-thuc-toan.html");
      }
      else if (key == tienghan)
      {
          let go = window.open("http://127.0.0.1:5500/tieng-han.html");
      }
      else if (key == tiengnhat)
      {
          let go = window.open("http://127.0.0.1:5500/tieng-nhat-cho-moi-nguoi.html");
      }
      else if (key == toan)
      {
          let go = window.open("http://127.0.0.1:5500/toan-11.html");
      }
      else if (key == hsk)
      {
          let go = window.open("http://127.0.0.1:5500/hsk5.html");
      }
      else if (key == nhagiakim)
      {
          let go = window.open("http://127.0.0.1:5500/nha-gia-kim.html");
      }
      else
      {
          alert("Không tìm thấy");
      }
  }

  function trave()
  {
    console.log(quantityInput);
  }