Para especificar um executor auto-hospedado para o seu trabalho, configure `runs-on` no seu arquivo de fluxo de trabalho com etiquetas de executores auto-hospedados.

Todos os executores auto-hospedados possuem a etiqueta `self-hosted` e você pode selecionar qualquer runner auto-hospedado fornecendo apenas a etiqueta `self-hosted`. Como alternativa, você pode usar `self-hosted` em um array com etiquetas adicionais, como etiquetas para um sistema operacional específico ou arquitetura do sistema, para selecionar apenas os executores de tipos que você especificar.
