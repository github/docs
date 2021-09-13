---
title: Page versioned for all Enterprise releases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == 'free-pro-team@latest' %}

This text should only render on non-Enterprise

{% endif %}


{% if enterpriseServerVersions contains currentVersion %}

This text should render on any actively supported version of Enterprise Server

{% endif %}
