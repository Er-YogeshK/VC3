using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using VC3.Domain.models;

namespace VC3.Web.Hubs
{
    public class SignalRtcCoreHub: Hub
    {

    }

    public class SignalRtcGroupHub: Hub
    {
        public void Send(string message)
        {
            Clients.All.SendAsync(HubPrefix.Connection, message);
        }
    }
}
