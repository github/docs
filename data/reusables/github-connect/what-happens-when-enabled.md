When you enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.location.product_location %} and an enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

Enabling {% data variables.product.prodname_github_connect %} creates a {% data variables.product.prodname_github_app %} owned by the enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.prodname_ghe_server %} uses the {% data variables.product.prodname_github_app %}'s credentials to make requests to {% data variables.product.prodname_ghe_cloud %}.

{% data variables.product.prodname_ghe_server %} stores credentials from the {% data variables.product.prodname_github_app %}. The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.

* An authentication token, which is valid for one hour
* A private key, which is used to generate a new authentication token
