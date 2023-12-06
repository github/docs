1. SSH into {% data variables.location.product_location %}. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. For more information about SSH access, see "[AUTOTITLE]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)."

   ```shell
   ssh -p 122 admin@HOSTNAME
   ```
