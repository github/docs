* **Repository administrators** can only exclude content for their own repositories. This affects {% data variables.product.prodname_copilot_short %} users working within those specific repositories.
* **Organization owners** can exclude content for users assigned a {% data variables.product.prodname_copilot_short %} seat through their organization.

{% ifversion ghec %}

<!-- expires 2024-11-08 -->

  > [!NOTE] In the current {% data variables.release-phases.public_preview %} release, organization-level settings for content exclusion typically apply to all {% data variables.product.prodname_copilot_short %} users in the enterprise. This will change with the general availability (GA) release of this feature on November 8th, 2024.
  >
  > **_Before November 8th:_**
  > * **If enterprise owners do not set rules**: Organization-level rules will continue to apply to all users across the enterprise, functioning as they do now, until November 8th.
  > * **If enterprise owners set a rule**: Once enterprise-level rules are applied, organization-level rules will only apply to users who are assigned a {% data variables.product.prodname_copilot_short %} seat from the organization where the rule is set.<br><br>
  >
  > **_After November 8th:_**
  > * Organization-level rules will no longer apply enterprise-wide. They will be limited to users who are assigned a {% data variables.product.prodname_copilot_short %} seat from the organization where the rule is set.

<!-- end expires 2024-11-08 -->

* **Enterprise owners** can apply exclusion rules to all {% data variables.product.prodname_copilot_short %} users in the enterprise.

{% endif %}
