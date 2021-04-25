---
title: Managing your organization's SSH certificate authorities
intro: You can add or delete SSH certificate authorities from your organization.
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

Organization owners can manage an organization's SSH certificate authorities (CA).

You can allow members to access your organization's repositories using SSH certificates you provide by adding an SSH CA to your organization. {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

### Adding an SSH certificate authority

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Deleting an SSH certificate authority

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
