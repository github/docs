You can automate port visibility settings in your dev container configuration using the `postAttachCommand` property with the {% data variables.product.prodname_cli %}. This allows you to automatically set forwarded ports to be private, organization-only, or public when someone attaches to the codespace.

```jsonc
"postAttachCommand": "gh codespace ports visibility 3000:org -c \"$CODESPACE_NAME\""
```

The available visibility options are:
- `private`: Only you can access the forwarded port
- `org`: Members of your organization can access the forwarded port  
- `public`: Anyone with the URL can access the forwarded port

> [!NOTE]
> Port visibility automation requires the {% data variables.product.prodname_cli %} to be available in your dev container. Most dev container templates include it by default, or you can add it using the `"ghcr.io/devcontainers/features/github-cli:1": {}` feature.