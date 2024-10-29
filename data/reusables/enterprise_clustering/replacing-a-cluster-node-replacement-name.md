1. If you're replacing the primary Redis node, in `cluster.conf`, modify the `redis-master` value with the replacement node name.

   {% note %}

   **Note:** If your primary Redis node is also your primary MySQL node, see "[Replacing the primary MySQL node](#replacing-the-primary-mysql-node)."

   {% endnote %}

   For example, this modified `cluster.conf` file specifies a newly provisioned cluster node, `ghe-replacement-data-node-1` as the primary Redis node:

   <pre>
   redis-master = <em>ghe-replacement-data-node-1</em>
   </pre>
