- [Minimum requirements](#minimum-requirements)
- [Storage](#storage)
- [CPU and memory](#cpu-and-memory)

### Minimum requirements

We recommend different hardware configurations depending on the number of user licenses for {% data variables.location.product_location %}. If you provision more resources than the minimum requirements, your instance will perform and scale better.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

If you plan to enable {% data variables.product.prodname_container_registry %} for the users of your instance, more resources are required. For more information about these requirements, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Storage

We recommend a high-performance SSD with high input/output operations per second (IOPS) and low latency for {% data variables.product.prodname_ghe_server %}. Workloads are I/O intensive. If you use a bare metal hypervisor, we recommend directly attaching the disk or using a disk from a storage area network (SAN).

Your instance requires a persistent data disk separate from the root disk. For more information, see "[AUTOTITLE](/admin/overview/system-overview)."

{% ifversion ghes %}

To configure {% data variables.product.prodname_actions %}, you must provide external blob storage. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements)."

{% endif %}

The available space on the root filesystem will be 50% of the total disk size. You can resize your instance's root disk by building a new instance or using an existing instance. For more information, see "[AUTOTITLE](/admin/overview/system-overview#storage-architecture)" and "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity)."

### CPU and memory

The CPU and memory resources that {% data variables.product.prodname_ghe_server %} requires depend on the levels of activity for users, automations, and integrations.

Any VMs you provision for {% data variables.location.product_location %} must use the x86-64 CPU architecture. Other architectures are not supported, such as Aarch64 or arm64.

{% ifversion ghes %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of your {% data variables.product.prodname_ghe_server %} instance, you may need to provision additional CPU and memory resources for your instance. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)."

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Warning:** We recommend that users configure webhook events to notify external systems of activity on {% data variables.product.prodname_ghe_server %}. Automated checks for changes, or _polling_, will negatively impact the performance and scalability of your instance. For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-webhooks)."

{% endwarning %}

For more information about monitoring the capacity and performance of {% data variables.product.prodname_ghe_server %}, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance)."

You can increase your instance's CPU or memory resources. For more information, see "[AUTOTITLE](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-cpu-or-memory-resources)."
