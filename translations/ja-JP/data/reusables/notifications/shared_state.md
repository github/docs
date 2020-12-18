{% tip %}

**Tip:** Web通知とメール通知の両方を受信する場合、通知の既読あるいは未読状態を自動的に同期して、対応するメール通知を読んだら自動的にWeb通知が既読としてマークされるようにできます。 To enable this sync, your email client must be able to view images from {% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %}the `no-reply` email address {% if currentVersion == "github-ae@latest" %}for your {% data variables.product.product_name %} hostname{% elsif enterpriseServerVersions contains currentVersion %}for {% data variables.product.product_location %}, which your site administrator configures{% endif %}{% endif %}.

{% endtip %}
