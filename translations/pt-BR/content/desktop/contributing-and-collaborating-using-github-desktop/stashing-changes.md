---
title: Ocultar alterações
intro: Você pode salvar temporariamente as alterações sem fazer commit delas em um branch, ao ocultar as alterações.
versions:
  free-pro-team: '*'
---

### Sobre alterações ocultas

Para aplicar as alterações ao seu repositório, você deve salvar os arquivos e, em seguida, fazer o commit das alterações em um branch. Se você salvou as alterações que ainda não estão prontas para fazer commit, você pode ocultar as alterações para mais tarde. Ao ocultar as alterações, estas serão temporariamente removidas dos arquivos e você pode optar por restaurar ou descartar as alterações posteriormente. Você só pode ocultar um conjunto de alterações por vez com {% data variables.product.prodname_desktop %}. Se você usar {% data variables.product.prodname_desktop %} para ocultar as alterações, todas as alterações não salvas serão ocultas. Depois que você ocultar alterações em um branch, você pode alterar seus branches com segurança ou fazer outras alterações no seu branch atual.

Se você usar {% data variables.product.prodname_desktop %} para trocar de branches enquanto salva, mas não efetuou o commit e as alterações, {% data variables.product.prodname_desktop %} irá solicitar que você oculte as alterações ou as traga para o outro branch. Para obter mais informações, consulte "[Gerenciar branches](/desktop/contributing-to-projects/managing-branches#switching-between-branches)".

### Ocultar alterações

{% data reusables.desktop.click-changed-files-header %}
{% data reusables.desktop.click-stash-all-changes %}

### Restaurar alterações ocultas

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-restore %}

### Descartar alterações ocultas

{% data reusables.desktop.navigate-to-stashed-changes %}
{% data reusables.desktop.click-stashed-changes %}
{% data reusables.desktop.click-discard %}
