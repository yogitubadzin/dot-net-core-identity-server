using IdentityServerApp.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServerApp.Api.Controllers
{
    [Route("api/claims")]
    [ApiController]
    [Authorize]
    public class ClaimsController : ControllerBase
    {
        private readonly IClaimsService _claimsService;

        public ClaimsController(IClaimsService claimsService)
        {
            _claimsService = claimsService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var claims = _claimsService.Get();

            return new JsonResult(claims);
        }
    }
}