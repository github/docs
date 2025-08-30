---
title: Securing port forwarding in dev containers
shortTitle: Secure port forwarding
intro: 'Learn how to configure secure port forwarding settings in your dev container configuration to control port visibility and automate security settings.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Security
---

## About port forwarding security in dev containers

When you configure a dev container for {% data variables.product.prodname_github_codespaces %}, you can control how ports are forwarded and their visibility settings. This is important for security, especially when working with sensitive applications or in organizations with strict access policies.

By default, {% data variables.product.prodname_github_codespaces %} forwards ports privately, meaning only you can access them. However, you can configure your dev container to automatically apply specific visibility settings when the codespace starts.

## Configuring port forwarding with security in mind

You can configure port forwarding in your dev container using several properties, each serving different security purposes. The key properties for secure port forwarding are `forwardPorts`, `portsAttributes`, and `postAttachCommand`.

### Using forwardPorts with portsAttributes

The most basic approach is to specify which ports should be forwarded and configure their attributes:

```jsonc
{
  "name": "My Secure Dev Container",
  "image": "mcr.microsoft.com/devcontainers/base:bullseye",
  
  "forwardPorts": [3000, 8080, 8443],
  
  "portsAttributes": {
    "3000": {
      "label": "Application Server",
      "protocol": "http"
    },
    "8080": {
      "label": "API Server", 
      "protocol": "http"
    },
    "8443": {
      "label": "Secure API",
      "protocol": "https"
    }
  }
}
```

{% data reusables.codespaces.portsattributes-configuration %}

### Automating port visibility settings

You can automate port visibility settings using the `postAttachCommand` property. This ensures consistent security settings every time someone connects to the codespace:

```jsonc
{
  "name": "My Secure Dev Container",
  "image": "mcr.microsoft.com/devcontainers/base:bullseye",
  
  "forwardPorts": [3000, 8080],
  
  "portsAttributes": {
    "3000": {
      "label": "Dev Server (Private)"
    },
    "8080": {
      "label": "API Server (Team Only)"
    }
  },
  
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },
  
  "postAttachCommand": "gh codespace ports visibility 3000:private 8080:org -c \"$CODESPACE_NAME\""
}
```

{% data reusables.codespaces.port-visibility-automation %}

## Security best practices

{% data reusables.codespaces.port-security-best-practices %}

## Working with organization policies

Organization administrators can set policies that restrict which port visibility options are available. For more information, see [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports).

If your organization has port visibility restrictions in place, make sure your dev container automation commands comply with these policies. For example, if your organization disallows public port forwarding, don't use `public` in your `postAttachCommand`.

## Example configurations

The following examples demonstrate different security approaches for common development scenarios.

### Development environment with private ports

```jsonc
{
  "name": "Private Development Environment",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:0-18",
  
  "forwardPorts": [3000, 3001],
  
  "portsAttributes": {
    "3000": {
      "label": "Web Server (Private)",
      "protocol": "http"
    },
    "3001": {
      "label": "API Server (Private)",
      "protocol": "http"
    }
  },
  
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },
  
  "postAttachCommand": "gh cs ports visibility 3000:private 3001:private -c \"$CODESPACE_NAME\""
}
```

### Team collaboration with organization-only ports

```jsonc
{
  "name": "Team Collaboration Environment",
  "image": "mcr.microsoft.com/devcontainers/python:3-bullseye",
  
  "forwardPorts": [5000, 8000],
  
  "portsAttributes": {
    "5000": {
      "label": "Flask App (Team)",
      "protocol": "http"
    },
    "8000": {
      "label": "Django Admin (Team)",
      "protocol": "https"
    }
  },
  
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },
  
  "postAttachCommand": "gh codespace ports visibility 5000:org 8000:org -c \"$CODESPACE_NAME\""
}
```

## Further reading

* [AUTOTITLE](/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)
* [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)
* {% data reusables.codespaces.more-info-devcontainer %}
