{% note %}

**Nota:** A API Checks procura apenas por pushes no repositório onde o conjunto de verificação ou execução de verificação foram criadas. Pushes para um branch em um repositório bifurcado não foi detectado e retorna um array `pull_requests` vazio e um valor `null` para `head_branch`.

{% endnote %}
