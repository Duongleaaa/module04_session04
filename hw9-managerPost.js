// quản lý các chức năng liên quan đến bài viết
//tạo khuôn đối tượng
class Posts {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
  }
}
//hàm tạo bài viết
function createPost(list) {
  let titleInput = prompt("Mời nhập tiêu đề!");
  let contentInput = prompt("Mời nhập nội dung!");
  let authorInput = prompt("Mời nhập tác giả!");

  let newObj = new Posts(titleInput, contentInput, authorInput);
  list.push(newObj); // đẩy nội dung thêm vào mảng
  return list;
}
//tạo mảng rỗng
let listPost = [];
let newListPost = [...listPost];
const MAXPOST = 5;
let post = new Posts(
  "Trúa tể của những tên hmề",
  "Đây là nội dung của trúa tuẻ",
  "Hmề Trúa"
);
newListPost.push(post); //đẩy một obj vào mảng clone.
console.log(newListPost);

// kiểm tra số lượng bài viết
function checkPostLimit() {
  if (newListPost.length > MAXPOST) {
    alert("Danh sách bài viết đã đạt đến giới hạn!");
  } else {
    //gọi hàm ở đây để thêm
    createPost(newListPost);
    for (let item of newListPost) {
      console.log(item);
    }
    //tìm kiếm
    function searchPost(arr) {
      let chooseSearch = confirm("Bạn có muốn tìm kiếm danh sách không?");
      if (chooseSearch) {
        //lấy dữ liệu người dùng
        let inputSearch = prompt("Mời nhập tên tác giả bài viết");
        // chuyển tất cả tác giả vào 1 mảng.
        let search = arr.map((e, i, arr) => {
          return e.author;
        });
        //tìm kiếm xem có không
        let result = search.includes(inputSearch);
        if (result) {
          alert(`Đã tìm thấy tác giả ${inputSearch}`);
        } else {
          alert("Không tìm thấy tác giả!");
        }
      }
    }
    searchPost(newListPost);
  }
}
checkPostLimit();

export let moldcreatePost = createPost;

export let moldcheckPostLimit = checkPostLimit;
