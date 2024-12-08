function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const cozeWebSDK = new CozeWebSDK.WebChatClient({
        config: {
            botId: '7414539767288872966'
        },
        auth: {
            type: 'token',
            token: 'pat_CrX5FPOln2wDMoCey5qP7QyAHcw2cRTQ56xalk1N27196ZNeDsubo6FC4ptnJn7m',
            onRefreshToken: () => 'pat_CrX5FPOln2wDMoCey5qP7QyAHcw2cRTQ56xalk1N27196ZNeDsubo6FC4ptnJn7m'
        },
        userInfo: {
            id: username,
            nickname: username,
            url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + username
        },
        ui: {
            base: {
                layout: isMobile() ? 'mobile' : 'pc',
                lang: 'zh-CN'
            },
            chatBot: {
                title: 'AI 助手',
                uploadable: true,
                width: isMobile() ? '100vw' : '460px',
                height: isMobile() ? '100vh' : '600px'
            },
            asstBtn: {
                isNeed: !isMobile()
            }
        }
    });

    document.querySelector('.login-container').style.display = 'none';
    
    if (isMobile()) {
        cozeWebSDK.showChatBot();
    }
});
