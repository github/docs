      | Column                                      | Description            |
   |---------------------------------------------|----------------------------------------------|
   | Name | Name of the pattern or secret |
   | Alert total | Total number of alerts for the pattern (percentage and absolute numbers) |
   | False positives | Percentage of false positives for the pattern |
   | Bypass rate | Percentage of bypasses for the pattern |
   | {% data variables.product.github %} default | Default behavior for push protection, as recommended by {% data variables.product.github %} |
   | Enterprise setting | **Uneditable at organization level**</br>Current enablement status for push protection</br>Can be `Enabled`, `Disabled`, and `Default`.</br>At enterprise level, `Default` is the default value. |
   | Organization setting | **Only valid at organization level**</br>Current enablement status for push protection</br>Can be `Enabled`, `Disabled`, and `Enterprise` (inherited from the enterprise).</br>`Enterprise` is the default value. |
