---
title: Managing your organization's SSH certificate authorities
intro: You can add or delete SSH certificate authorities from your organization.
product: '{{ site.data.reusables.gated-features.ssh-certificate-authorities }}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Organization owners can manage an organization's SSH certificate authorities (CA).

You can allow members to access your organization's repositories using SSH certificates you provide by adding an SSH CA to your organization. {{ site.data.reusables.organizations.can-require-ssh-cert }} For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

### Adding an SSH certificate authority

{{ site.data.reusables.organizations.add-extension-to-cert }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.new-ssh-ca }}
{{ site.data.reusables.organizations.require-ssh-cert }}

### Deleting an SSH certificate authority

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.delete-ssh-ca }}
