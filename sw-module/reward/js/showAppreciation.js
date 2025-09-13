const data = [
    { name: 'tiger', money: '5.20', date: '2023/10/30'},
    { name: '哎哟喂傻了吧你', money: '1', date: '2023/10/30'},
    { name: '像风一样', money: '1.66', date: '2023/11/1'},
    { name: 'Simpson', money: '5', date: '2023/11/1'},
];

(function(){
    const rewardDom = document.getElementById('reward');
    var html = '';
    for(var i = 0; i < data.length; i++) {
        html += `<div class="reward-item-content">
        <div class="reward-item-name">${data[i].name}</div>
        <div class="reward-item-time">
            <div class="reward-item-money">￥${data[i].money}</div>
            <div>${data[i].date}</div>
        </div>
        </div>`;
    };
    rewardDom.innerHTML = html;
})();