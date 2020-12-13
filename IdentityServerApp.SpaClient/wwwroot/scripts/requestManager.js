function RequestManager() {
    this.xhr = new XMLHttpRequest();
}
  
RequestManager.prototype.sendXMLHttpRequest = function (method, url, headers, callback){
    var that = this;
    that.xhr.open(method, url);
    that.xhr.onload = function () {
        callback(that.xhr.status, that.xhr.responseText);
    };
    
    for (const [key, value] of Object.entries(headers)) {
        that.xhr.setRequestHeader(key, value);
    }
    
    that.xhr.send();
}