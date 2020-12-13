using Microsoft.AspNetCore.Mvc;

namespace IdentityServerApp.WebClient.Controllers
{
    public class AccountController : Controller
    {
        [HttpPost]
        public IActionResult Logout()
        {
            return SignOut("Cookies", "oidc");
        }
    }
}