// script.js
document.addEventListener('DOMContentLoaded', function() {
    var da5 = document.querySelector('.da5');
    da5.addEventListener('mouseover', function() {
        da5.textContent = '欢迎';
    });
    da5.addEventListener('mouseout', function() {
        da5.textContent = '文学作品';
    });

    var da3 = document.querySelector('.da33');
            function updateTime() {
                var now = new Date();
                var days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                var day = days[now.getDay()];
                da3.textContent = day;
               
            };
            setInterval(updateTime, 6000);
    var da333 = document.querySelector('.da333');
            function dateh() {
                var now = new Date();
                        var hours = now.getHours();
                        var minutes = now.getMinutes();
                        var seconds = now.getSeconds();
                        da333.textContent =  hours + '时' + minutes + '分' + seconds + '秒';
            }
            setInterval(dateh, 1000);

});
