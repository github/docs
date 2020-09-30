---
title: And Greater Than Version To Deprecate 2
intro: Remove liquid only
---

## 1
<div class="example1">

{% if currentVersion ver_gt "enterprise-server@2.13" and currentVersion ver_lt "enterprise-server@2.16" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if currentVersion ver_gt "enterprise-server@2.13" and currentVersion ver_lt "enterprise-server@2.16" %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% if currentVersion == "free-pro-team@latest" %}

Alpha

{% else %}

Bravo

{% if currentVersion ver_gt "enterprise-server@2.13" and currentVersion ver_lt "enterprise-server@2.16" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% if currentVersion != "free-pro-team@latest" %}

Alpha

{% if currentVersion ver_gt "enterprise-server@2.13" and currentVersion ver_lt "enterprise-server@2.16" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if currentVersion ver_gt "enterprise-server@2.13" and currentVersion ver_lt "enterprise-server@2.16" %}

Alpha

{% if currentVersion != "free-pro-team@latest" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>
