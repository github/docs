You can use the `portsAttributes` property to configure default settings for specific ports, including their labels, protocols, and in some cases, initial visibility preferences:

```jsonc
"portsAttributes": {
  "3000": {
    "label": "Application Server",
    "protocol": "https"
  },
  "8080": {
    "label": "API Server"
  }
}
```

The `portsAttributes` property supports these configuration options:
- **label**: A human-readable name for the port that appears in the {% data variables.product.prodname_github_codespaces %} interface
- **protocol**: Set to `"https"` to use HTTPS forwarding, or `"http"` (default) for HTTP forwarding
- **onAutoForward**: Action to take when the port is automatically forwarded (e.g., `"notify"`, `"openBrowser"`, `"openPreview"`)

For more information about available port attributes, see the [dev containers specification](https://containers.dev/implementors/json_reference/#port-attributes) on the Development Containers website.