## Error: "Current time is earlier than NotBefore condition"

This error can occur when there's too large of a time difference between your IdP and {% data variables.product.product_name %}, which commonly occurs with self-hosted IdPs.

{% ifversion ghes %}To prevent this problem, we recommend pointing your appliance to the same Network Time Protocol (NTP) source as your IdP, if possible. {% endif %}If you encounter this error, make sure the time on your {% ifversion ghes %}appliance{% else %}IdP{% endif %} is properly synced with your NTP server.

If you use ADFS as your IdP, also set `NotBeforeSkew` in ADFS to 1 minute for {% data variables.product.prodname_dotcom %}. If `NotBeforeSkew` is set to 0, even very small time differences, including milliseconds, can cause authentication problems.
