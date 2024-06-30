A content exclusion setting **only applies to people who meet each of the following criteria**:
* They have been granted a seat as part of a {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %} subscription
* They are members of the same {% ifversion fpt %}organization{% else %}enterprise{% endif %} in which the content exclusion is configured

Anyone else who can access the specified files will still see code completion suggestions and {% data variables.product.prodname_copilot_chat %} responses referencing the specified files.
