---
title: Configuring secret scanning for your appliance
shortTitle: Configuring secret scanning
intro: 'You can enable, configure, and disable {% data variables.product.prodname_secret_scanning %} for {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} allows users to scan code for accidentally committed secrets.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
---

{% data reusables.secret-scanning.beta %}

## About {% data variables.product.prodname_secret_scanning %}

If someone checks a secret with a known pattern into a repository, {% data variables.product.prodname_secret_scanning %} catches the secret as it's checked in, and helps you mitigate the impact of the leak. Repository administrators are notified about any commit that contains a secret, and they can quickly view all detected secrets in the Security tab for the repository. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)."

## Checking whether your license includes {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Prerequisites for {% data variables.product.prodname_secret_scanning %}

- The [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Supplemental Streaming SIMD Extensions 3) CPU flag needs to be enabled on the VM/KVM that runs {% data variables.product.product_location %}.

- A license for {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_secret_scanning_caps %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

### Checking support for the SSSE3 flag on your vCPUs

The SSSE3 set of instructions is required because {% data variables.product.prodname_secret_scanning %} leverages hardware accelerated pattern matching to find potential credentials committed to your {% data variables.product.prodname_dotcom %} repositories. SSSE3 is enabled for most modern CPUs. You can check whether SSSE3 is enabled for the vCPUs available to your {% data variables.product.prodname_ghe_server %} instance.

1. Connect to the administrative shell for your {% data variables.product.prodname_ghe_server %} instance. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
2. Enter the following command:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   If this returns the value `0`, it means that the SSSE3 flag is available and enabled. You can now enable {% data variables.product.prodname_secret_scanning %} for {% data variables.product.product_location %}. For more information, see "[Enabling {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning)" below.

   If this doesn't return `0`, SSSE3 is not enabled on your VM/KVM. You need to refer to the documentation of the hardware/hypervisor on how to enable the flag, or make it available to guest VMs.

## Enabling {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **{% data variables.product.prodname_secret_scanning_caps %}**.
![Checkbox to enable or disable {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## Disabling {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," unselect **{% data variables.product.prodname_secret_scanning_caps %}**.
![Checkbox to enable or disable {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
