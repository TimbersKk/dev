var imgArr = document.querySelector('.img-box').querySelectorAll('img');
    var liArr = document.querySelector('.banner-list').querySelectorAll('li');
    // 定义一个变量，表示当前显示的图片的序号
    var imgIndex = 0;
    // 为每个li添加事件
    for (var i = 0; i < liArr.length; i++) {
         liArr[i].onclick = function (eve) {
            var liSelect = this;
            // 使当前显示的图片消失
             imgArr[imgIndex].style.opacity = '0';
             imgArr[imgIndex].id = '';
             // 改变当前显示图片所对应的li改变颜色
             liArr[imgIndex].className = '';
             // 获取点击的li所对应的图片序号
             imgIndex = parseInt(liSelect.getAttribute('name'));
             imgArr[imgIndex].style.opacity = '1';
             imgArr[imgIndex].id = 'banner-img';
             liArr[imgIndex].className = 'select-li';
         }
    }
    // 添加自动轮播事件
    setInterval(function () {
        imgArr[imgIndex].style.opacity = '0';
        imgArr[imgIndex].id = '';
        liArr[imgIndex].className = '';
        if (imgIndex == imgArr.length-1) {
            imgIndex = 0;
        } else {
            imgIndex = imgIndex + 1;
        }
        imgArr[imgIndex].style.opacity = '1';
        imgArr[imgIndex].id = 'banner-img';
        liArr[imgIndex].className = 'select-li';
    },5000);