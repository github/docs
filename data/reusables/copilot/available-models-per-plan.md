> [!NOTE] {% data variables.copilot.copilot_student_short %} and {% data variables.copilot.copilot_free_short %} users have access to models through {% data variables.copilot.copilot_auto_model_selection_short %} only.

{% rowheaders %}

| Available models                               | {% data variables.copilot.copilot_pro_short %}  | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_max_short %} | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
|---------------------------------------------------------|-------------------------------------------------|-----------------------------------------------------|------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %}{% if model.name == 'Claude Fable 5' or model.name == 'Claude Fable 5.1' %}[^claude-fable-5]{% endif %}{% if model.name == 'Claude Sonnet 4.6' %}[^claude-sonnet-46-plans]{% endif %} | {% if model.pro == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro_plus == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.max == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.business == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.enterprise == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

[^gpt54nano]: GPT-5.4 nano is currently only available in the Codex {% data variables.product.prodname_vscode %} extension ({% data variables.copilot.copilot_pro_plus_short %} only) and is not available in {% data variables.copilot.copilot_chat_short %}.

[^claude-sonnet-46-plans]: {% data variables.copilot.copilot_claude_sonnet_46 %} was retired on September 1, 2026, but remains available to individual {% data variables.product.prodname_copilot_short %} subscribers on annual {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} plans. It is not available to subscribers on monthly plans.
