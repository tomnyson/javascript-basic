// // array
// // cach 1
// const mang_rong = [];
// console.log("mang_rong", mang_rong);
// // jndex: bắt đầu từ 0 - n
// const mang = [1, 2, 4, 5, 6, 7];
// console.log("mang", mang);
// // cach 2
// const mang_rong2 = new Array();
// console.log("mang_rong2", mang_rong2);
// const mang2 = new Array(1, 2, 4, 5, 6, 7);
// console.log("mang2", mang2);
// const phantu_1 = mang2[0];
// console.log("phan tu thu 1", phantu_1);
// //

// console.log("do dai cua mang", mang2.length);
// // duyệt mảng

// for (let i = 0; i < mang2.length; i++) {
//   console.log(`vị trí ${i} value: ${mang2[i]}`);
// }

// //

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits.forEach(function (value, index) {
// //   console.log(`value = ${value}, index = ${index}`);
// // });

// // thêm một phần tử
// const sinhvien = ["sinh vien a", "sinh vien b"];
// // push
// // cach 1
// // cuôi mảng
// // console.log("sinhv vien", sinhvien);
// // sinhvien.push("sinh vien 3");
// // console.log("sinhv vien", sinhvien);
// // // đầu mảng
// // sinhvien.unshift("sinh vien 4");
// // console.log("sinhv vien", sinhvien);

// // // xoá mảng
// // // delete sinhvien[0];

// // console.log("sinhv vien 1", sinhvien);
// // sinhvien.pop();
// // console.log("sinhv vien 2", sinhvien);
// // // đầu mảng
// // sinhvien.shift("sinh vien 4");
// // console.log("sinhv vien 3", sinhvien);
// //thêm nhiều

// // sinhvien.splice(0, 2, "sinhvien c", "sinh vien e");
// // console.log("sinhvien", sinhvien);
// // const sinhvien_new = sinhvien.slice(0, 1);
// // const sinhvien_new1 = [...sinhvien];
// // const mang_phu = ["a", "b", "c"];
// // const sinhvien_new2 = sinhvien.concat(mang_phu);

// // console.log("sinhvien", sinhvien_new);
// // console.log("sinhvien_new1", sinhvien_new1);
// // console.log("sinhvien_new2", sinhvien_new2);
// // kiem tra tồn tại

// const courses = ["js", "c", "php"];
// // includes true | false
// // indexof pos ví trí nếu có >< -1

// // console.log("ischeck", courses.includes("jss"));

// // console.log("position", courses.indexOf("jss"));
// // tìm kiếm value || undefined
// // const find = courses.find((value) => value === "jss");
// // console.log("find", find);
// // findIndex
// // const find = courses.findIndex(function (value) {
// //   return value === "js";
// // });

// // checkFound = (arr = [], x) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === x) {
// //       return i;
// //     }
// //   }
// //   return -1;
// // };

// // let sum = (a, b) => a * b;
// // function sum(a, b) {
// //   return a + b;
// // }

// // console.log("pos find", checkFound(courses, "js"));

// // sort sắp xếp string
// // console.log("course", courses);
// // courses.sort(); // a-z
// // console.log("course", courses);
// // courses.reverse();
// // console.log("course z-a", courses);
// // sort number
// // const dtb = [5, 5, 8, 3, 4, 2, 1];
// // dtb.sort(function (a, b) {
// //   return b - a;
// // });
// // console.log("dtb", dtb);
// // OBJECT
// // string, number, array, object, function

// const sinhvienFPT = {
//   mssv: "0001",
//   tuoi: 21,
//   ten: "sinh vien a",
//   toan: 7,
//   ly: 8,
//   hoa: 6,
//   tinhDTB: function () {
//     return Math.round((this.hoa + this.ly + this.hoa) / 3);
//   },
// };
// // sinh vien
// console.log("sinhvien", sinhvienFPT);
// console.log("sinhvien_MSSV", sinhvienFPT.mssv);
// console.log("sinhvien_MSSV", sinhvienFPT.tuoi);
// console.log("DTB", sinhvienFPT.tinhDTB());

// // copy
// // cach 1 Object.assign({}.sinhvienFPT)
// const sinhViewNew = Object.assign({}, sinhvienFPT);
// // console.table(sinhViewNew);
// // cach 2 {...sinhViewNew} // js es6 spread
// const sinhViewNew2 = { ...sinhViewNew };
// // console.log("sinh vien new 2");
// // console.table(sinhViewNew2);
// // update
// // var let
// // const sinhvienWriter = {
// //   mssv: "0001",
// //   tuoi: 21,
// //   ten: "sinh vien a",
// //   toan: 7,
// //   ly: 8,
// //   hoa: 6,
// //   tinhDTB: function () {
// //     return Math.round((this.hoa + this.ly + this.hoa) / 3);
// //   },
// // };

// // let sinhvienWriterNew = { ...sinhvienWriter, mssv: "0003" };
// // // sinhvienWriter.mssv = "0003";
// // // sinhvienWriter.tuoi = 22;
// // console.log("sinhvienWriter");
// // // console.table(sinhvienWriterNew);
// // // xoa
// // delete sinhvienWriterNew;

// // console.log(sinhvienWriterNew);

//
// const arrSinhVien = [];
// function initSinhVien() {
//   console.log("call initSinhVien");
//   for (let i = 0; i < 10; i++) {
//     const currentSinhVien = {
//       mssv: i,
//       ten: `sinh vien ${i}`,
//       DTB: Math.floor(Math.random() * 10),
//     };
//     arrSinhVien.push(currentSinhVien);
//   }
// }

// const updateSinhVien = (mssv, dtb) => {
//   console.log("call updateSinhVien");
//   const findSinhVien = arrSinhVien.findIndex((sv) => sv.mssv === mssv); // vị trí object trong mảng
//   if (findSinhVien !== -1) {
//     arrSinhVien[findSinhVien].DTB = dtb;
//   } else {
//     console.error("not found");
//   }
// };
// const removeSinhVien = (mssv) => {
//   console.log("call removeSinhVien");
//   const findSinhVien = arrSinhVien.findIndex((sv) => sv.mssv === mssv);
//   if (findSinhVien !== -1) {
//     arrSinhVien.splice(findSinhVien, 1);
//   } else {
//     console.error("not found");
//   }
// };
// const sinhvien = arrSinhVien.sort((a, b) => (a.DTB > b.DTB ? 1 : -1));

// // cập nhật điểm cho một sinh viên bất kỳ
// //sắp xếp sinh viên  dtb
// // xoá một sinh viên
// initSinhVien();
// console.log("initSinhVien", arrSinhVien);
// updateSinhVien(2, 6);
// console.log("updateSinhVien", arrSinhVien);
// arrSinhVien.sort(function (a, b) {
//   return a.DTB - b.DTB;
// });
// console.log("sort", arrSinhVien);
// // removeSinhVien(3);
// console.log("removeSinhVien", arrSinhVien);
/**
 *
 * quản lý sách => object
 *  mã sách
 *  tên sách
 *  năm sản xuất
 *  số trang
 *  tác giả
 *  giá
 * --------
 * 1. tạo object sách
 * 2: list sách
 * 3. thêm một một quyển sách vào list
 * 4. cập nhật một quển sách
 * 5. xoá một quyển sách
 */

// khởi tạo một object dom
var arrSach = [];
function isEmpty(value) {
  if (value !== "" && value !== undefined) {
    return false;
  }
  return true;
}
function addSach() {
  const maSach = document.getElementById("maSach").value;
  const tenSach = document.getElementById("tenSach").value;
  const namSX = document.getElementById("namSX").value;
  const soTrang = document.getElementById("soTrang").value;
  const tacGia = document.getElementById("tacGia").value;
  if (
    isEmpty(maSach) ||
    isEmpty(tenSach) ||
    isEmpty(namSX) ||
    isEmpty(soTrang) ||
    isEmpty(tacGia)
  ) {
    alert("invalid value");
  } else {
    const sach = {
      maSach, // duy nhất
      tenSach,
      namSX,
      soTrang,
      tacGia,
    };
    // kiểm tra tồn tại
    const isFound = arrSach.filter((item) => item.maSach === sach.maSach);
    console.log("isFound", isFound);
    if (isFound && isFound.length === 0) {
      arrSach.push(sach);
    } else {
      // update sách
      alert("đã có key");
    }
    //thêm sách

    console.log(arrSach);
  }
  event.preventDefault();
}
