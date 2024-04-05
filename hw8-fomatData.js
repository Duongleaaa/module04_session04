/*
Trong file formatData.js, xây dựng một hàm đặt tên là formatDate() có tham số truyền vào
 là một chuỗi thời gian thực (tìm hiểu đối tượng Date() trong JavaScript)
*/
let addZero = (time) => {
  //thêm 0 vào những số bé hơn 10
  if (time < 10) {
    time = time.toString(10); //chuyển thành chuỗi cơ số 10
    time = "0" + time;
  } else {
    time = time.toString(10); //chuyển thành chuỗi cơ số 10
  }
  console.log(time);
  return time;
};
let formatDate = (curTime, cbkAddZero) => {
  //VỚI NĂM
  let curYear = curTime.getFullYear();
  curYear = curYear.toString(10); //chuyển thành chuỗi cơ số 10
  console.log(curYear);

  //VỚI THÁNG
  let curMonth = curTime.getMonth(); // trả về 0-11. nên cộng thêm 1
  curMonth = curMonth + 1;
  //thêm 0 vào những số bé hơn 10
  addZero(curMonth);

  //VỚI NGÀY
  let curDay = curTime.getDate();
  addZero(curDay);

  // gộp lại
  let result = addZero(curDay) + "/" + "/" + addZero(curMonth) + "/" + curYear;
  console.log(result);
  return result;
};
export let funZero = addZero;
export let funFormat = formatDate;
