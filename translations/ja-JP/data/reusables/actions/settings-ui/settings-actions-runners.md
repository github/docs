{% comment %}このreusableは他のrepo/org/enterprise設定のreusableでのみ使われています。{%- endcomment -%}
1. 左のサイドバーで、{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Actions**をクリックし、続いて**Runners（ランナー）**をクリックしてください。{% else %}**Actions**をクリックしてください。{% ifversion ghes or ghae %}
1. 左のサイドバーで、"Actions"の下の**Runners（ランナー）**をクリックしてください。{% endif %}{% endif %}
