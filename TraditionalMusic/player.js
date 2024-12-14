document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer'); // 隐藏的音频播放器
    const songTitles = document.querySelectorAll('.card-name'); // 获取所有曲名元素

    // 为每个曲名添加点击事件监听器
    songTitles.forEach(title => {
        title.addEventListener('click', function () {
            const songName = this.getAttribute('data-song'); // 正确获取 data-song 属性
            if (!songName) return; // 如果 data-song 属性为空，则直接返回

            const songPath = `../music/${songName}.mp3`; // 构造 MP3 文件路径

            // 如果当前点击的歌曲正在播放，则暂停
            if (this.classList.contains('playing')) {
                if (!audioPlayer.paused) {
                    audioPlayer.pause();
                } else {
                    audioPlayer.play();
                }
                return; // 直接返回，避免重复加载
            }

            // 如果点击的是新的歌曲
            audioPlayer.src = songPath; // 设置音频源
            audioPlayer.play(); // 播放音频

            // 更新 UI：移除其他曲目的播放状态
            songTitles.forEach(title => title.classList.remove('playing'));
            this.classList.add('playing'); // 添加当前曲目的播放状态
        });
    });

    // 音频播放结束时，移除播放状态
    audioPlayer.addEventListener('ended', () => {
        songTitles.forEach(title => title.classList.remove('playing'));
    });
});