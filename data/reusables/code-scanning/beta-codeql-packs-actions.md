{% ifversion fpt %}

{% note %}

**Note:** Use of {% data variables.product.prodname_codeql %} query packs with {% data variables.product.prodname_code_scanning %} is currently in beta and subject to change. To use this beta functionality, update your workflow to specify the beta release of the _codeql-action_.

```
 - uses: github/codeql-action/init@v1
   with:
     tools: https://github.com/github/codeql-action/releases/tag/codeql-bundle-v2.6.0-beta.1
```

{% endnote %}

{% endif %}
