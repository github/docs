{% ifversion ghec %}
If your license includes {% data variables.visual_studio.prodname_vss_ghe %}, you can identify whether a user account on {% data variables.product.prodname_dotcom_the_website %} has successfully matched with a {% data variables.product.prodname_vs %} subscriber by downloading the CSV file that contains additional license details. The license status will be one of the following.
- "Matched": The user account on {% data variables.product.prodname_dotcom_the_website %} is linked with a {% data variables.product.prodname_vs %} subscriber.
- "Pending Invitation": An invitation was sent to a {% data variables.product.prodname_vs %} subscriber, but the subscriber has not accepted the invitation.
- Blank: There is no {% data variables.product.prodname_vs %} association to consider for the user account on {% data variables.product.prodname_dotcom_the_website %}.
{% endif %}
