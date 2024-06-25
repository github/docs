>[!NOTE]
> On an instance in a cluster configuration, former primary nodes were able to access the newly promoted nodes after failover. This was fixed in patch release
{%- ifversion ghes = 3.12 %} 3.12.2{%- endif %}
{%- ifversion ghes = 3.11 %} 3.11.8{%- endif %}
{%- ifversion ghes = 3.10 %} 3.10.10{%- endif %}
{%- ifversion ghes = 3.9  %} 3.9.13{%- endif %}. For more information, see
{%- ifversion ghes = 3.12 %} "[AUTOTITLE](/enterprise-server@3.12/admin/release-notes#3.12.2-security-fixes)."{%- endif %}
{%- ifversion ghes = 3.11 %} "[AUTOTITLE](/enterprise-server@3.11/admin/release-notes#3.11.8-security-fixes)."{%- endif %}
{%- ifversion ghes = 3.10 %} "[AUTOTITLE](/enterprise-server@3.10/admin/release-notes#3.10.10-security-fixes)."{%- endif %}
{%- ifversion ghes = 3.9  %} "[AUTOTITLE](/enterprise-server@3.9/admin/release-notes#3.9.13-security-fixes)."{%- endif %}
>
> {% data reusables.enterprise_clustering.failover-blocks-ips %}
>
> Additionally, the `ghe-cluster-block-ips`, `ghe-cluster-block-ip`, `ghe-cluster-unblock-ips`, and `ghe-cluster-unblock-ip` commands were also introduced in these patch releases. With these commands, you can manually control which IPs can access your newly promoted cluster, and avoid the potentially lengthy configuration run associated with running the whole `ghe-cluster-failover` command.
