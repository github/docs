{% if currentVersion != "free-pro-team@latest" %}
  {% data reusables.enterprise_installation.increasing-cpus-req %} 如果您使用的 CPU 超过 16 个，则无需为每个 CPU 添加 6.5 GB 内存，但应监控您的实例以确保其有足够的内存。
{% endif %}
