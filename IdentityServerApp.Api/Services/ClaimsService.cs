using System.Collections.Generic;
using System.Linq;
using IdentityServerApp.Api.Models;
using Microsoft.AspNetCore.Http;

namespace IdentityServerApp.Api.Services
{
    public class ClaimsService : IClaimsService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ClaimsService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public List<Claim> Get()
        {
            var user = _httpContextAccessor.HttpContext.User;

            var claims = user.Claims.Select(x => new Claim
            {
                Type = x.Type,
                Value = x.Value
            });

            return claims.ToList();
        }
    }
}