{% rowheaders %}

| Available models in chat                                | {% data variables.copilot.copilot_free_short %} | {% data variables.copilot.copilot_student_short %} | {% data variables.copilot.copilot_pro_short %}  | {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.copilot_enterprise_short %} |
|---------------------------------------------------------|-------------------------------------------------|----------------------------------------------|-------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| {% for model in tables.copilot.model-supported-plans %} |
| {{ model.name }}{% if model.name == 'GPT-5.4 nano' %}[^gpt54nano]{% endif %} | {% if model.free == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.student == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.pro_plus == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.business == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} | {% if model.enterprise == true %}{% octicon "check" aria-label="Included" %}{% else %}{% octicon "x" aria-label="Not included" %}{% endif %} |
| {% endfor %}                                            |

{% endrowheaders %}

[^gpt54nano]: GPT-5.4 nano is currently only available in the Codex {% data variables.product.prodname_vscode %} extension ({% data variables.copilot.copilot_pro_plus_short %} only) and is not available in {% data variables.copilot.copilot_chat_short %}.
