using IdentityServerApp.IdentityServer.Models.Consent;

namespace IdentityServerApp.IdentityServer.Models.Device
{
    public class DeviceAuthorizationInputModel : ConsentInputModel
    {
        public string UserCode { get; set; }
    }
}