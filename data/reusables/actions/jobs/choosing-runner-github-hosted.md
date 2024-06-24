{% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion not ghes %}

If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`.

The value for runs-on, when you are using a {% data variables.product.prodname_dotcom %}-hosted runner, is a runner label or the name of a runner group. The labels for the standard {% data variables.product.prodname_dotcom %}-hosted runners are shown in the following tables.

For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners)."

{% data reusables.actions.supported-github-runners %}

In addition to the standard {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.product.prodname_dotcom %} offers customers on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %} plans a range of managed virtual machines with advanced features - for example, more cores and disk space, GPU-powered machines, and ARM-powered machines. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners)."

{% note %}

**Note:** The `-latest` runner images are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

**Warning:** Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support.

{% endwarning %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)."

{% endif %}
