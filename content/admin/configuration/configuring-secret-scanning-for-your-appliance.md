---
title: Configuring secret scanning for your appliance
shortTitle: Configuring secret scanning
intro: 'You can enable, configure, and disable {% data variables.product.prodname_secret_scanning %} for {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} allows users to scan code for accidentally committed secrets.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}

### About {% data variables.product.prodname_secret_scanning %}

{% data reusables.secret-scanning.about-secret-scanning %} For more information, see "[About secret scanning](/github/administering-a-repository/about-secret-scanning)."

### Prerequisites

To use {% data variables.product.prodname_secret_scanning %} in {% data variables.product.product_location %} you need these two prerequisites.

- The [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Supplemental Streaming SIMD Extensions 3) CPU flag needs to be enabled on the VM/KVM that runs {% data variables.product.product_location %}. 

- You need an {% data variables.product.prodname_advanced_security %} license.

#### Checking support for the SSSE3 flag on your vCPUs

The SSSE3 set of instructions is required because {% data variables.product.prodname_secret_scanning %} leverages hardware accelerated pattern matching to find potential credentials committed to your {% data variables.product.prodname_dotcom %} repositories. SSSE3 is enabled for most modern CPUs. You can check whether SSSE3 is enabled for the vCPUs available to your {% data variables.product.prodname_ghe_server %} instance.

1. Connect to the administrative shell for your {% data variables.product.prodname_ghe_server %} instance. For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
2. Enter the following command:

```shell
grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
```

If this returns the value `0`, it means that the SSSE3 flag is available and enabled. You can now enable {% data variables.product.prodname_secret_scanning %} for {% data variables.product.product_location %}. For more information, see "[Enabling secret scanning](#enabling-secret-scanning)" below.

If this doesn't return `0`, SSSE3 is not enabled on your VM/KVM. You need to refer to the documentation of the hardware/hypervisor on how to enable the flag, or make it available to guest VMs.

#### Checking whether you have an {% data variables.product.prodname_advanced_security %} license

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Check if there is an **{% data variables.product.prodname_advanced_security %}** entry in the left sidebar.
![Advanced Security sidebar](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

{% data reusables.enterprise_management_console.advanced-security-license %}

### Enabling {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "{% data variables.product.prodname_advanced_security %}," click **{% data variables.product.prodname_secret_scanning_caps %}**.
![Checkbox to enable or disable {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### Disabling {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "{% data variables.product.prodname_advanced_security %}", unselect **{% data variables.product.prodname_secret_scanning_caps %}**.
![Checkbox to enable or disable {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
