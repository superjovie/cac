

var configId = 53617;
var robotName = '小语';
var language;
//定时发送
window.jesongErrorTimeout = window.setTimeout(function () {
    window.sendJesongError(2);
}, 5000);
//js加载错误上报
window.sendJesongError = function (type, error) {
    var companyId = 30875;
    var monitorUrl = 'http://glive.easyliao.com/';
    var img = window.document.createElement("img");
    var uriComponent = window.encodeURIComponent(window.location.href);
    img.src = monitorUrl + version + "/" + companyId + "/i/loadError?c=" + companyId + "&j=" + configId + "&type=" + type + "&error=" + (error ? window.encodeURIComponent(error) : "") + "&url=" + uriComponent;
    img.style = "border:0px;width:0px;height:0px;";
    window.document.body.appendChild(img);
};
//配置属性--前端均使用获取jesong下的属性
var jesong;
var JESONG_MESSAGE_TEXT;
var version = 1;
//初始化布局
(function () {
    var chatUrl = 'http://glive.easyliao.com/live/';
    var fileUrl = 'http://scripts.easyliao.com/group-prd1/';
    // 返回 web 主机的端口，如：8080
    var port = window.location.port;
    var isCustomerOnline = true;
    var openProp = true;//是否加载所有属性
    var companyId = 30875;
    if (jesong) {
        return;
    }
    //help
    var Base64 = {
        // public method for encoding
        encode: function (input) {
            var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = this._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                    _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        },
        // public method for decoding
        decode: function (input) {
            var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = this._utf8_decode(output);
            return output;
        },
        // private method for UTF-8 encoding
        _utf8_encode: function (string) {
            var string = (string + '').replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },
        // private method for UTF-8 decoding
        _utf8_decode: function (utftext) {
            var string = "";
            var i = 0;
            var c = 0, c1 = 0, c2 = 0;
            var c3;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    }
    var lang = 1;
    if (lang === 1) { //中文
        language = "sc";
    } else if (lang === 2) {//英文
        language = "en";
    } else { //浏览器默认
        var lan =  navigator.language || navigator.systemLanguage;
        if(lan.toLowerCase().indexOf('zh')!==-1){
            language = "sc";
        }else if(lan.toLowerCase().indexOf('en')!==-1){
            language = "en";
        }else{
            language = "sc";
        }
    }
    var jsType = 0;

    var robotWelcomeMessageTemp = Base64.decode('');
    var robotUnknowMessageTemp = Base64.decode('');
    JESONG_MESSAGE_TEXT = {
        replyMsgAtConnected: Base64.decode(''),
        msgOfDisConnected: Base64.decode('5oSf6LCi5oKo55qE5ZKo6K+i77yMIOWGjeinge+8gQ=='),
        msgOfTrans: Base64.decode('5oKo55qE5a+56K+d5bCG6KKr6L2s56e757uZ5oiR55qE5ZCM5LqL77yMIOaE n+iwouaCqOeahOWSqOivou+8gQ=='),
        companyProfile: Base64.decode(''),
        robotWelcomeMessage: robotWelcomeMessageTemp,
        robotUnknowMessage:  robotUnknowMessageTemp,
        replyMsgOfVisitor: Base64.decode(''),
        inviteTitle: '',
        inviteText: '',
        extCode: Base64.decode('dmFyIGVhc3lsaWFvPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIp OwplYXN5bGlhby5pbm5lckhUTUwgPSAiLmplc29uZy1zZXJ2aWNlLWJ1YmJs ZSAuamVzb25nLXNlcnZpY2Utc2Vzc2lvbi1jb24ge2xpbmUtaGVpZ2h0OiAy OHB4O30uamVzb25nLXNlcnZpY2Utc2Vzc2lvbj5zcGFuLCAuamVzb25nLXVz ZXItbXNnIHtmb250LXNpemU6IDE0cHggIWltcG9ydGFudDt9LnZzdFRleHQg e2ZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O30iOwpkb2N1bWVudC5ib2R5 LmFwcGVuZChlYXN5bGlhbyk7CnZhciBlYXN5bGlhbyA9IGRvY3VtZW50LmNy ZWF0ZUVsZW1lbnQoInN0eWxlIik7CmVhc3lsaWFvLmlubmVySFRNTCA9Ii5q ZXNvbmctc2VydmljZS1waG9uZSBhe2NvbG9yOiAjZmZmZmZmICFpbXBvcnRh bnQ7Ym9yZGVyOiAxcHggc29saWQgIzA2QUI4RiAhaW1wb3J0YW50OyBiYWNr Z3JvdW5kLWNvbG9yOiAjMDZBQjhGICFpbXBvcnRhbnQ7Zm9udC13ZWlnaHQ6 IGJvbGRlciAhaW1wb3J0YW50O30uamVzb25nLXNlcnZpY2UtYnViYmxlIC5q ZXNvbmctdmlzaXRvci1zZXNzaW9uLWNvbntiYWNrZ3JvdW5kOiAjMDZBQjhG ICFpbXBvcnRhbnQ7Ym9yZGVyOiAxcHggc29saWQgIzA2QUI4RiAhaW1wb3J0 YW50O30iOwpkb2N1bWVudC5ib2R5LmFwcGVuZChlYXN5bGlhbyk7')
    };

    jesong = {
        lazy: false,
        version: version,
        visitorReady: false,
        forceReady: false,
        newChat: false,
        env: {
            aiReady: -1,
            isPhone: jsType === 1,
            scheme: 'https:' == document.location.protocol ? 'https' : 'http',
            schemePort: port,
            server: {
                monitor: 'http://glive.easyliao.com/',
                chat: chatUrl,
                file: 'http://scripts.easyliao.com/group-prd1/',
                guide: 'http://glive.easyliao.com/api/robot',
                webHost: 'views-cdn.easyliao.com',//前端服务domain
            },
            resources: {
               version: 'v1.2.7',
               path: '/view/ROOT-view/'
            },
            compId: 30875,
            confId: 53617,
            vId: '',
            uId: '',
            pId: 0,
            mId: ''
        },
        chatUrl: chatUrl, //对话服务
        basePath: chatUrl, //
        language: language,
        lang: language, //多余属性废弃
        jsType: jsType,
        confId: 53617,//样式id
        siteId: 0,
        promotionId: 0,
        pcDisplayStyle: 2,
        withMonitor: true, //是否开启访客监控
        withPanel: false, //是否开启网页图标
        bindHosts: '',
        showPhonePanel: false, //是否开启免费电话
        config: {
            callerOpinion: 1,
            visitorPhoneVerification: 0,
            inputText: '1',
            showTransferMsg: '1',
            copyWechat: ('1' === '1'),
            copyQq: ('1' === '1'),
            canCall: ('1' === '1'),
            freeCall: ('0' === '1'),
            baiduMap: ('0' === '1'),
            isApplet: 1,//复制微信优先跳转二维码配置 1开 0关 默认关闭
            appletBackground: '0',//二维码跳转小程序背景图
            cycleTimeOfToVisitorMsg: '30',
            timesOfToVisitorMsg: '2',
            logoButtonText: '',
            chatAutoCloseTime: '30',
            wechatLiveCode: '0',
            robotName: '小语'
        }, //全局配置信息
        font: {
            custFontCss: 'font-family:SimSun!important;font-size:14px;color:#000000!important;',
            vistFontCss: 'font-family:SimSun!important;font-size:14px;color:#FFFFFF!important;'
        },
        monitor: {}, //访客监控
        freecall: {}, //免费电话
        probe: {}, //探头
        panel: {}, //网页图标
        win: {},
        icon: {},
        text: {},
        msg: {},
        phone: {},
        _isBindHost: function() {
                var bindHosts = '';
                if (bindHosts != "") {
                    var _hosts = bindHosts.split(",");
                    var domain = window.location.host;
                    var bindHostFlag = false;
                    for (var i = 0; i < _hosts.length; i++) {
                        if (domain == _hosts[i]) {
                            bindHostFlag = true;
                            break;
                        }
                    }
                    return bindHostFlag;
                } else {
                    return true;
                }
            },
        _genId: function(){
                var random4 = function () {
                    return parseInt(Math.random() * 9000 + 1000, 10);
                }
                var cId = '30875';
                while (cId.length < 12) {
                    cId = "0" + cId;
                }
                var id = "" + new Date().getTime();
                id = id.substring(3);
                id += random4();
                id += random4();
                return "01" + cId + id;
            },
        _createLayout: function (id, className) {
            if (!this.lazy) {
                document.write('<div id="' + id + '" class="' + className + '"></div>');
            } else {
                var _div = document.createElement("div");
                _div.id = id;
                _div.className = className;
                document.body.appendChild(_div);
            }
        },
        _loadCSS: function (url) {
            if (!this.lazy) {
                document.write('<link rel="stylesheet" type="text/css" charset="utf-8"  href="'+url+'"></link>');
            } else {
                var linkTag = document.createElement("link");
                linkTag.type = "text/css";
                linkTag.rel = "stylesheet";
                linkTag.charset = "utf-8";
                linkTag.href = url;
                document.getElementsByTagName("head")[0].appendChild(linkTag);
            }
        },
        _loadJS: function (src) {
            if (!this.lazy) {
                document.write('<scr' + 'ipt type="text/javascript" defer charset="utf-8"  src="' + src + '"></scr' + 'ipt>');
            } else {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.charset = "utf-8";
                script.src = src;
                document.getElementsByTagName("script")[0].parentNode.appendChild(script);
            }
        },
        init: function () {
            var phoneChatStyle = '1';
                this.env.vId = this._genId();
                this._createLayout("jesong_panel", "");
                if (this.jsType == 1 && this.env.isPhone) {
                    this._createLayout("jesong_chat_layout", "jesong_phone_layout jesong_phone_layout_" + language + "_" + phoneChatStyle);
                } else {
                    this._createLayout("jesong_chat_layout", "jesong_chat_layout_pc jesong_chat_layout_pc_" + language);
                }
                document.getElementById("jesong_chat_layout").style.display = "none";
                this._createLayout("jesong_chat_min", "jesong_chat_min_" + language);
                this._createLayout("jesong_pop_msg", (jesong.jsType == 1 && jesong.env.isPhone) ? "jesong_pop_msg_phone" : "");
                var webResources = this.env.scheme + '://'+ this.env.server.webHost + this.env.resources.path + this.env.resources.version;
                this._loadJS(webResources+"/main.js?ver=20190927");
                this._loadCSS(webResources +"/src/assets/css/webcall.css?ver=20190928");
                this._loadCSS(webResources +"/src/assets/css/force.css?ver=20190928");
        },
        words: {
            greeting: JESONG_MESSAGE_TEXT.replyMsgAtConnected,
            disconnect: JESONG_MESSAGE_TEXT.msgOfDisConnected
        }
    };
    //访客监控
    if (jesong.withMonitor || openProp) {
        jesong.monitor.config = {
            title: '',
            text: '',
            index: 11,
            type: 0,
            pos: 3,
            auto: -1,
            inviteSwitch: -1,
            showInviteAgain: -1,
            autoInviteTimes: -1,
            start: '09:00',
            end: '18:00',
            mask: false,
            mainBg: 'url('+''+') no-repeat',
            mainHeight: 0,
            mainWidth: 0,
            acceptStyle: 'position:absolute;background:url() no-repeat;height:0px;width:0px;top:0px;left:0px;',
            refuseStyle: 'position:absolute;background:url() no-repeat;height:0px;width:0px;top:0px;left:0px;',
            textStyle: 'position:absolute;height:0px;width:0px;top:0px;left:0px;',
            groupId: 34171
        };
    }
    //网页图标
    if (jesong.withPanel || openProp) {
        //网页图标
        jesong.panel.config = {
            category: 'icon',
            targetMode:'1',
            position: 0,
            vertical: 150,
            horizon: 5,
            panelWhenInvite: 0
        };
        //网页图标-面板类型-客服列表
        if ("win" == jesong.panel.config.category || openProp) {
            jesong.win.config = {
                customers: {"mode":"1","groups":[],"showRobot":1},
                winType: 1,
                winIndex: 1,
                winWidth: 145,
                winHeight: 200,
                winTitle: '在线客服',
                headColor: '#FFFFFF',
                headBgColor: '#000000',
                borderColor: '#000000',
                compTel: '',
                qccode: '',
                winBg: '',
                winGOnlineBg: '',
                winGOfflineBg: '',
                winMTop: 0,
                winMLeft: 0,
                winMWidth: 0,
                winMHeight: 0,
                winGHeight: 0,
                winGTop: 0,
                winGBottom: 0,
                winGOnlineFont: '',
                winGOnlineWeight: 0,
                winGOnlineColor: '',
                winGOfflineFont: '',
                winGOfflineWeight: 0,
                winGOfflineColor: '',
                winGTextleft: 0
            };
        };
        var target = '1' == '0' ? '' : '0';
        //网页图标-面板类型-图标
        if ("icon" == jesong.panel.config.category || openProp) {
            var online = 'http://scripts.easyliao.com/group-prd1//';
            var offline = 'http://scripts.easyliao.com/group-prd1//';
            if (jsType === 1) {
                offline = online;
            }
            jesong.icon.config = {
                mode: jesong.panel.config.targetMode,
                target: target,
                online: online,
                offline: offline,
                width: 198,
                height: 188,
                status: isCustomerOnline ? "1" : "0",
                closeWidth: 0,
                closeHeight: 0,
                closeTop: 0,
                closeLeft: 0,
            };
        }
        //未知
        if ("text" == jesong.panel.config.category || openProp) {
            jesong.text.config = {
                mode: jesong.panel.config.targetMode,
                target: target,
                content: '\u5728\u7ebf\u5ba2\u670d',
                color: '#000000',
                size: '12px'
            }
        }
    }
    //免费电话
    jesong.freecall.config = {
        showPhonePanel: jesong.showPhonePanel,
        freecallGroupId: -1,
        phonePanelPosition: 0,
        phonePanelBg: '',
        phonePanelWidth: 0,
        phonePanelHeight: 0,
        phonePanelTop: -1,
        phonePanelLeft: -1,
        phonePanelRight: -1,
        phonePanelBottom: -1,
        phonePanelTextWidth: 0,
        phonePanelTextHeight: 0,
        phonePanelTextLeft: 0,
        phonePanelTextTop: 0,
        phonePanelCloseWidth: 0,
        phonePanelCloseHeight: 0,
        phonePanelCloseLeft: 0,
        phonePanelCloseTop: 0,
        phonePanelBtnWidth: 0,
        phonePanelBtnHeight: 0,
        phonePanelBtnLeft: 0,
        phonePanelBtnTop: 0
    };

    //探头
    jesong.probe = {
        probeText: '',
        groupIds: ''
    };

    //消息提醒横幅配置
    jesong.msg.remind = {
        // 
        msgNumPrompt: 0,
        // 
        msgAlertBubble: 1,
        // 
        msgBubblePos: 0,
        // 
        msgBubbleTime: 0,
        // 
        msgBubbleTimeNum: 60
    };

    //对话框设置
    var hasButtonLogoLicense =  true;
    var countCodeTemp = Base64.decode('');
    jesong.autochat = {
        companyProfile:  Base64.decode(''),
        keyWord: null,
        show: false,
        waitSendMsg: '',
        hasButtonLogoLicense: hasButtonLogoLicense,
        welcome: JESONG_MESSAGE_TEXT.welcomeMsgOfConnected,
        userHead: 'https://imgs.easyliao.com/M00/4A/54/Ch6jw2BiytWAX0BYAAAPjb1D_30713.png',
        visitorHead: 'http://glive.easyliao.com//images/chat/201805/head-visitor.png',
        sendkeyWord: 0,
        searchMode: 0,
        autochatBgColor: '#3E90DD', //
        width: 420,
        height: 500,
        showCustomerInfoMin: 0,
        showCustomerInfoCkUserMin: 0,
        showCustomerInfoCkPhoneMin: 0,
        showCustomerInfoCkDeptMin: 0,
        showAboutUsMin: 0,
        ad2ImageURLMin: '',
        ad2ImageLinkMin: '',
        aboutusShortImgMin: '',
        aboutusShortImg: '',
        aboutusLongImgMin: '',
        aboutusLongImg: '',
        autoChat: 1,
        autoChatStart: '00:00',
        autoChatEnd: '23:59',
        autoChatTimes: -1,
        autoChatDelay: 5,
        autoChatHideMonitor: 1,
        autoConnect: 1,
        minChatCloseBtn: 1,
        minChatMinBtn: 1,
        minChatMaxBtn: 1,
        topImage: '',
        topImageMin: '',
        phoneMinChatSize: 80,
        tel: '',
        topImageMobile: '',
        pageTitle: '招生办-向老师',
        pcMinLogo: 'http://imgs.easyliao.com/M00/4A/54/Ch6jw2BiytWAX0BYAAAPjb1D_30713.png',
        autoPopMWinTime: 20,
        autoPopMWinPeroid: 20,
        autoPopMWinTimePC: 20,
        autoPopMWinPeroidPC: 10,
        tools: {
            toolEmoticons: 1,
            toolOpinion: 1,
            toolScreen: 1,
            toolFile: 1,
            toolQuiet: 1,
            toolWechat: 1
        },
        popMsg: {
            head: 'http://imgs.easyliao.com/M00/4A/54/Ch6jw2BiytWAX0BYAAAPjb1D_30713.png',
            title: '您有新的客户消息，请注意查看！',
            bgColor: '#3E90DD',
            color: '#ffffff',
            opacity: 80
        },
        phoneDefine: 2,
        firstToRebot: 0,
        phoneChatPop: 1,
        frameChatStyle: 14,
        forceChatLogo: '',
        imgSizeDefault: false,
        // 
        phoneMinimizeTip: 0,
        // 
        closePopTip: 1,
        // 
        pageReminderNew: 1,
        // 
        pcPageReminderNew: 1,
        pcShowNewMsg: 0,
        // 
        closeFn: 1,
        // 
        minChat: 1,
        minChatPos: 1,
        windowInputMin: 1,//pc小窗对话框输入区是否展示 1展示 0不展示 默认展示
        windowInputPc: 1,//pc大窗对话框输入区是否展示 1展示 0不展示 默认展示
        minChatSwell: 0,
        popChatHideIcon: 0,
        pcMaxEndChatTip: 0,
        pcMaxEndChatTipImageType: 0,
        pcMaxEndChatTipImageUrl: '',
        pcMaxEndChatTipMobile: 0,
        pcMaxEndChatTipWechat: 0,

        pcMinEndChatTip: 0,
        pcMinEndChatTipImageType: 0,
        pcMinEndChatTipImageUrl: '',
        pcMinEndChatTipMobile: 0,
        pcMinEndChatTipWechat: 0,

        phoneEndChatTip: 0,
        phoneEndChatTipMobile: 0,
        phoneEndChatTipWechat: 0,
        portraitUnifiedMobileSwitch: 0,
        portraitUnifiedSwitch: 0,
        //
        chatStyle: 1,
        popStyle: 1,
        pcMaxEndChatBtn: 0,
        phoneMinChatMinBtn: 1,
        sayHello: '',
        logImageURL: '',
        showCustomerInfo: 0,
        showCustomerInfoCkUser: 0,
        showCustomerInfoCkPhone: 0,
        showCustomerInfoCkDept: 0,
        showAboutUs: 1,
        logImageLink: '',
        ad1ImageURL: '',
        ad1ImageLink: '',
        ad2ImageURL: '',
        ad2ImageLink: '',
        ad3ImageURL: '',
        ad3ImageLink: '',
        ad4ImageURL: '',
        ad4ImageLink: '',
        ad5ImageURL: '',
        ad5ImageLink: '',
        countCode: countCodeTemp,
        waitText: Base64.decode('5a+55LiN6LW377yM55uu5YmN5Zyo57q/5a6i5pyN57mB5b+Z77yM5oKo5YmN 6Z2i5pyJe3F1ZXVlSW5kZXh95L2N5a6i5oi3562J5b6F44CC'),
        showRobotTab: true,
        showPhoneTab: false,
        showSMSTab: false,
        showSaveChatRecorder: true,
        phoneMinChatSize: 80,
        visitorAuthType: -1,
        canBackPage: 0,
        phoneInputTop: 0,
        showLeaveMsg: 1,
        showRebot: 1
    };
    jesong.ocpc = {
        ocpcPlatform: -1,
        ocpcCondition: 1,
        ocpcConfigId: 0
    };

    //初始化样式布局
    if(!jesong.lazy){
        document.write('<style>.vstText{'+jesong.font.vistFontCss+'} .svcText{'+jesong.font.custFontCss+'}</style>');
    }else{
        var x = document.createElement("STYLE");
        var t = document.createTextNode(".vstText{"+jesong.font.vistFontCss+"} .svcText{"+jesong.font.custFontCss+"}");
        x.appendChild(t);
        document.head.appendChild(x);
    }
    var includeLive = location.pathname.indexOf("live");
    //协议
    if ("https:" == document.location.protocol) {
        jesong.env.server.monitor = jesong.env.server.monitor.replace("http:", "https:");
        jesong.env.server.chat = jesong.env.server.chat.replace("http:", "https:");
        jesong.env.server.file = jesong.env.server.file.replace("http:", "https:");
        jesong.env.server.webHost = jesong.env.server.webHost.replace("http:", "https:");
        jesong.env.schemePort = "443";
        jesong.env.scheme = "https";
        jesong.basePath = jesong.basePath.replace("http:", "https:");
        jesong.chatUrl = jesong.chatUrl.replace("http:", "https:");
    }
    if(includeLive > 0){
        console.log("=ignore==init=");
    }else{
        jesong.init();
    }
})();
//判断设备是否是手机
function isMobile() {
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        return true;
    } else {
        return false;
    }
}

