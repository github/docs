1. SSH em {% data variables.product.product_location %}. If your instance comprises multiple nodes, for example if high availability or geo-replication are configured, SSH into the primary node. If you use a cluster, you can SSH into any node. For more information about SSH access, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
