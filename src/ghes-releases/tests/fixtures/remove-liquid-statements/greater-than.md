---
title: Greater Than Version To Deprecate
intro: Remove liquid only
---

## 1
<div class="example1">

{% ifversion ghes > 2.13 %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% ifversion fpt or ghes > 2.13 %}

Alpha

{% endif %}

</div>

## 3
<div class="example3">

{% ifversion ghes > 2.13 %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 4
<div class="example4">

{% ifversion ghes > 2.16 %}

Alpha

{% else %}

Bravo

{% ifversion ghes > 2.13 %}

Charlie

{% endif %}

{% endif %}

</div>

## 5
<div class="example5">

{% ifversion ghes < 2.16 %}

Alpha

{% ifversion ghes > 2.13 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% ifversion ghes > 2.13 %}

Alpha

{% ifversion ghes < 2.16 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 7
<div class="example7">

{% ifversion ghes > 2.13 %}

Alpha

{% ifversion ghes > 2.16 %}

Bravo

{% else %}

Charlie

{% endif %}

{% endif %}
</div>

## 8
<div class="example8">

{% ifversion ghes > 2.13 %}

Alpha

{% else %}

Bravo

{% ifversion not fpt %}

Charlie

{% endif %}

Delta

{% endif %}

</div>

## 9
<div class="example9">

{% ifversion fpt %}

Alpha

{% else %}

Bravo

{% ifversion ghes > 2.16 %}

Charlie

{% endif %}

{% ifversion ghes > 2.13 %}

Delta

{% endif %}

{% endif %}

</div>

## 10
<div class="example10">

{% ifversion ghes > 2.13 %}

Alpha

{% else %}

Bravo

{% endif %}

</div>
