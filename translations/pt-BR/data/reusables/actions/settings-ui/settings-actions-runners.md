{% comment %}This reusable is only to be used in other repo/org/enterprise setting reusables.{%- endcomment -%}
1. In the left sidebar, click {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Actions**, then click **Runners**.{% else %}**Actions**.{% ifversion ghes or ghae %}
1. In the left sidebar, under "Actions", click **Runners**.{% endif %}{% endif %}
