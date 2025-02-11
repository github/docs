1. If you're replacing the primary Redis node, in `cluster.conf`, modify the `redis-master` value with the replacement node name.

   > [!NOTE]
   > If your primary Redis node is also your primary MySQL node, see [Replacing the primary database node](#replacing-the-primary-database-node-mysql-or-mysql-and-mssql).

   For example, this modified `cluster.conf` file specifies a newly provisioned cluster node, `ghe-replacement-data-node-1` as the primary Redis node:

   <pre>
   redis-master = <em>ghe-replacement-data-node-1</em>
   </pre>
