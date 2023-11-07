document.addEventListener("DOMContentLoaded", function() {
    // 블로그 게시물 데이터 (제목, 내용, 날짜 등)
    var blogPosts = [
        { title: "첫 번째 포스트", content: "이것은 첫 번째 블로그 포스트입니다.", date: "2023-11-07" },
        { title: "두 번째 포스트", content: "이것은 두 번째 블로그 포스트입니다.", date: "2023-11-08" }
        // 필요한 만큼 블로그 게시물을 추가할 수 있습니다.
    ];

    var contentSection = document.getElementById("content");

    // 블로그 게시물을 동적으로 생성하여 화면에 추가합니다.
    blogPosts.forEach(function(post) {
        var postElement = document.createElement("div");
        postElement.className = "blog-post";
        postElement.innerHTML = "<h2>" + post.title + "</h2><p>" + post.content + "</p><small>" + post.date + "</small>";
        contentSection.appendChild(postElement);
    });
});
