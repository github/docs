---
title: Solução de problemas de encaminhamento de porta para codespaces
intro: Etapas de solução de problemas para problemas comuns de encaminhamento de portas.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Encaminhamento de porta
---

Quando um aplicativo em execução em uma saída de codespace gera uma porta para o console, {% data variables.product.prodname_codespaces %}, irá detectar o padrão da URL do host local e encaminhará a porta automaticamente. Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Se uma porta não for redirecionada automaticamente, você poderá redirecioná-la manualmente. Para obter mais informações, consulte "[Encaminhando uma porta](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port). "

Se o encaminhamento de porta estiver configurado, verifique o seguinte:

- Use o alerta de notificação ou clique no URL no Terminal para abrir a porta encaminhada. Digitar `localhost:8000` (como exemplo) na sua máquina local não funcionará se você estiver conectado ao codespace por meio do navegador.
- Certifique-se de verificar se seu aplicativo ainda está sendo executado dentro do seu codespace. Se seu codespace parou após um período de inatividade, você deverá certificar-se de reiniciar o seu aplicativo depois que o codespace for reiniciado.

Normalmente, é possível tornar uma porta encaminhada acessível publicamente, ou dentro da organização à qual um repositório pertence. Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)". Se uma ou ambas as opções para a visibilidade pública ou da organização não estiverem disponíveis, isso indica que uma política a nível da organização foi configurada. Para obter mais informações, consulte "[Restringindo a visibilidade das portas encaminhadas](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports). "
