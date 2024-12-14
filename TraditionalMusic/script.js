document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer'); // 音频播放器
    const songTitles = document.querySelectorAll('.card-name'); // 获取所有曲名元素

    // 为每个曲名添加点击事件监听器
    songTitles.forEach(title => {
        title.addEventListener('click', function () {
            const songName = this.getAttribute('data-song'); // 获取歌曲名称
            const songPath = `../music/${songName}.mp3`; // 构造歌曲路径

            // 如果当前点击的曲目正在播放，则暂停
            if (this.classList.contains('playing')) {
                audioPlayer.pause();
                this.classList.remove('playing'); // 移除播放状态
            } else {
                // 播放新的歌曲
                audioPlayer.src = songPath; // 设置音频源
                audioPlayer.play();

                // 更新播放状态
                songTitles.forEach(title => title.classList.remove('playing')); // 移除其他曲目状态
                this.classList.add('playing'); // 高亮当前曲目
            }
        });
    });

    // 音乐播放结束后，移除播放状态
    audioPlayer.addEventListener('ended', () => {
        songTitles.forEach(title => title.classList.remove('playing'));
    });
});