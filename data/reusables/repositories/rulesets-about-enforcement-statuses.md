While creating or editing your ruleset, you can use enforcement statuses to configure how your ruleset will be enforced.

You can select any of the following enforcement statuses for your ruleset.

   * **{% octicon "play" aria-hidden="true" aria-label="play" %} Active:** your ruleset will be enforced upon creation.{% ifversion repo-rules-enterprise %}
   * **{% octicon "meter" aria-hidden="true" aria-label="meter" %} Evaluate:** your ruleset will not be enforced, but you will be able to monitor which actions would or would not violate rules on the "Rule Insights" page.{% endif %}
   * **{% octicon "skip" aria-hidden="true" aria-label="skip" %} Disabled:** your ruleset will not be enforced{% ifversion repo-rules-enterprise %} or evaluated{% endif %}.

{% ifversion repo-rules-enterprise %}

Using "Evaluate" mode is a great option for testing your ruleset without enforcing it. You can use the "Rule Insights" page to see if the contribution would have violated the rule.

{% endif %}
