chrome.webRequest.onBeforeRequest.addListener(details => {
    if(details.url.startsWith("https://www.neat-reader.cn/app/api_v2/getMembershipType")){
        return {redirectUrl: "data:application/json;charset=UTF-8;base64,eyJtc2ciOiLor6XnlKjmiLfkvJrlkZjlt7Lov4fmnJ8iLCJtZW1iZXJzaGlwVHlwZSI6MSwiY29kZSI6MSwidHJpYWwiOjB9"};
    }
}, {urls: ["<all_urls>"]}, ["blocking"]);