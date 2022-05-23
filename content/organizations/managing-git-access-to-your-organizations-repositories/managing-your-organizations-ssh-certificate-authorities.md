---
title: Managing your organization's SSH certificate authorities
intro: You can add or delete SSH certificate authorities from your organization.
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SSH authorities
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
---

You can allow members to access your organization's repositories using SSH certificates you provide by adding an SSH CA to your organization. {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Adding an SSH certificate authority

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. For more information, see "[About SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

## Deleting an SSH certificate authority

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
