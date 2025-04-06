{% ifversion repo-rules %}

Organization owners can roll out dependency review at scale by enforcing the use of the {% data variables.dependency-review.action_name %} across repositories in the organization. This involves the use of repository rulesets for which you'll set the {% data variables.dependency-review.action_name %} as a required workflow, which means that pull requests can only be merged once the workflow passes all the required checks. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/enforcing-dependency-review-across-an-organization)."

{% endif %}
