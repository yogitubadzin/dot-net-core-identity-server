using IdentityServerApp.IdentityServer.Models.Consent;

namespace IdentityServerApp.IdentityServer.Models.Device
{
    public class DeviceAuthorizationViewModel : ConsentViewModel
    {
        public string UserCode { get; set; }
        public bool ConfirmUserCode { get; set; }
    }
}