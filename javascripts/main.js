const commentInput = document.getElementsByClassName('input-comment')[0]; // 댓글 입력창
const commentBtn = document.getElementsByClassName('submit-comment')[0]; // 댓글 입력 버튼
const commentList = document.getElementsByClassName('comments')[0]; // 작성되서 올라온 댓글들

// 댓글 달기

function addComment() {
    var newComment = document.createElement('li')
    newComment.innerHTML = `<span><span class="point-span userID">seriiiiii</span>${commentInput.value}</span>`;

    // 코멘트에 더해지는 버튼 생성
    let commentBtns = document.createElement('div');

    let deleteBtn = document.createElement('img');
    deleteBtn.classList.add("comment-more");
    deleteBtn.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png";
    deleteBtn.alt = "more";

    let likeBtn = document.createElement('img');
    likeBtn.classList.add("comment-heart");
    likeBtn.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    likeBtn.alt = "하트";

    let likedBtn = document.createElement('img');
    likedBtn.classList.add("comment-heart-liked");
    likedBtn.src = "images/liked.png";
    likedBtn.alt = "좋아요된하트";
    /*
    <img src="images/liked.png">
    */

    let commentLike = document.createElement('div');
    commentLike.classList.add("comment-like");
    /*
    <dic class="comment-like"></div>
    */

    // 버튼에 함수 선언
    deleteBtn.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
    })

    commentLike.addEventListener('click', () => {
        if (likeBtn.style.display === 'none') {
            likeBtn.style.display = 'inline-block';
            likedBtn.style.display = 'none';
        } else {
            likeBtn.style.display = 'none';
            likedBtn.style.display = 'inline-block';
        }
    })

    // 코멘트에 버튼 추가
    commentLike.appendChild(likeBtn);
    commentLike.appendChild(likedBtn);
    commentBtns.appendChild(deleteBtn);
    commentBtns.appendChild(commentLike);
    newComment.appendChild(commentBtns);
    commentList.appendChild(newComment);
    commentInput.value = ""; // [       ] , 빈 값을 의미
    commentBtn.disabled = true; // 비활성화, true : 버튼을 클릭 못하게 함(입력된 값이 없을때), flase : 클릭 가능
}

commentBtn.addEventListener('click', function(){
    if (commentInput.value) {
        addComment();
    }
})

commentInput.addEventListener('keyup', function(e){
    if (commentInput.value) {
        commentBtn.disabled = false;
        // 13 = enter key
        // 13, ASCII code
        if (e.which === 13) {
            addComment();
        }
    }
    else {
    commentBtn.disabled = true;
    }
})

// 댓글 지우기

let deleteBtn = document.querySelectorAll('.comment-more');
deleteBtn.forEach(function(event) {
    event.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
    });
})

// 댓글 좋아요

let commentLike = document.querySelectorAll('.comment-like');
commentLike.forEach(function(event) {
    event.addEventListener('click', function() {
        var likeBtn = this.querySelector('.comment-heart');
        var likedBtn = this.querySelector('.comment-heart-liked');

        if (likeBtn.style.display === 'none') {
            likeBtn.style.display = 'inline-block';
            likedBtn.style.display = 'none';
        } else {
            likeBtn.style.display = 'none';
            likedBtn.style.display = 'inline-block';
        }
    })
})
$(function () {
    $('.btn_prev').on('click', function () {
      $(this).siblings('ul').prepend($(this).siblings('ul').children('li:last'));
    });
    $('.btn_next').on('click', function () {
      $(this).siblings('ul').append($(this).siblings('ul').children('li:first'));
    });
});

$(document).ready(function(){
    $(".plus").click(function(){
        $("#new_feed").show();
    });
    $("#new_feed > button").click(function(){
        $("#new_feed").hide();
    });
  });

  $(document).ready(function(){
    $("#more").click(function(){
        $("#more_background").show();
    });
    $(".x").click(function(){
        $("#more_background").hide();
    });
  });  

  $(document).ready(function(){
    $("#img1").show();
    $("#img2").hide();
  
    $("#img1").click(function(){
        $("#img1").hide();
        $("#img2").show();
    });
  
    $("#img2").click(function(){
        $("#img1").show();
        $("#img2").hide();
    });
  });
  
  $(document).ready(function(){
    $("#img3").show();
    $("#img4").hide();
  
    $("#img3").click(function(){
        $("#img3").hide();
        $("#img4").show();
    });
    $("#img4").click(function(){
        $("#img3").show();
        $("#img4").hide();
    });
  });
  
//좋아요증가
function count(type) {
    //결과를 표시할 element
    const resultElement =
    document.getElementById('result');
    console.log("element", resultElement);
    //현재 화면에 표시된값
    let number = resultElement.innerText;
    console.log("여기는 변환 전", number);
    //더하기/빼기
    if(type === 'plus') {
        number = parseInt(number) + 1;
        console.log("여기는 숫자로 변환 후", number);
    }else if(type === 'minus') {
        number = parseInt(number) - 1;
        /*
        자료형
        정수형 int ...
        실수형 float, double ...
        문자형 char, string
        논리형 boolean
         */
    }
    //결과출력
    resultElement.innerText = number;
}


// const count = (type) => {
//     $.ajax({
//         type: "post",
//         url: "/main/like",
//         success: (res) => {

//         }
//     });
// }

function filter(){

    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("name");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "flex";
      }else{
        item[i].style.display = "none";
      }
    }
  }

//   $(".search_box").click(function(){
//     $(".container").show();
// });
$(document).ready(function(){
    var target = $(".container");

    // 버튼을 클릭하면 사이드바 열림
    $(document).on("click", ".search_box", function (e){
        target.show();
        target.addClass('emphasized');
    });

    // 사이드바 외부를 클릭하면 사이드바 닫힘
    $(document).mouseup(function (e){
        if(target.has(e.target).length==0) {
            target.hide();
            target.removeClass('emphasized');
        } 
    });
});

