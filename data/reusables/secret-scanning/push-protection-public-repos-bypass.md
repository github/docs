{% ifversion secret-scanning-push-protection-for-users %}

   {% note %}

   **Note:** You are required to specify a reason for bypassing push protection if the repository has secret scanning enabled.

   When pushing to a _public_ repository that doesn't have secret scanning enabled, you are still protected from accidentally pushing secrets thanks to _push protection for users_, which is on by default for your user account.

   With push protection for users, GitHub will automatically block pushes to public repositories if these pushes contain supported secrets, but you won't need to specify a reason for allowing the secret, and {% data variables.product.prodname_dotcom %} won't generate an alert. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."

   {% endnote %}

{% endif %}
