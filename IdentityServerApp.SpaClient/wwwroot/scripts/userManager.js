function UserManager() {
    var config = {
        authority: "https://localhost:5000",
        client_id: "spaclient",
        redirect_uri: "https://localhost:5003/callback.html",
        response_type: "code",
        scope: "openid profile identity.api identityserverapp.api",
        post_logout_redirect_uri: "https://localhost:5003/index.html",
    };

    this.oidcUserManager = new Oidc.UserManager(config);
    this.requestManager = new RequestManager();
    this.displayManager = new DisplayManager();
}

UserManager.prototype.setStatus = function() {
    var that = this;
    that.oidcUserManager.getUser().then(function (user) {
        if (user) {            
            that.displayManager.display("User logged in", user.profile);
            $('#claimsButton').show();
        }
        else {
            that.displayManager.display("User not logged in");
            $('#claimsButton').hide();
        }
    });
}

UserManager.prototype.signinRedirect = function() { 
    this.oidcUserManager.signinRedirect();
}

UserManager.prototype.signoutRedirect = function() { 
    this.oidcUserManager.signoutRedirect();
}

UserManager.prototype.display = function() {
    var that = this;
    that.oidcUserManager.getUser().then(function (user) {
        var method = "GET";
        var url = "https://localhost:5001/api/claims";
        var authorizationValue = "Bearer " + user.access_token;
        var headers = {
            "Authorization": authorizationValue
        };

        var callback = function(status, responseText) {
            that.displayManager.display(status, JSON.parse(responseText));
        }

        that.requestManager.sendXMLHttpRequest(method, url, headers, callback);
    });
}