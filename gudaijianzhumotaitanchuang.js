// 获取模态弹窗
var modal = document.getElementById("myModal");

// 获取模态框中的图片
var modalImg = document.getElementById("img01");

// 获取图片gallery，并为每张图片设置点击事件
var gallery = document.getElementById("gallery");
gallery.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = "block";
        modalImg.src = event.target.src;
    }
});

// 获取关闭模态弹窗的按钮
var span = document.getElementsByClassName("close")[0];

// 点击关闭按钮关闭模态弹窗
span.onclick = function () {
    modal.style.display = "none";
}

// 点击模态弹窗外部关闭模态弹窗
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}