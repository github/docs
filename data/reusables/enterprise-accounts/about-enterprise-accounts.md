## About enterprise accounts on {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion fpt %}

Your enterprise account on {% data variables.product.prodname_dotcom_the_website %} allows you to manage multiple organizations. Your enterprise account must have a handle, like an organization or personal account on {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

The enterprise account on {% ifversion ghes %}{% data variables.product.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} allows you to manage the organizations{% ifversion ghes %} on{% elsif ghae %} owned by{% endif %} your {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} instance{% elsif ghae %}enterprise{% endif %}.

{% endif %}

Organizations are shared accounts where enterprise members can collaborate across many projects at once. Organization owners can manage access to the organization's data and projects with sophisticated security and administrative features. For more information, see {% ifversion fpt %}"[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)."{% elsif ghes or ghae %}"[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)" and "[Managing users, organizations, and repositories](/admin/user-management)."{% endif %}

{% ifversion fpt %}

Enterprise owners can create organizations and link the organizations to the enterprise. After you add organizations to your enterprise account, you can manage and enforce policies for the organizations. Specific enforcement options vary by setting; generally, you can choose to enforce a single policy for every organization in your enterprise account or allow owners to set policy on the organization level. For more information, see "[Setting policies for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account)."

{% elsif ghes or ghae %}

For more information about the management of policies for your enterprise account, see "[Setting policies for your enterprise](/admin/policies)."

{% endif %}

## About administration of your enterprise account

{% ifversion ghes or ghae %}

From your enterprise account on {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.prodname_ghe_server %} instance{% endif %}, administrators can view enterprise membership and manage the following for the {% ifversion ghes %}{% data variables.product.prodname_ghe_server %} instance{% elsif ghae %}enterprise on {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- License usage{% endif %}
- Security ({% ifversion ghae %}single sign-on, IP allow lists, {% endif %}SSH certificate authorities, two-factor authentication)
- Enterprise policies for organizations owned by the enterprise account

{% endif %}

{% ifversion ghes %}

### About administration of your enterprise account on {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghes %}When you try or purchase {% data variables.product.prodname_enterprise %}, you can{% ifversion ghes %} also{% endif %} create an enterprise account for {% data variables.product.prodname_ghe_cloud %} on {% data variables.product.prodname_dotcom_the_website %}. Administrators for the enterprise account on {% data variables.product.prodname_dotcom_the_website %} can view membership and manage the following for the enterprise account{% ifversion ghes %} on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Billing and usage (services on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, user licenses)
- Security (single sign-on, IP allow lists, SSH certificate authorities, two-factor authentication)
- Enterprise policies for organizations owned by the enterprise account

If you use both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, you can also manage the following for {% data variables.product.prodname_ghe_server %} from your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. 

- Billing and usage for {% data variables.product.prodname_ghe_server %} instances
- Requests and support bundle sharing with {% data variables.contact.enterprise_support %}

You can also connect the enterprise account on {% data variables.product.product_location_enterprise %} to your enterprise account on {% data variables.product.prodname_dotcom_the_website %} to see license usage details for your {% data variables.product.prodname_enterprise %} subscription from {% data variables.product.prodname_dotcom_the_website %}. For more information, see {% ifversion fpt %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."{% endif %}

For more information about the differences between {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, see "[{% data variables.product.prodname_dotcom %}'s products](/get-started/learning-about-github/githubs-products)." {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## About billing for your enterprise account

The bill for your enterprise account includes the monthly cost for each member of your enterprise. The bill includes {% ifversion fpt %}any paid licenses in organizations outside of your enterprise account, subscriptions to apps in {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion fpt or ghae %}additional paid services for your enterprise{% ifversion fpt %} like data packs for {% data variables.large_files.product_name_long %},{% endif %} and{% endif %} usage for {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion fpt %}

For more information about billing for your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

For more information about billing for {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."

{% endif %}

{% ifversion fpt or ghes %}

{% ifversion fpt %}

{% data variables.product.prodname_enterprise %} offers two deployment options. In addition to {% data variables.product.prodname_ghe_cloud %}, you can use {% data variables.product.prodname_ghe_server %} to host development work for your enterprise in your data center or supported cloud provider. {% endif %}Enterprise owners on {% data variables.product.prodname_dotcom_the_website %} can use an enterprise account to manage payment and licensing for {% data variables.product.prodname_ghe_server %} instances. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products#github-enterprise)" and "[Managing your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise)."

{% endif %}

## Further reading

- "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)" in the GraphQL API documentation
