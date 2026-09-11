> [!NOTE]
> If you set up your MCP registry using Azure API Center, enter the base URL for your API Center, including the workspace path, in the format:
>
> ```text
> https://SERVICE-NAME.data.REGION.azure-apicenter.ms/workspaces/WORKSPACE-NAME
> ```
>
> For example:
>
> ```text
> https://contoso-apic.data.eastus.azure-apicenter.ms/workspaces/default
> ```
>
> Including additional route suffixes like `/v0.1/servers` will cause the registry to error out, because {% data variables.product.prodname_copilot %} appends the MCP v0.1 path automatically.
