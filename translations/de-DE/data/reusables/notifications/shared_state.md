{% tip %}

**Tipp:** Wenn Du sowohl Web- als auch E-Mail-Benachrichtigungen erhältst, kannst Du den Gelesen- oder Ungelesen-Status der Benachrichtigung automatisch synchronisieren, sodass Webbenachrichtigungen automatisch als gelesen markiert werden, sobald Du die entsprechende E-Mail-Benachrichtigung gelesen hast. To enable this sync, your email client must be able to view images from {% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %}the `no-reply` email address {% if currentVersion == "github-ae@latest" %}for your {% data variables.product.product_name %} hostname{% elsif enterpriseServerVersions contains currentVersion %}for {% data variables.product.product_location %}, which your site administrator configures{% endif %}{% endif %}.

{% endtip %}
