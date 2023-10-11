const theScript2 = document.createElement('script');
theScript2.src = "https://unpkg.com/ajax-hook@2.0.3/dist/ajaxhook.min.js"
document.children[0].appendChild(theScript2);
const theScript3 = document.createElement('script');
theScript3.innerHTML = `function ajax_hook(){
    try{
        ah.proxy({
            onRequest: (config,handler) => {
                if(config.url == "https://api.wolai.com/v1/file/getSignedPostUrl"){
                    let data = JSON.stringify(config.body);
                    data = data.replace(/\\\\"fileSize\\\\":\\d+/g,'\\\\"fileSize\\\\":3000');
                    config.body = JSON.parse(data);
                }
                //console.log(config);
                //console.log(JSON.stringify(config.body));
                handler.next(config);
            },
            onResponse:(response,handler) => {
                if(response.config.url.startsWith("https://api.wolai.com/")){
                    //alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"end_date\\\\":\\d+/g,'\\\\"end_date\\\\":1799284637767');
                    data = data.replace(/\\\\"type\\\\":\\\\"free\\\\"/g,'\\\\"type\\\\":\\\\"team_enterprise\\\\"');
                    data = data.replace(/\\\\"plan\\\\":\\\\"team_free\\\\"/g,'\\\\"plan\\\\":\\\\"team_enterprise\\\\"');
                    data = data.replace(/\\\\"plan_type\\\\":\\\\"free\\\\"/g,'\\\\"plan_type\\\\":\\\\"team_enterprise\\\\"');
                    //alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url == "https://cubox.pro/c/api/userInfo"){
                    //alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"level\\\\":\\d+/g,'\\\\"level\\\\":1');
                    // //alert(data);
                    // data = data.replace(/\\\\"isExpire\\\\":null/g,'\\\\"isExpire\\\\":false');
                    response.response = JSON.parse(data);
                }
                if(response.config.url == "https://www.fotor.com.cn/api/app/payment/subscriptions"){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"data\\\\":\\[\\]/g,'\\\\"data\\\\":[{\\\\"productName\\\\":\\\\"fotor\\\\",\\\\"expiration\\\\":false},{\\\\"productName\\\\":\\\\"pxbee\\\\",\\\\"expiration\\\\":false}]');
                    // alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url.startsWith("https://www.fotor.com.cn/api/user/userinfo")){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"expireWarning\\\\":null/g,'\\\\"expireWarning\\\\":999');
                    data = data.replace(/\\\\"vipStatus\\\\":\\d+/g,'\\\\"vipStatus\\\\":30');
                    data = data.replace(/\\\\"expiretime\\\\":null/g,'\\\\"expiretime\\\\":1759377747307');
                    // alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url.startsWith("https://www.fotor.com.cn/api/app/download/checkDownload")){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"remainDayCount\\\\":0/g,'\\\\"remainDayCount\\\\":1');
                    // alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url.startsWith("/Home/Resume/checkdown")){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"error\\\\":\\d+/g,'\\\\"ok\\\\":1');
                    // alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url.startsWith("https://api.dida365.com/api/v2/user/status")){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"pro\\\\":false/g,'\\\\"pro\\\\":true');
                    response.response = JSON.parse(data);
                }
                if(response.config.url.startsWith("/user/checkLogin") || response.config.url.startsWith("/user/checkVip") ){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"is_vip\\\\":false/g,'\\\\"is_vip\\\\":true');
                    data = data.replace(/\\\\"is_hbp_vip\\\\":false/g,'\\\\"is_hbp_vip\\\\":true');
                    data = data.replace(/\\\\"vip_end_time\\\\":\\d+/g,'\\\\"vip_end_time\\\\":1959432374');
                    // alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url.startsWith("https://api.lusun.com/api/v2/get_user_info")){
                    // alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"vip_grade\\\\":\\d+/g,'\\\\"vip_grade\\\\":1');
                    data = data.replace(/\\\\"vip_end_date\\\\":\\d+/g,'\\\\"vip_end_date\\\\":2960147199000');
                    // alert(data);
                    response.response = JSON.parse(data);
                }
                // if(response.config.url.startsWith("/api/v2/get_user_info")){
                //     // alert(JSON.stringify(response.response));
                //     let data = JSON.stringify(response.response);
                //     data = data.replace(/\\\\"vip_grade\\\\":\\d+/g,'\\\\"vip_grade\\\\":2');
                //     data = data.replace(/\\\\"vip_end_date\\\\":\\d+/g,'\\\\"vip_end_date\\\\":1960147199000');
                //     response.response = JSON.parse(data);
                // }
                if(response.config.url == "/bpweb/api/Message/Send" || response.config.url == "https://lantu.lx.qianxin.com/bpweb/api/Message/Send"){
                    let data = JSON.parse(response.config.body);
                    if(data.Content.func == "cn.lanxin.conference.task.ConferenceRoomReserveHelp" && (response.config.body.search("validateReserveConference") != -1 || response.config.body.search("addConferenceRoomReservation") != -1)){
                        let data = '{\"success\":true,\"content\":\"{\\\\\"result\\\\\":\\\\\"{\\\\\\\\\\\\\"code\\\\\\\\\\\\\":0,\\\\\\\\\\\\\"desc\\\\\\\\\\\\\":\\\\\\\\\\\\\"验证通过\\\\\\\\\\\\\",\\\\\\\\\\\\\"succeed\\\\\\\\\\\\\":true}\\\\\",\\\\\"stateCode\\\\\":0}\",\"error\":null,\"seq\":0}';
                        response.response = data;
                    }
                }
                //alert(JSON.stringify(response.response));
                handler.next(response);
            }
        });
        //console.log("执行成功");
    }catch(error){
    	//console.log(error);
        setTimeout("ajax_hook()","1");
    }};
    ajax_hook();`
document.children[0].appendChild(theScript3);
console.log("CrackVip注入完毕！");