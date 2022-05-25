1. Enter the details for your new custom pattern:
   1. You must at least provide the name for your pattern, and a regular expression for the format of your secret pattern.
   1. You can click **More options {% octicon "chevron-down" aria-label="down" %}** to provide other surrounding content or additional match requirements for the secret format.
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %}
   ![Create a custom {% data variables.product.prodname_secret_scanning %} pattern form](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
   {% else %}
   ![Create a custom {% data variables.product.prodname_secret_scanning %} pattern form](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png)
   {% endif %}
