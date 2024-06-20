{% ifversion ghec %}

### Enabling creation of network configurations for organizations in an enterprise

{% data reusables.actions.azure-vnet-enterprise-policy %}

{% endif %}

### Configuring Azure resources before creating a network configuration in {% data variables.product.company_short %}

Ensure your Azure resources have been configured _before_ adding a network configuration in {% data variables.product.company_short %}.

### Supported regions

{% data reusables.actions.azure-vnet-supported-regions %}

### Runner failed to connect to the internet

{% data variables.product.company_short %}-hosted runners need to be able to make outbound connections to {% data variables.product.prodname_dotcom_the_website %} as well as other necessary URLs for {% data variables.product.prodname_actions %}.

If {% data variables.product.prodname_actions %} cannot communicate with the runners, the pool will never be able to bring runners online and so no jobs will be picked up. In this case, the pool will have the following error code.

```bash
VNetInjectionFailedToConnectToInternet
```

To fix this, ensure that you have configured your Azure resources according to the "Configuring your Azure resources" procedures.

### Deployment scope is locked

You can put locks on the Azure subscription or resource group, which can prevent NIC creation or deletion.

Locks that prevent NIC creation fail to pick up jobs, while locks that prevent NIC deletion either exhaust subnet address space (by continuing to create NICs) or have long queue-to-assign (QTA) times as the service retries deployment exceptions.

In this case, the pool will have the following error code.

```bash
RunnerDeploymentScopeLocked
```

To fix this, remove the lock or change the subnet you are using to one without a lock.

### Deployment blocked by policy

You can create policies on their management group, subscription, resource group, or individual resources. The most common policy is requiring a resource to have certain tags or to have a specific name.

The policy will prevent creation of NICs, which means the pool will not pick up jobs since no VMs can come online.

In this case, the pool will have the following error code.

```bash
RunnerDeploymentBlockedByPolicy
```

To fix this, remove the policy or change the subnet you are using to one without a policy.

### Subnet is full

Subnets have a limited amount of IP addresses to distribute. Each runner consumes one IP address. If the service attempts to scale up beyond the maximum runner count setting, it will encounter deployment errors.

This impacts the ability of the pool to add additional runners. If the queue depth is high enough, you may experience increased queue-to-assign (QTA) times. Jobs will still be processed, but not at a level of concurrency that you may expect.

In this case, the pool will have the following error code.

```bash
VNetInjectionSubnetIsFull
```

To fix this, either increase the size of the subnet you are using or reduce the pool's maximum runner count to match your subnet size.

### Incorrect NSG or firewall rules

The "Configuring your Azure resources" procedures list the required openings. However, you may have complex production networks with multiple downstream proxies or firewalls.

If runners are failing to come online, no jobs will be picked up. Your setup process may involve setting up the runner application and communicating back to the {% data variables.product.prodname_actions %} service to indicate it is ready, as well as fetching and installing anti-abuse tooling. If either of these processes fail, the runner cannot pick up any jobs.

If you are experiencing these issues, try setting up a virtual machine on the same subnet that you are using for private networking with {% data variables.product.company_short %}-hosted runners. However, if you have a service association link (SAL) in place, this is not possible.

If you have a SAL in place, try setting up a similar subnet in the virtual network and place a virtual machine on that network. Then attempt to register a self-hosted runner on it.

### HTTP request payload failure when configuring Azure resources

While running the command to configure Azure resources, ensure you are using the correct API version and the `businessId` property. If you are using a different property, your command may return the following error.

```bash
(HttpRequestPayloadAPISpecValidationFailed) HTTP request payload failed validation against API specification with one or more errors. Please see details for more information.
```

If you experience this error, you can see more information by running the command using the `---debug` flag.
