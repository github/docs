---
title: Solución de problemas de la comprobación de GPG para GitHub Codespaces
shortTitle: GPG verification
intro: En este artículo se proporcionan consejos para solucionar problemas de errores relacionados con la firma de las confirmaciones en los espacios de código.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167121'
---
Si habilitas la comprobación de GPG, {% data variables.product.prodname_github_codespaces %} firma automáticamente las confirmaciones en los espacios de código creados a partir de repositorios seleccionados. Para más información, consulta: "[Administración de la comprobación de GPG para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)."

{% data reusables.codespaces.gpg-in-active-codespaces %}

Si {% data variables.product.prodname_github_codespaces %} no puede firmar una confirmación, es posible que veas un error similar al siguiente.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

Puede encontrar este error si: 

- Has deshabilitado la comprobación de GPG e intentas realizar una confirmación normal sin firmar en un espacio de código existente.
- Has habilitado la comprobación de GPG, pero has reemplazado la configuración de Git necesaria para que los datos {% data variables.product.prodname_github_codespaces %} firmen las confirmaciones, por ejemplo, al vincular {% data variables.product.prodname_github_codespaces %} con un repositorio de dotfiles que contiene archivos de configuración de Git.

## Errores después de deshabilitar la comprobación de GPG

Al habilitar la comprobación de GPG, {% data variables.product.prodname_github_codespaces %} firma todas las confirmaciones que realices en los espacios de código de forma predeterminada. Esto ocurre al establecer el `commit.gpgsign` valor de configuración de Git a `true`.

Si ha deshabilitado la comprobación de GPG y está trabajando en un espacio de código existente, este valor seguirá estando establecido en `true`. Esto significa que {% data variables.product.prodname_github_codespaces %} intentará firmar las confirmaciones, pero no podrá hacerlo, ya que has deshabilitado la configuración de comprobación de GPG.

Para seguir realizando confirmaciones normales sin firmar en el espacio de código, restablece `commit.gpgsign` al valor predeterminado de `false` al escribir el siguiente comando en el terminal.

```Shell{:copy}
git config --unset commit.gpgsign
```

Para comprobar que el valor se ha eliminado correctamente de la configuración, escribe `git config --list`. No deberías ver un valor para `commit.gpgsign` en la lista.

## Errores causados por configuraciones en conflicto

Para firmar automáticamente las confirmaciones, {% data variables.product.prodname_github_codespaces %} establece unos valores de configuración de Git determinados en el espacio de código. Si invalidas los valores establecidos por {% data variables.product.prodname_github_codespaces %}, es posible que no puedas firmar las confirmaciones. 

Es posible que invalides accidentalmente estos valores si has vinculado {% data variables.product.prodname_github_codespaces %} con un repositorio dotfiles que contiene archivos de configuración de Git. Para obtener más información sobre el uso de dotfiles con {% data variables.product.prodname_github_codespaces %}, consulta: "[Personalización de {% data variables.product.prodname_github_codespaces %} para tu cuenta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)."

### Comprobación de configuraciones en conflicto

Para firmar las confirmaciones con GPG, {% data variables.product.prodname_github_codespaces %} establece automáticamente los siguientes valores de configuración de Git en el nivel del sistema.

| Opción de configuración | Valor obligatorio |
| --------------------- | -------------- |
| `user.name` | Debe coincidir con el nombre completo establecido en tu perfil de {% data variables.product.prodname_dotcom %} |
| `credential.helper` | Se debe establecer en `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Se debe establecer en `/.codespaces/bin/gh-gpgsign` |

Para comprobar que estos valores se establecen correctamente en un espacio de código, puedes usar el comando `git config --list --show-origin`. Dado que {% data variables.product.prodname_github_codespaces %} establece esta configuración en el nivel del sistema, los valores de configuración necesarios deben proceder de `/usr/local/etc/gitconfig`.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

Además de los valores enumerados anteriormente, pueden producirse errores si los dotfiles usados en los espacios de código contienen cualquiera de los valores siguientes.

- El valor de configuración de Git `user.signingkey`
- El valor de configuración de Git `commit.gpgsign`
- Un `GITHUB_TOKEN` establecido manualmente

### Eliminación de configuraciones en conflicto

Si deseas mantener habilitada la comprobación automática de GPG para {% data variables.product.prodname_github_codespaces %}, deberás eliminar cualquier tipo de configuraciones en conflicto de los dotfiles usados en los espacios de código.

Por ejemplo, si el archivo global `.gitconfig` del equipo local contiene un valor `gpg.program` y lo has insertado en un repositorio de dotfiles que está vinculado a {% data variables.product.prodname_github_codespaces %}, probablemente desearás eliminar `gpg.program` de este archivo y establecerlo en su lugar en el nivel del sistema del equipo local.

{% note %}

**Nota:** los cambios realizados en el repositorio de dotfiles se aplicarán a los nuevos espacios de código que crees, pero no a los espacios de código existentes.

{% endnote %}

1. En el equipo local, abra un terminal.
2. Para quitar el valor en conflicto de `~/.gitconfig` (Mac/Linux) o `C:\Users\YOUR-USER\.gitconfig` (Windows), usa el comando `git config --global --unset`.

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. Inserta el cambio en el repositorio de dotfiles en {% data variables.product.prodname_dotcom %}.
4. Opcionalmente, para mantener la configuración local, establece el valor de nuevo en un archivo de configuración de Git que no insertes en el repositorio de dotfiles. 

   Por ejemplo, puedes usar la marca `--system` para establecer la configuración en el archivo de nivel de sistema en `PATH/etc/gitconfig`, donde `PATH` es el directorio en el que está instalado Git en el sistema.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

Como alternativa, si el repositorio de dotfiles contiene un script de instalación en un archivo reconocido como `install.sh`, puedes usar la variable de entorno `$CODESPACES` para agregar lógica condicional, como por ejemplo establecer únicamente `gpg.program` si no te encuentras en un espacio de código. En el ejemplo siguiente, `-z "$CODESPACES"` devuelve `true` si no estás ubicado en un espacio de código.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Información adicional
- "[Acerca de la verificación de firma de confirmación](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
- [`git config`](https://git-scm.com/docs/git-config) en la documentación oficial de Git
