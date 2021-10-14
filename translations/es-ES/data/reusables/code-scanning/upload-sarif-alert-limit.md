{% note %}

**Notas:**
- SARIF upload supports a maximum of {% ifversion ghae-next or fpt or ghes > 3.0 %}5000{% else %}1000{% endif %} results per upload. Cualquier resultado que sobrepase este límite se ignorará. Si una herramienta genera demasiados resultados, debes actualizar la configuración para enfocarte en los resultados de las reglas o consultas más importantes.

 - For each upload, SARIF upload supports a maximum size of 10 MB for the `gzip`-compressed SARIF file. Any uploads over this limit will be rejected. If your SARIF file is too large because it contains too many results, you should update the configuration to focus on results for the most important rules or queries.

{% endnote %}
