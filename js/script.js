$(document).ready(function () {
  $("#book-btn").click(function () {
    var table = document.getElementById("My-table"); // lấy bảng với ID là "My-table"
    var lastRow = table.rows[table.rows.length - 1]; // lấy dòng cuối cùng của bảng
    var STT = lastRow.cells[0].textContent; // lấy giá trị của cột đầu tiên của dòng cuối cùng
    var id = document.getElementById("MaBenhNhan").value;
    var password = document.getElementById("MatKhau").value;
    var date = document.getElementById("NgayKham").value;
    var numService = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    var specialist = document.getElementById("ChuyenKhoa").value;
    if (validId(id) && validPass(password) && validDate(date)) {
      var newPatient =
        "<tr><td>" +
        getSTT(STT) +
        "</td><td>" +
        id +
        "</td><td>" +
        password +
        "</td><td>" +
        date +
        "</td><td>" +
        numService.length * 500000 +
        "</td><td>" +
        specialist +
        "</td></tr>";
      document.querySelector(".table").innerHTML += newPatient;
    }
  });

  $("#modal").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");
  });

  function getSTT(STT) {
    let stt = STT;
    stt = Number(stt)
    stt = stt + 1;
    return stt;
  }

  function validId(id) {
    if (/^BN-\d{5}$/.test(id)) {
      return true;
    }
    return false;
  }

  function validPass(password) {
    if (/^.{6,}$/.test(password)) {
      return true;
    }
    return false;
  }

  function validDate(date) {
    if (date > new Date().toISOString().substring(0, 10)) {
      return true;
    }
    return false;
  }
});
