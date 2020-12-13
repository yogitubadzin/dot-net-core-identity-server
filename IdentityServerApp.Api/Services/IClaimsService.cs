using System.Collections.Generic;
using IdentityServerApp.Api.Models;

namespace IdentityServerApp.Api.Services
{
    public interface IClaimsService
    {
        List<Claim> Get();
    }
}