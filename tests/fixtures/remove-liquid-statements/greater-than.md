---
title: Greater Than Version To Deprecate
intro: Remove liquid only
---

## 1
<div class="example1">

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% endif %}

</div>

## 3
<div class="example3">

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 4
<div class="example4">

{% if currentVersion ver_gt "enterprise-server@2.16" %}

Alpha

{% else %}

Bravo

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Charlie

{% endif %}
{% endif %}

</div>

## 5
<div class="example5">

{% if currentVersion ver_lt "enterprise-server@2.16" %}

Alpha

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% if currentVersion ver_lt "enterprise-server@2.16" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 7
<div class="example7">

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% if currentVersion ver_gt "enterprise-server@2.16" %}

Bravo

{% else %}

Charlie

{% endif %}

{% endif %}
</div>

## 8
<div class="example8">

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% else %}

Bravo

{% if currentVersion != "free-pro-team@latest" %}

Charlie

{% endif %}

Delta

{% endif %}

</div>

## 9
<div class="example9">

{% if currentVersion == "free-pro-team@latest" %}

Alpha

{% else %}

Bravo

{% if currentVersion ver_gt "enterprise-server@2.16" %}

Charlie

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Delta

{% endif %}

{% endif %}

</div>

## 10
<div class="example10">

{% if currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% else %}

Security alerts for vulnerable dependencies are available in {{ site.data.variables.product.prodname_ghe_server }} 2.17+. For more information, see "[Enabling security alerts for vulnerable dependencies on {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."

{% endif %}

</div>
