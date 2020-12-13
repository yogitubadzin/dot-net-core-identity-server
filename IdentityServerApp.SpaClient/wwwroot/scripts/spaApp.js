
$(document).ready(function () {
    var userManager = new UserManager();
    userManager.setStatus();

    $('#loginButton').click(function () {
        userManager.signinRedirect();
    });

    $('#logoutButton').click(function () {
        userManager.signoutRedirect();
    });
    
    $('#claimsButton').click(function () {
        userManager.display();
    });
});
