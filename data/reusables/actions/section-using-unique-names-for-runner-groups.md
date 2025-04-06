
{% ifversion target-runner-groups %}{% ifversion ghec or ghes %}

## Using unique names for runner groups

{% data variables.product.prodname_actions %} requires that runner group names must be unique at the organization level. This means that an organization will no longer be able to create a runner group with the same name as one in the enterprise. In addition, users will see a warning banner on any runner groups that share the same name as a group in the enterprise, suggesting that the organization group should be renamed.

To avoid ambiguity, a workflow will fail if there are duplicate runner groups in the organization and enterprise. To address this, you can either rename one of your runner groups in the organization or enterprise, or you can update your workflow file to add a prefix to the runner group name:

* `org/` or `organization/`
* `ent/` or `enterprise/`

### Example: Using prefixes to differentiate runner groups

{% data reusables.actions.using-prefixes-to-differentiate-runner-groups %}

{% endif %}

{% endif %}
