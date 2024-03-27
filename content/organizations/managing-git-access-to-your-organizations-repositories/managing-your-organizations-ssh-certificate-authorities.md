---
title: Managing your organization's SSH certificate authorities
intro: You can add or delete SSH certificate authorities from your organization.
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SSH authorities
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
---

You can allow members to access your organization's repositories using SSH certificates you provide by adding an SSH CA to your organization. {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Adding an SSH certificate authority

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)."

{% data reusables.enterprise.certificate-authority-usage %}

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
{% ifversion ssh-ca-expires %}

## Upgrading an SSH certificate authority

CAs uploaded to your organization {% ifversion ghec %}prior to March 27th, 2024,{% elsif ghes %}before {% data variables.product.prodname_ghe_server %} version 3.13{% endif %} allow the use of non-expiring certificates. To learn more about why expirations are now required for new CAs, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#issuing-certificates)." You can upgrade an existing CA to prevent it from issuing non-expiring certificates. For best security, we strongly recommend upgrading all your CAs once you validate you're not reliant on non-expiring certificates.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "SSH Certificate Authorities", to the right of the CA you want to upgrade, click **Upgrade**.
1. Read the warning, then click **Upgrade**.

After upgrading the CA, non-expiring certificates signed by that CA will be rejected.
{% endif %}
