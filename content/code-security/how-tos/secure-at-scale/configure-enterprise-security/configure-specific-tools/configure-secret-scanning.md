---
title: Configuring secret scanning for your appliance
shortTitle: Configure secret scanning
intro: You can enable, configure, and disable {% data variables.product.prodname_secret_scanning %} for {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_secret_scanning_caps %} allows users to scan code for accidentally committed secrets.
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-secret-scanning-for-your-appliance
  - /admin/managing-code-security/managing-github-advanced-security-for-your-enterprise/configuring-secret-scanning-for-your-appliance
  - /code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
contentType: how-tos
category:
  - Secure at scale
---

## About {% data variables.product.prodname_secret_scanning %}

If someone checks a secret with a known pattern into a repository, {% data variables.product.prodname_secret_scanning %} catches the secret as it's checked in, and helps you mitigate the impact of the leak. Repository administrators are notified about any commit that contains a secret, and they can quickly view all detected secrets in the **{% data variables.product.prodname_security_and_quality_tab %}** tab for the repository. See [AUTOTITLE](/code-security/concepts/secret-security/secret-scanning).

{% ifversion secret-scanning-ai-generic-secret-detection %}
{% data variables.product.prodname_secret_scanning_caps %} can also detect unstructured secrets, such as passwords, using an AI model ({% data variables.secret-scanning.ai-detected-secrets %}). The model classifies code locally on your appliance's CPUs, with no GPU, hosted LLM, or outbound network connection required, so it works in air-gapped and network-isolated environments.
{% endif %}

## Availability

When the enterprise has [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled, {% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned and user-owned repositories.

## Checking whether your license includes {% data variables.product.prodname_AS %}

{% data reusables.advanced-security.check-for-ghas-license %}
## Prerequisites for {% data variables.product.prodname_secret_scanning %}

* The SSSE3 (Supplemental Streaming SIMD Extensions 3) CPU flag needs to be enabled on the VM/KVM that runs {% data variables.product.prodname_ghe_server %}. For more information about SSSE3, see [Intel 64 and IA-32 Architectures Optimization Reference Manual](https://cdrdv2-public.intel.com/671488/248966-Software-Optimization-Manual-R047.pdf) in the Intel documentation.

* A license for {% data variables.product.prodname_GH_secret_protection %} or {% data variables.product.prodname_GHAS %} (see [AUTOTITLE](/billing/concepts/product-billing/github-advanced-security))

* {% data variables.product.prodname_secret_scanning_caps %} enabled in the management console (see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/enabling-github-advanced-security-for-your-enterprise))
{% ifversion secret-scanning-ai-generic-secret-detection %}
* To use {% data variables.secret-scanning.ai-detected-secrets %}, {% data variables.product.prodname_secret_scanning %} must already be enabled.
{% endif %}

### Checking support for the SSSE3 flag on your vCPUs

The SSSE3 set of instructions is required because {% data variables.product.prodname_secret_scanning %} leverages hardware accelerated pattern matching to find potential credentials committed to your {% data variables.product.prodname_dotcom %} repositories. SSSE3 is enabled for most modern CPUs. You can check whether SSSE3 is enabled for the vCPUs available to your {% data variables.product.prodname_ghe_server %} instance.

1. Connect to the administrative shell for your {% data variables.product.prodname_ghe_server %} instance. See [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Enter the following command:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null; echo $?
   ```

   If this returns the value `0`, it means that the SSSE3 flag is available and enabled. You can now enable {% data variables.product.prodname_secret_scanning %}. See [Enabling {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning) below.

   If this doesn't return `0`, SSSE3 is not enabled on your VM/KVM. You need to refer to the documentation of the hardware/hypervisor on how to enable the flag, or make it available to guest VMs.

## Enabling {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," select **{% data variables.product.prodname_secret_scanning_caps %}**.{% ifversion secret-scanning-validity-check-partner-patterns %}
{% data reusables.enterprise_management_console.save-settings %}

    Optionally, to allow your users to enable validity checks at the enterprise, organization, or repository level, configure validity checks for {% data variables.product.prodname_secret_scanning %}.

1. Click **{% data variables.product.prodname_secret_scanning %} validity checks**. For information about validity checks, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/customize-leak-detection/enable-validity-checks#enabling-validity-checks).

    > [!NOTE]
    > Enabling validity checks will send outbound requests to partner services to verify detected secrets. This means secret metadata will leave your instance. You need to ensure that this aligns with your enterprise's security and compliance policies before enabling.

1. To run a simple connection test to verify that outbound connections are possible, click **Validity checks connection test**.
{% endif %}

{% ifversion secret-scanning-ai-generic-secret-detection %}

## Enabling {% data variables.secret-scanning.ai-detected-secrets %}

> [!NOTE]
> {% data variables.secret-scanning.ai-detected-secrets-caps %} is in {% data variables.release-phases.public_preview %} and subject to change.

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," select **Scan for generic secrets with AI**.
{% data reusables.enterprise_management_console.save-settings %}

The **Scan for generic secrets with AI** instance setting only makes {% data variables.secret-scanning.ai-detected-secrets %} available on your appliance. It doesn't enable the feature for any repository. A repository administrator can enable it for individual repositories, or you can enable it at scale for your organization or enterprise using a security configuration. For more information, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-ai-detected-secrets).

### Adjusting {% data variables.secret-scanning.ai-detected-secrets %} throughput

After a repository administrator enables {% data variables.secret-scanning.ai-detected-secrets %} for a repository, {% data variables.product.github %} queues a historical backfill of existing code and scans new pushes asynchronously. Both processes add CPU load, so start with a small number of repositories, then monitor alert volume and CPU usage before expanding to more.

You can adjust throughput by configuring the following settings. Keep the defaults unless you have a sustained scanning backlog and available CPU capacity to increase throughput.

| Setting | Default | Range | Purpose |
|---|---:|---:|---|
| `secret-scanning.fine-tuned-model-workers-per-queue` | `2` | `1-16` | Number of workers that process incremental AI-detection queues |
| `secret-scanning.classifier-max-concurrent` | `2` | `1-8` | Number of concurrent classification requests |
| `secret-scanning.fine-tuned-model-backfill-workers-per-queue` | `1` | `1-16` | Number of workers that process historical backfill queues |

Increasing these values raises CPU use. To change a setting, run `ghe-config SETTING VALUE` from the administrative shell, then run `ghe-config-apply`. For example:

```shell
ghe-config secret-scanning.fine-tuned-model-workers-per-queue 4
ghe-config-apply
```

Running `ghe-config-apply` may briefly restart services and cause downtime. If you have a persistent backlog you can't resolve by adjusting throughput, contact {% data variables.contact.enterprise_support %}.

{% endif %}

## Disabling {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," deselect **{% data variables.product.prodname_secret_scanning_caps %}**.
{% data reusables.enterprise_management_console.save-settings %}
