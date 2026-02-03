{% rowheaders %}

| Model                                               | Multiplier for **paid plans** | Multiplier for **{% data variables.copilot.copilot_free_short %}** |
|-----------------------------------------------------|-------------------------------|--------------------------------------------------------------------|
| {% for model in tables.copilot.model-multipliers %} |
| {{ model.name }}                                    | {{ model.multiplier_paid }}   | {{ model.multiplier_free }}                                        |
| {% endfor %}                                        |

{% endrowheaders %}
