chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            let x = setInterval(() => {
                if (document.getElementById('gateway-content')) {
                    document.getElementById('gateway-content')
                        .remove();
                    document.querySelector('body > div > div > div > div:nth-child(3)')
                        .remove();
                    document.querySelector('body > div > div > div').style.overflow = 'scroll';
                    document.querySelector('body').style.overflow = 'scroll';
                    clearInterval(x);
                }
            }, 500);
        }
    }, 10);
});
