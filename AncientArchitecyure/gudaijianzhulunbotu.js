$(document).ready(function () { // 确保DOM完全加载后再执行脚本
    let zhenjia = true; // 控制滑动方向的变量，true为向右滑动，false为向左滑动
    let move = () => { // 定义移动图片的函数
        let listes = $('.item'); // 获取所有图片项
        if (zhenjia) { // 如果是向右滑动
            $('#slide').append(listes.first()) // 将第一张图片移动到列表的末尾
            listes = $('.item'); // 更新图片项列表

        } else { // 如果是向左滑动
            $('#slide').prepend(listes.last()) // 将最后一张图片移动到列表的开头
            listes = $('.item'); // 更新图片项列表

        }
        // Reset position of items // 重置图片项的位置（这部分代码被注释掉了，可能需要添加）

    };

    let timer; // 定义定时器变量
    let startSlider = () => { // 定义启动轮播图的函数
        clearInterval(timer); // 清除现有的定时器
        timer = setInterval(move, 2000); // 设置一个新的定时器，每2秒调用一次move函数
    };

    startSlider(); // 开始轮播图 // Start the slider initially

    $('.container').hover( // 当鼠标进入或离开容器时的事件处理
        function () {
            clearInterval(timer); // 鼠标进入时清除定时器，停止轮播
        },
        function () {
            startSlider(); // 鼠标离开时重新启动轮播图
        }
    );

    $('.s_buttton-right').click(() => { // 右按钮点击事件
        zhenjia = true; // 设置滑动方向为向右
        move(); // 执行移动
        startSlider(); // 重新启动轮播图 // Restart the slider after move
    });
    $('.s_buttton-left').click(() => { // 左按钮点击事件
        zhenjia = false; // 设置滑动方向为向左
        move(); // 执行移动
        startSlider(); // 重新启动轮播图 // Restart the slider after move
    });
});
