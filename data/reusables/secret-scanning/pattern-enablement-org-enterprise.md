   You can enable or disable push protection for individual patterns by using the toggle in the relevant column: "Enterprise setting" at the enterprise level, and "Organization setting" at the organization level.

   The data is limited to the scope, therefore the alert volume, false positives, bypass rate, or availability of custom patterns is reflective of user / alert activity within the _enterprise_ or _organization_.

   The {% data variables.product.github %} default may change over time as we increase precision and promote patterns.

   > [!NOTE] Organization administrators and security teams can override settings configured at the enterprise level.

   | Column                                      | Description            |
   |---------------------------------------------|----------------------------------------------|
   | Name | Name of the pattern or secret |
   | Alert total | Total number of alerts for the pattern (percentage and absolute numbers) |
   | False positives | Percentage of false positives for the pattern |
   | Bypass rate | Percentage of bypasses for the pattern |
   | {% data variables.product.github %} default | Default behavior for push protection, as recommended by {% data variables.product.github %} |
   | Enterprise setting | **Uneditable at organization level**</br>Current enablement status for push protection</br>Can be `Enabled`, `Disabled`, and `Default`.</br>At enterprise level, `Default` is the default value. |
   | Organization setting | **Only valid at organization level**</br>Current enablement status for push protection</br>Can be `Enabled`, `Disabled`, and `Enterprise` (inherited from the enterprise).</br>`Enterprise` is the default value. |
