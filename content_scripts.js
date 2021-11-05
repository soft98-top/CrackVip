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
                    //alert(data);
                    response.response = JSON.parse(data);
                }
                if(response.config.url == "https://www.neat-reader.cn/app/api_v2/getMembershipType"){
                    //alert(JSON.stringify(response.response));
                    let data = JSON.stringify(response.response);
                    data = data.replace(/\\\\"membershipType\\\\":\\d+/g,'\\\\"membershipType\\\\":1');
                    data = data.replace(/\\\\"trial\\\\":\\d+/g,'\\\\"trial\\\\":0');
                    //alert(data);
                    response.response = JSON.parse(data);
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