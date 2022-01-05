---
title: And Greater Than Version To Deprecate 2
intro: Remove liquid only
---

## 1
<div class="example1">

{% ifversion ghes > 2.13 and ghes < 2.16 %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% ifversion ghes > 2.13 and ghes < 2.16 %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% ifversion fpt %}

Alpha

{% else %}

Bravo

{% ifversion ghes > 2.13 and ghes < 2.16 %}

Charlie

{% endif %}

{% endif %}

</div>

## 4
<div class="example4">

{% ifversion not fpt %}

Alpha

{% ifversion ghes > 2.13 and ghes < 2.16 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% ifversion ghes > 2.13 and ghes < 2.16 %}

Alpha

{% ifversion not fpt %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>
