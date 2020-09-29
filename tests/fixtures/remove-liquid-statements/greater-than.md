---
title: Greater Than Version To Deprecate
intro: Remove liquid only
---

## 1
<div class="example1">

{% if page.version ver_gt "2.13" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if page.version == 'dotcom' or page.version ver_gt "2.13" %}

Alpha

{% endif %}

</div>

## 3
<div class="example3">

{% if page.version ver_gt "2.13" %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 4
<div class="example4">

{% if page.version ver_gt "2.16" %}

Alpha

{% else %}

Bravo

{% if page.version ver_gt "2.13" %}

Charlie

{% endif %}
{% endif %}

</div>

## 5
<div class="example5">

{% if page.version ver_lt "2.16" %}

Alpha

{% if page.version ver_gt "2.13" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% if page.version ver_gt "2.13" %}

Alpha

{% if page.version ver_lt "2.16" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 7
<div class="example7">

{% if page.version ver_gt "2.13" %}

Alpha

{% if page.version ver_gt "2.16" %}

Bravo

{% else %}

Charlie

{% endif %}

{% endif %}
</div>

## 8
<div class="example8">

{% if page.version ver_gt "2.13" %}

Alpha

{% else %}

Bravo

{% if page.version != "dotcom" %}

Charlie

{% endif %}

Delta

{% endif %}

</div>

## 9
<div class="example9">

{% if page.version == 'dotcom' %}

Alpha

{% else %}

Bravo

{% if page.version ver_gt "2.16" %}

Charlie

{% endif %}

{% if page.version ver_gt "2.13" %}

Delta

{% endif %}

{% endif %}

</div>

## 10
<div class="example10">

{% if page.version ver_gt "2.13" %}

Alpha

{% else %}

Security alerts for vulnerable dependencies are available in {% data variables.product.prodname_ghe_server %} 2.17+. For more information, see "[Enabling security alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."

{% endif %}

</div>
