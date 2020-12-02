{% tip %}

**提示：**如果您同时接收 Web 和电子邮件通知，您可以自动同步通知的已读或未读状态，以便在您阅读相应的电子邮件通知后，Web 通知自动标记为已读。 To enable this sync, your email client must be able to view images from {% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %}the `no-reply` email address {% if currentVersion == "github-ae@latest" %}for your {% data variables.product.product_name %} hostname{% elsif enterpriseServerVersions contains currentVersion %}for {% data variables.product.product_location %}, which your site administrator configures{% endif %}{% endif %}.

{% endtip %}
