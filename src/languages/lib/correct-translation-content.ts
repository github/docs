interface CorrectionContext {
  code?: string
  dottedPath?: string
  relativePath?: string
  skipOrphanStripping?: boolean
  [key: string]: unknown
}

export function correctTranslatedContentStrings(
  content: string,
  englishContent: string,
  context: CorrectionContext = {},
): string {
  // Require content inside the tag, so the later {% } to {% endif %} recovery still matches.
  content = content.replace(/\{\s*%(-?)(\s*\S[^%]*?\s*)(-?)%\s*\}/g, '{%$1$2$3%}')

  content = content.replace(/\{\{(?!%)([^{}]*[^{}%])%(\}\})/g, '{{$1$2')

  content = content.replace(
    /\{%(-?)\s+(variables|reusables)\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data $2.$3$4',
  )
  content = content.replace(
    /\{%(-?)\s+(product\.[A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data variables.$2$3',
  )

  content = content.replace(
    /\{%(-?)\s*data\.(variables|reusables)\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data $2.$3$4',
  )
  content = content.replace(
    /\{%(-?)\s*data\.(product\.[A-Za-z0-9._-]+)(\s*-?%\})/g,
    '{%$1 data variables.$2$3',
  )

  content = content.replace(
    /\{%(-?)\s*data\s+(?:variables|reusables)(?:\.\s*[A-Za-z0-9_-]+)+(?=\s*-?%\})/g,
    (path) => path.replace(/\.\s+/g, '.'),
  )

  content = content.replace(/^([ \t]*)([*-]) ?\n[ \t]+/gm, '$1$2 ')
  content = content.replace(/^\|[ \t]*\n((?:[ \t]+\S[^\n]*(?:\n|$))+)/gm, (_match, block) => {
    const parts = block
      .split('\n')
      .filter((line: string) => line.length > 0)
      .map((line: string) => line.replace(/^[ \t]+/, ''))
    const joined = parts.reduce((acc: string, part: string) => {
      const needsSpace = /[\p{L}\p{N}]$/u.test(acc) && /^[\p{L}\p{N}]/u.test(part)
      return acc + (needsSpace ? ' ' : '') + part
    })
    return `| ${joined}${block.endsWith('\n') ? '\n' : ''}`
  })

  content = joinDanglingMarkers(content)

  if (content.startsWith('\n') && !englishContent.startsWith('\n')) {
    content = content.replace(/^\n[ \t]*/, '')
  }

  content = content.replace(/\{%(-?)data (variables|reusables)\./g, '{%$1 data $2.')

  if (context.relativePath?.endsWith('/securely-using-pull_request_target.md')) {
    content = content.replace(
      /\{% endif %\}([^{}]*?)\{% ifversion default-pull-req-target-policy %\}/g,
      '{% ifversion default-pull-req-target-policy %}$1{% endif %}',
    )
  }

  if (
    context.code === 'es' &&
    (context.dottedPath === 'reusables.gated-features.dependabot-custom-auto-triage-rules' ||
      context.relativePath?.endsWith(
        'data/reusables/gated-features/dependabot-custom-auto-triage-rules.md',
      ))
  ) {
    content = content.replace(
      /(están disponibles en repositorios públicos y en cualquier repositorio propiedad de una organización en \{% data variables\.product\.prodname_team %\} con \[\{% data variables\.product\.prodname_GH_code_security %\}\]\(\/get-started\/learning-about-github\/about-github-advanced-security\) habilitado\.\n\n)\{%- ifversion fpt %\}( \{% data variables\.dependabot\.custom_rules_caps %\} para \{% data variables\.product\.prodname_dependabot_alerts %\} están disponibles en repositorios públicos y en cualquier repositorio propiedad de una organización en \{% data variables\.product\.prodname_team %\} o )/,
      '$1{%- elsif ghec %}$2',
    )
  }

  if (
    context.code === 'es' &&
    (context.dottedPath === 'reusables.actions.service-container-host-runner' ||
      context.relativePath?.endsWith('data/reusables/actions/service-container-host-runner.md'))
  ) {
    content = content.replace(
      /(En el ejemplo se usa el ejecutor hospedado en \{% data variables\.product\.prodname_dotcom %\} `ubuntu-latest` \{% ifversion not ghes %\}) (como host de Docker\.)/,
      '$1 {%- endif %} $2',
    )
  }

  if (context.code === 'es') {
    content = content.replace(/\{%:/g, '{%')

    content = content.replaceAll('{% advertencia %}', '{% warning %}')
    content = content.replaceAll('{% siVersion ', '{% ifversion ')
    content = content.replaceAll('{%- siVersion ', '{%- ifversion ')

    content = content.replaceAll('{% vulnerables variables.', '{% data variables.')
    content = content.replaceAll('{% datos variables', '{% data variables')
    content = content.replaceAll('{% de datos variables', '{% data variables')
    content = content.replaceAll('{% datos reusables', '{% data reusables')
    content = content.replace(
      /\{%(-?)\s*[\p{L}\p{M}]+\s+de datos (variables|reusables)\./gu,
      '{%$1 data $2.',
    )
    content = content.replace(
      /\{%(-?)\s*de datos [\p{L}\p{M}]+ (variables|reusables)\./gu,
      '{%$1 data $2.',
    )
    content = content.replace(
      /\{%(-?)\s*[\p{L}\p{M}]+\s+de\s+(variables|reusables)\./gu,
      '{%$1 data $2.',
    )
    content = content.replaceAll('{% data reutilizables.', '{% data reusables.')
    content = content.replaceAll('{% datos reutilizables.', '{% data reusables.')
    content = content.replaceAll('{% datos repositorios.', '{% data reusables.repositories.')
    content = content.replaceAll('{% datos de variables.', '{% data variables.')
    content = content.replaceAll('{% variables de datos.', '{% data variables.')
    content = content.replaceAll('{% los datos variables.', '{% data variables.')
    content = content.replaceAll('{%- los datos variables.', '{%- data variables.')
    content = content.replaceAll('{% Datos variables', '{% data variables')
    content = content.replaceAll('{% dato variables', '{% data variables')
    content = content.replaceAll('{% comentario %}', '{% comment %}')
    content = content.replaceAll('{%- comentario %}', '{%- comment %}')
    content = content.replaceAll('{% si ', '{% if ')
    content = content.replaceAll('{% sin procesar %}', '{% raw %}')
    content = content.replaceAll('{% %} sin procesar', '{% raw %}')
    content = content.replace(/\{%\s*%?sin formato\s*\}/g, '{% raw %}')
    content = content.replaceAll(
      '{% para glosario en glosarios %}',
      '{% for glossary in glossaries %}',
    )
    content = content.replaceAll('{{ glosario.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{{ glosario.description }}', '{{ glossary.description }}')
    content = content.replaceAll('{{ glosario.descripción }}', '{{ glossary.description }}')
    content = content.replace(
      /\{%-? (?:ifversion|elsif|if) [^%]*?(?:\by\/o\b|\bo\b)[^%]*?%\}/g,
      (match) => {
        return match.replace(/ y\/o /g, ' or ').replace(/ o /g, ' or ')
      },
    )
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\bno\b[^%]*?%\}/g, (match) => {
      return match.replace(/ no /g, ' not ')
    })
    content = content.replace(/\{%-? para (?:la )?entrada en /g, (match) => {
      return match.replace(/para (?:la )?entrada en/, 'for entry in')
    })
    content = content.replace(/\{%-? para el modelo en /g, (match) => {
      return match.replace('para el modelo en', 'for model in')
    })
    content = content.replace(/\{%-? cuando /g, (match) => {
      return match.replace('cuando', 'when')
    })
    content = content.replaceAll('{% icono ', '{% octicon ')
    content = content.replaceAll('{%- icono ', '{%- octicon ')
    content = content.replaceAll('{% alto ', '{% octicon ')
    content = content.replaceAll('{%- alto ', '{%- octicon ')
    content = content.replaceAll('{% octicon "bombilla"', '{% octicon "light-bulb"')
    content = content.replaceAll('{%- octicon "bombilla"', '{%- octicon "light-bulb"')
    content = content.replaceAll('{% capturar ', '{% capture ')
    content = content.replaceAll('{%- capturar ', '{%- capture ')
    content = content.replaceAll('{% nota %}', '{% note %}')
    content = content.replaceAll('{%- nota %}', '{%- note %}')
    content = content.replaceAll('{%- nota -%}', '{%- note -%}')
    content = content.replaceAll('{% otra %}', '{% else %}')
    content = content.replaceAll('{%- otra %}', '{%- else %}')
    content = content.replaceAll('{% encabezados de fila %}', '{% rowheaders %}')
    content = content.replaceAll('{%- encabezados de fila %}', '{%- rowheaders %}')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\so\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\so\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sy\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sy\s/g, ' and '),
    )
    content = content.replace(
      /\{%-?(\s+(?:ifversion|elsif|if)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae)(?:\s+(?:or|and)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae))*)\}/g,
      '{%$1 %}',
    )

    content = content.replaceAll('{% de escritorio %}', '{% desktop %}')
    content = content.replaceAll('{%- de escritorio %}', '{%- desktop %}')

    content = content.replaceAll(
      'Solo tienen acceso a los permisos de empresa que se les han concedido y siempre reciben todos esos permisos.\n',
      'Solo tienen acceso a los permisos de empresa que se les han concedido y siempre reciben todos esos permisos.{% endif %}\n',
    )

    content = content.replace(
      /\{%(-?)\s*variablesdatos\.producto\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
      '{%$1 data variables.product.$2$3',
    )

    if (
      context.dottedPath === 'reusables.dependency-graph.deduplication' ||
      context.relativePath?.endsWith('data/reusables/dependency-graph/deduplication.md')
    ) {
      content = content.replace(
        'tienen prioridad sobre el envío automático de dependencias.\n',
        'tienen prioridad sobre el envío automático de dependencias.{% endif %}\n',
      )
    }

    content = content.replaceAll(
      '{% ifversion ghec %}SCIM{% else %} con Okta',
      '{% ifversion ghec %}SCIM{% else %} con Okta{% endif %}',
    )

    content = content.replaceAll(
      'los repositorios internos y {% endif %}privados {% ifversion ghec %}de la organización',
      'los repositorios privados {% ifversion ghec %}e internos {% endif %}de la organización',
    )

    if (
      context.dottedPath === 'reusables.repositories.you-can-fork' ||
      context.relativePath?.endsWith('data/reusables/repositories/you-can-fork.md')
    ) {
      content = content.replace(/^\{%-?\s*elsif\s+/, '{% ifversion ')
    }

    content = content.replaceAll(
      '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}****{% else %}.{% data variables.product.prodname_enterprise %}',
      '{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}****{% else %}{% data variables.product.prodname_enterprise %}{% endif %}.',
    )

    content = content.replaceAll(
      '1. En "Repositorio {% ifversion ghec %}invitaciones a colaboradores externos{% elsif ghes %}", seleccione el menú desplegable y haga clic en una opción.',
      '1. En "Repositorio {% ifversion ghec %}invitaciones a colaboradores externos{% elsif ghes %}invitaciones{% endif %}", seleccione el menú desplegable y haga clic en una opción.',
    )
    content = content.replaceAll(
      '1. En "Repositorio {% ifversion ghec %}invitaciones de colaboradores externos{% elsif ghes %}", revise la información sobre cómo cambiar la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}',
      '1. En "Repositorio {% ifversion ghec %}invitaciones de colaboradores externos{% elsif ghes %}invitaciones{% endif %}", revise la información sobre cómo cambiar la configuración. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}',
    )

    content = content.replaceAll(
      'En "Nombre de usuario, empresa u organización del nuevo propietario de {% data variables.product.prodname_dotcom %} {% else %}nombre de usuario u organización",{% endif %}, escriba',
      'En "{% ifversion fpt or enterprise-apps-public-beta %}Nombre de usuario, empresa u organización del nuevo propietario de {% data variables.product.prodname_dotcom %}",{% else %}nombre de usuario u organización",{% endif %}, escriba',
    )
  }

  if (context.code === 'ja') {
    content = content.replaceAll('{% データ variables', '{% data variables')
    content = content.replaceAll('{% データvariables', '{% data variables')
    content = content.replaceAll('{% データ reusables', '{% data reusables')
    content = content.replaceAll('{% データ変数.', '{% data variables.')
    content = content.replaceAll('{% データ再利用可能な.', '{% data reusables.')
    content = content.replaceAll('{% データ再利用可能.', '{% data reusables.')
    content = content.replaceAll('{% データ再利用.', '{% data reusables.')
    content = content.replaceAll('{% メモ %}', '{% note %}')
    content = content.replaceAll('{%- メモ %}', '{%- note %}')
    content = content.replaceAll('{% 警告 %}', '{% warning %}')
    content = content.replaceAll('{{データ}} variables.', 'data variables.')
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?または[^%]*?%\}/g, (match) => {
      return match.replace(/ または /g, ' or ')
    })

    content = content.replace(/^(\s*asked_too_many_times:\s*.+)"\s*$/m, '$1')

    content = content.replace(/\[(\[.*?\])(\(\S+\)\]\()/g, '[$1\u200A$2')

    content = content.replaceAll('{%- それ以外の場合 %}', '{%- else %}')
    content = content.replaceAll('{% それ以外の場合 %}', '{% else %}')
    content = content.replaceAll('{%- エンドケース -%}', '{%- endcase -%}')
    content = content.replaceAll('{% エンドケース %}', '{% endcase %}')
    content = content.replaceAll('{%- コメント %}', '{%- comment %}')
    content = content.replaceAll('{% コメント %}', '{% comment %}')
    content = content.replaceAll('{%- 終了コメント %}', '{%- endcomment %}')
    content = content.replaceAll('{% 終了コメント %}', '{% endcomment %}')
    content = content.replaceAll('{% エンドビジュアルスタジオ %}', '{% endvisualstudio %}')
    content = content.replaceAll('{% エクリプス %}', '{% eclipse %}')
    content = content.replaceAll('{% それ以外の %}', '{% else %}')
    content = content.replaceAll('{%- それ以外の %}', '{%- else %}')
    content = content.replaceAll('{% それ以外 %}', '{% else %}')
    content = content.replaceAll('{%- それ以外 %}', '{%- else %}')
    content = content.replace(/\{% それ以外の場合 ifversion\s+(.+?)\s*%\}/g, '{% elsif $1 %}')
    content = content.replace(/\{%-?\s*"(supported|not_supported|preview)"\s*%\}/g, (match) => {
      return match.replace(/(%-?)\s*"/, '$1 when "')
    })
    content = content.replace(
      /\{%-?\s*"(サポートされている|サポートされていません|プレビュー)"\s*%\}/g,
      (match) => {
        return match
          .replace('サポートされている', 'supported')
          .replace('サポートされていません', 'not_supported')
          .replace('プレビュー', 'preview')
          .replace(/(%-?)\s*"/, '$1 when "')
      },
    )

    content = content.replaceAll('{%- %}C', '{%- when "closing-down" %}C')

    content = content.replace(
      /\{%-?\s*([\w.]+(?:\[[\w"']+\])?)\s+の\s+(\w+)\s*-?%\}/g,
      (match, collectionPath, varName) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        const closeDash = match.endsWith('-%}') ? '-%}' : '%}'
        return `${dash} for ${varName} in ${collectionPath} ${closeDash}`
      },
    )
    content = content.replace(
      /\{%-?\s*([\w.]+(?:\[[\w"']+\])?)\s*-?%\}\s+の(\w+)の場合/g,
      (match, collectionPath, varName) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        return `${dash} for ${varName} in ${collectionPath} %}`
      },
    )
    content = content.replaceAll('{{ バージョン }}', '{{ version }}')
    content = content.replaceAll('{{ 言語 }}', '{{ language }}')
    content = content.replace(/\{%-?\s*言語を割り当てる\s*=\s*/g, (match) =>
      match.startsWith('{%-') ? '{%- assign language = ' : '{% assign language = ',
    )
    content = content.replace(
      /\{%-?\s*(\w+)\s*=\s*([^%]+?)%\}\s*を割り当てる/g,
      (match, varName, value) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        return `${dash} assign ${varName} = ${value.trim()} %}`
      },
    )
    content = content.replaceAll(' の割り当て', '')
    content = content.replaceAll(' の場合', '')

    content = content.replace(
      /\{%-?\s*((?:featureData|supportLevel|languageData|entry)\.\w+)\s*-?%\}/g,
      (match, condition) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        const closeDash = match.endsWith('-%}') ? '-%}' : '%}'
        return `${dash} if ${condition} ${closeDash}`
      },
    )
    content = content.replace(
      /\{%-?\s*(featureKey|featureData|supportLevel|languageData|groupName|groupVersions)\s*=\s*([^%]+?)-?%\}/g,
      (match, varName, value) => {
        const dash = match.startsWith('{%-') ? '{%-' : '{%'
        const closeDash = match.endsWith('-%}') ? '-%}' : '%}'
        return `${dash} assign ${varName} = ${value.trim()} ${closeDash}`
      },
    )
    content = content.replaceAll('{% 行ヘッダー %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行ヘッダー %}', '{%- rowheaders %}')
    content = content.replaceAll('{% ウィンドウズ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウズ %}', '{%- windows %}')
    content = content.replaceAll('{% ウィンドウ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウ %}', '{%- windows %}')
    content = content.replaceAll('{% デスクトップ %}', '{% desktop %}')
    content = content.replaceAll('{%- デスクトップ %}', '{%- desktop %}')
    content = content.replaceAll('{%データvariables', '{% data variables')
    content = content.replaceAll('{%データ variables', '{% data variables')
    content = content.replaceAll('{%- データvariables', '{%- data variables')
    content = content.replaceAll('{%- データ variables', '{%- data variables')
    content = content.replaceAll('{%- データ reusables', '{%- data reusables')
    content = content.replaceAll('{% データ.variables.', '{% data variables.')
    content = content.replaceAll('{% データ.reusables.', '{% data reusables.')
    content = content.replace(
      /\{%(-?)\s*データ\s*(再利用可能な?|再利用|reusables)\.([^\s%]+)\s*(-?)%\}/g,
      (_m, dashOpen, _kw, path, dashClose) => `{%${dashOpen} data reusables.${path} ${dashClose}%}`,
    )
    content = content.replace(
      /\{%(-?)\s*データ\s*(変数|variables)\.([^\s%]+)\s*(-?)%\}/g,
      (_m, dashOpen, _kw, path, dashClose) => `{%${dashOpen} data variables.${path} ${dashClose}%}`,
    )
    content = content.replace(
      /\{%(-?)\s*データ\s+(variables|reusables)\.([^\s%]+)\s*(-?)%\}/g,
      (_m, dashOpen, kw, path, dashClose) => `{%${dashOpen} data ${kw}.${path} ${dashClose}%}`,
    )
    content = content.replaceAll('{% メモ -%}', '{%- note -%}')
    content = content.replaceAll('{%- メモ -%}', '{%- note -%}')
    content = content.replaceAll('{% ノート %}', '{% note %}')
    content = content.replaceAll('{%- ノート %}', '{%- note %}')
    content = content.replaceAll('{% 終わり %}', '{% endif %}')
    content = content.replaceAll('{%- 終わり %}', '{%- endif %}')
    content = content.replaceAll('{% 終了 %}', '{% endif %}')
    content = content.replaceAll('{%- 終了 %}', '{%- endif %}')
    content = content.replaceAll('{% 終了for %}', '{% endfor %}')
    content = content.replaceAll('{%- 終了for %}', '{%- endfor %}')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?または[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*または\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?かつ[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*かつ\s*/g, ' and '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?および[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*および\s*/g, ' and '),
    )
    content = content.replaceAll('{% 行ヘッダー %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行ヘッダー %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 終了行ヘッダー %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 終了行ヘッダー %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% ウィンドウ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウ %}', '{%- windows %}')
    content = content.replaceAll('{% ウィンドウズ %}', '{% windows %}')
    content = content.replaceAll('{%- ウィンドウズ %}', '{%- windows %}')
    content = content.replaceAll('{% Windowsターミナル %}', '{% windows %}')
    content = content.replaceAll('{% Windows ターミナル %}', '{% windows %}')
    content = content.replace(/(\{%-?\s*indented_data_reference\s+)再利用可能\./g, '$1reusables.')

    content = content.replaceAll(
      '{% ifversion コマンド パレット %}',
      '{% ifversion command-palette %}',
    )
    content = content.replaceAll(
      '{%- ifversion コマンド パレット %}',
      '{%- ifversion command-palette %}',
    )

    content = content.replaceAll(
      '{% data variables.location.product_location %}{% endif %} の認証 {% ifversion ghec %} および Enterprise {% elsif ghes %} のプロビジョニングの構成についての参照情報を表示できます。',
      '{% data variables.location.product_location %} の認証 {% ifversion ghec %} および Enterprise {% elsif ghes %} のプロビジョニングの構成{% endif %} についての参照情報を表示できます。',
    )

    content = content.replaceAll(
      '{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %} または {% data variables.enterprise.data_residency_site %} で、{% data variables.product.prodname_emus %} の Okta を構成する方法を説明します。',
      '{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %} または {% data variables.enterprise.data_residency_site %} で、{% data variables.product.prodname_emus %} の Okta を構成する方法を説明します。{% endif %}',
    )

    content = content.replaceAll(
      'SCIM{% endif %} を使用したエンタープライズ マネージド ユーザー{% else %} 向けのプロビジョニング アカウント{% ifversion ghec %}',
      '{% ifversion ghec %} SCIM を使用したエンタープライズ マネージド ユーザー{% else %} SCIM 向けのプロビジョニング アカウント{% endif %}',
    )
    content = content.replaceAll(
      'SCIM{% endif %} を使用して{% ifversion ghec %} マネージド ユーザー アカウント{% else %} アカウントをプロビジョニングする',
      '{% ifversion ghec %} SCIM を使用して マネージド ユーザー アカウント{% else %} SCIM アカウントをプロビジョニングする{% endif %}',
    )
    content = content.replaceAll(
      '{% data variables.location.product_location %}{% endif %} の {% data variables.enterprise.prodname_emu_enterprise %}{% elsif ghes %} のユーザー{% ifversion ghec %} に対してアカウントをプロビジョニングし、組織とチームのメンバーシップを管理する方法について説明します。',
      '{% ifversion ghec %} {% data variables.enterprise.prodname_emu_enterprise %}{% elsif ghes %} {% data variables.location.product_location %} のユーザー{% endif %} に対してアカウントをプロビジョニングし、組織とチームのメンバーシップを管理する方法について説明します。',
    )

    content = content.replaceAll(
      'ユーザー{% endif %} を管理するためのエンタープライズ マネージド ユーザー{% else %} の SCIM プロビジョニング {% ifversion ghec %} の構成',
      '{% ifversion ghec %} エンタープライズ マネージド ユーザー{% else %} ユーザー{% endif %} を管理するための SCIM プロビジョニングの構成',
    )

    content = content.replaceAll(
      '{% data variables.product.prodname_dotcom %} ホステッド ランナー{% ifversion default-setup-self-hosted-runners-GHEC %}なしのエンタープライズに対して {% data variables.product.prodname_code_scanning %} を有効化、構成、および無効化できます。 {% data variables.product.prodname_code_scanning_caps %} を使用すると、コードの脆弱性やエラーをスキャンできます。',
      '{% data variables.product.prodname_dotcom %} ホステッド ランナー{% ifversion default-setup-self-hosted-runners-GHEC %}なしのエンタープライズに対して{% endif %} {% data variables.product.prodname_code_scanning %} を有効化、構成、および無効化できます。 {% data variables.product.prodname_code_scanning_caps %} を使用すると、コードの脆弱性やエラーをスキャンできます。',
    )

    content = content.replaceAll(
      '{% ifversion ghas-products %}製品をあなたの企業のために有効にする',
      '{% ifversion ghas-products %}製品{% endif %}をあなたの企業のために有効にする',
    )

    content = content.replaceAll(
      '{% endif %} 上で{% endif %}エンタープライズとの通信を実行できるように Okta を構成する方法を学習します。',
      '{% endif %} 上でエンタープライズとの通信を実行できるように Okta を構成する方法を学習します。',
    )

    content = content.replaceAll(
      'は一定のルールに従って、インスタンス{% endif %}上のエンタープライズ{% elsif ghes %}内の各ユーザーアカウント{% ifversion ghec %}のユーザー名を決定します。',
      'は一定のルールに従って、{% ifversion ghec %}エンタープライズ内{% elsif ghes %}インスタンス上{% endif %}の各ユーザーアカウントのユーザー名を決定します。',
    )

    content = content.replaceAll(
      '{% ifversion ghec or fpt %}\n* `repo:my-org/our-repo` は、`my-org` 組織内の `our-repo` リポジトリで発生したすべてのイベントを検索します。\n* `repo:my-org/our-repo repo:my-org/another-repo` は、`my-org`組織内の `our-repo` および `another-repo` リポジトリで発生したすべてのイベントを検索します。\n* `-repo:my-org/not-this-repo` は、`my-org` 組織内の `not-this-repo` リポジトリで発生したすべてのイベントを除外します。\n\n`repo` 修飾子内にアカウント名を含める必要があります。`repo:our-repo` を検索するだけでは作動しません。',
      '{%- ifversion ghec or fpt %}\n* `repo:my-org/our-repo` は、`my-org` 組織内の `our-repo` リポジトリで発生したすべてのイベントを検索します。\n* `repo:my-org/our-repo repo:my-org/another-repo` は、`my-org`組織内の `our-repo` および `another-repo` リポジトリで発生したすべてのイベントを検索します。\n* `-repo:my-org/not-this-repo` は、`my-org` 組織内の `not-this-repo` リポジトリで発生したすべてのイベントを除外します。\n\n`repo` 修飾子内にアカウント名を含める必要があります。`repo:our-repo` を検索するだけでは作動しません。{% endif %}',
    )

    content = content.replaceAll(
      'ユーザーまたはグループを IdP {% endif %} の {% ifversion ghec %} {% data variables.product.prodname_emu_idp_application %} アプリケーション {% else %} 関連アプリケーションに割り当てることで',
      'ユーザーまたはグループを {% ifversion ghec %}{% data variables.product.prodname_emu_idp_application %} アプリケーション{% else %}IdP の関連アプリケーション{% endif %}に割り当てることで',
    )

    content = content.replaceAll(
      'セルフホステッド ランナーは、リポジトリまたは Organization のいずれかに配置するか、{% data variables.product.prodname_ghe_server %}{% endif %} の {% data variables.product.prodname_dotcom %}{% elsif ghes %} Enterprise 設定の {% ifversion fpt or ghec %} Enterprise アカウント設定に配置することができます。',
      'セルフホステッド ランナーは、リポジトリまたは Organization のいずれかに配置するか、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} の Enterprise アカウント設定{% elsif ghes %}{% data variables.product.prodname_ghe_server %} の Enterprise 設定{% endif %}に配置することができます。',
    )

    content = content.replaceAll(
      'これには、パブリック リポジトリ、プライベート リポジトリ、および内部{% elsif fpt %}both パブリック リポジトリとプライベート リポジトリ{% endif %}{% ifversion ghec %}が含まれます。',
      'これには、{% ifversion ghec %}パブリック リポジトリ、プライベート リポジトリ、および内部{% elsif fpt %}パブリック リポジトリとプライベート リポジトリの両方{% endif %}が含まれます。',
    )

    content = content.replace(/\{%(-?)\s*roleColumns\s*=\s*/g, '{%$1 assign roleColumns = ')

    content = content.replaceAll(
      '次の表は、{% endif %}IDE の{% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %}の',
      '次の表は、IDE の{% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %}{% endif %}の',
    )

    if (
      context.dottedPath === 'reusables.actions.github-token-scope-descriptions' ||
      context.relativePath?.endsWith('data/reusables/actions/github-token-scope-descriptions.md')
    ) {
      content = content.replace(
        '「シークレット スキャン アラート」のリポジトリのアクセス許可を参照してください。 |',
        '「シークレット スキャン アラート」のリポジトリのアクセス許可を参照してください。{% endif %} |',
      )
    }
  }

  if (context.code === 'pt') {
    // {%– uses an en dash (U+2013) instead of a hyphen.
    content = content.replaceAll('{%–', '{%-')

    content = content.replaceAll('{% aviso %}', '{% warning %}')

    if (
      content.includes('{% vscode %}') &&
      !content.includes('{% endvscode %}') &&
      !englishContent.includes('{% vscode %}')
    ) {
      content = content.replaceAll(/\{% vscode %\}\s*/g, '')
    }

    content = content.replaceAll('{% dados variables', '{% data variables')
    content = content.replaceAll('{% de dados variables', '{% data variables')
    content = content.replaceAll('{% dados reusables', '{% data reusables')
    content = content.replaceAll('{% dadosvariables', '{% data variables')
    content = content.replaceAll('{%- dadosvariables', '{%- data variables')
    content = content.replaceAll('{% datavariables', '{% data variables')
    content = content.replaceAll('{%- datavariables', '{%- data variables')
    content = content.replaceAll('{%datavariables', '{% data variables')
    content = content.replaceAll('{%-datavariables', '{%- data variables')
    content = content.replace(
      /\{%(-?)\s*data\s+variables\.product\.\s+(prodname_[A-Za-z0-9_]+)/g,
      '{%$1 data variables.product.$2',
    )
    content = content.replaceAll('{% licenças de dados variables.', '{% data variables.')
    content = content.replaceAll('{%- licenças de dados variables.', '{%- data variables.')
    content = content.replaceAll('{% sugestões embutidas do variables.', '{% data variables.')
    content = content.replaceAll('{%- sugestões embutidas do variables.', '{%- data variables.')
    content = content.replaceAll('{% dados reutilizáveis.', '{% data reusables.')
    content = content.replaceAll('{% dado reutilizáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dado reutilizáveis.', '{%- data reusables.')
    content = content.replaceAll(
      '{% data reusables.repositórios.',
      '{% data reusables.repositories.',
    )
    content = content.replaceAll('{{% dados ', '{% data ')
    content = content.replaceAll('{{% datas ', '{% data ')
    content = content.replaceAll('{% senão %}', '{% else %}')
    content = content.replaceAll('{%- senão %}', '{%- else %}')
    content = content.replaceAll('{% mais %}', '{% else %}')
    content = content.replaceAll('{%- mais %}', '{%- else %}')
    content = content.replaceAll('{% se ', '{% if ')
    content = content.replaceAll('{% atribuir ', '{% assign ')
    content = content.replaceAll('{%- atribuir ', '{%- assign ')
    content = content.replaceAll('{% %} bruto', '{% raw %}')
    content = content.replaceAll('{% %de dados reusables.', '{% data reusables.')
    content = content.replaceAll('{% %de dados variables.', '{% data variables.')
    content = content.replaceAll('{% %móvel }', '{% mobile %}')
    content = content.replaceAll('{% variáveis de dados.', '{% data variables.')
    content = content.replaceAll('{% variáveis de dados ', '{% data variables ')
    content = content.replaceAll('{% dados variáveis.', '{% data variables.')
    // Match only inside data tags, so prose and URLs stay intact. Run after the dados variáveis fix.
    content = content.replace(
      /(\{%-?\s*data\s+)(?:variables|variáveis)\.produto\./g,
      '$1variables.product.',
    )
    content = content.replaceAll('{% Espaços de Código %}', '{% codespaces %}')
    content = content.replaceAll('{%- Espaços de Código %}', '{%- codespaces %}')
    content = content.replaceAll('{% espaços de código %}', '{% codespaces %}')
    content = content.replaceAll('{%- espaços de código %}', '{%- codespaces %}')
    content = content.replaceAll('{% janelas %}', '{% windows %}')
    content = content.replaceAll('{%- janelas %}', '{%- windows %}')
    content = content.replaceAll('{% observação %}', '{% note %}')
    content = content.replaceAll('{%- observação %}', '{%- note %}')
    content = content.replaceAll('{% comentário %}', '{% comment %}')
    content = content.replaceAll('{%- comentário %}', '{%- comment %}')
    content = content.replaceAll('{% nota de fim %}', '{% endnote %}')
    content = content.replaceAll('{%- nota de fim %}', '{%- endnote %}')
    content = content.replaceAll('{% Dados variables', '{% data variables')
    content = content.replaceAll('{%- Dados variables', '{%- data variables')
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?ou [^%]*?%\}/g, (match) => {
      return match.replace(/ ou /g, ' or ')
    })
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\bnão\b[^%]*?%\}/g, (match) => {
      return match.replace(/\bnão\b/g, 'not')
    })
    content = content.replaceAll(
      '{% dados agrupados por categoria.complemento.audit_log.reference-grouped-by-category %}',
      '{% data reusables.audit_log.reference-grouped-by-category %}',
    )
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?%\}/g, (match) => {
      return match.replace(/(\d),(\d)/g, '$1.$2')
    })
    content = content.replace(/\{%-? para (\w+) em /g, (match) => {
      return match.replace(/para (\w+) em /, 'for $1 in ')
    })
    content = content.replaceAll('{% reutilizáveis.', '{% data reusables.')
    content = content.replaceAll('{%- reutilizáveis.', '{%- data reusables.')
    content = content.replaceAll('{% dados reusáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dados reusáveis.', '{%- data reusables.')
    content = content.replaceAll('{% reusáveis.', '{% data reusables.')
    content = content.replaceAll('{%- reusáveis.', '{%- data reusables.')
    content = content.replaceAll('{% dados.reutilizáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dados.reutilizáveis.', '{%- data reusables.')
    content = content.replaceAll('{% dados.reusáveis.', '{% data reusables.')
    content = content.replaceAll('{%- dados.reusáveis.', '{%- data reusables.')
    content = content.replaceAll('{% de data variables', '{% data variables')
    content = content.replaceAll('{%- de data variables', '{%- data variables')
    content = content.replaceAll('{% de data reusables', '{% data reusables')
    content = content.replaceAll('{%- de data reusables', '{%- data reusables')
    content = content.replaceAll('{% de dados reusables', '{% data reusables')
    content = content.replaceAll('{% datavariables', '{% data variables')
    content = content.replaceAll('{%- datavariables', '{%- data variables')
    content = content.replaceAll('{% datas variables', '{% data variables')
    content = content.replaceAll('{%- datas variables', '{%- data variables')
    content = content.replaceAll('{% datas reusables', '{% data reusables')
    content = content.replaceAll('{%- datas reusables', '{%- data reusables')
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes)\s+ifversion\s*%\}/g,
      '{%$1 ifversion $2 %}',
    )
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae)\s+ifversion\s+(?:ou|or)\s+(fpt|ghec|ghes|ghae)\s*(-?)%\}/g,
      '{%$1 ifversion $2 or $3 $4%}',
    )
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes)\s+de\s+ifversion\s*%\}/g,
      '{%$1 ifversion $2 %}',
    )
    content = content.replaceAll('{% %} de ghec ifversion', '{% ifversion ghec %}')
    content = content.replaceAll('{% %} de ghes ifversion', '{% ifversion ghes %}')
    content = content.replaceAll('{% %} de fpt ifversion', '{% ifversion fpt %}')
    content = content.replaceAll('{% referência_dados_indentados ', '{% indented_data_reference ')
    content = content.replaceAll('{%- referência_dados_indentados ', '{%- indented_data_reference ')
    content = content.replace(/\{%(-?)\s*[Dd]ados\s+/g, '{%$1 data ')
    content = content.replace(/\{%(-?\s*)data reutilizáveis\./g, '{%$1data reusables.')
    content = content.replace(/\{%(-?\s*)data variáveis\./g, '{%$1data variables.')
    content = content.replace(/\{%(-?\s*)reutilizáveis\./g, '{%$1data reusables.')
    content = content.replace(/\{%(-?\s*)variáveis\./g, '{%$1data variables.')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sou\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sou\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\se\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\se\s/g, ' and '),
    )
    content = content.replaceAll('{% senão %}', '{% else %}')
    content = content.replaceAll('{%- senão %}', '{%- else %}')
    content = content.replaceAll('{% Senão %}', '{% else %}')
    content = content.replaceAll('{% senao %}', '{% else %}')
    content = content.replaceAll('{%- senao %}', '{%- else %}')
    content = content.replaceAll('{% senão se ', '{% elsif ')
    content = content.replaceAll('{%- senão se ', '{%- elsif ')
    content = content.replaceAll('{% senao se ', '{% elsif ')
    content = content.replaceAll('{% caso contrário %}', '{% else %}')
    content = content.replaceAll('{%- caso contrário %}', '{%- else %}')
    content = content.replaceAll('{% outra %}', '{% else %}')
    content = content.replaceAll('{%- outra %}', '{%- else %}')
    content = content.replaceAll('{% observação %}', '{% note %}')
    content = content.replaceAll('{%- observação %}', '{%- note %}')

    content = content.replaceAll(
      'você precisa instalá-lo em sua conta corporativa, {% ifversion enterprise-installed-apps %}organização ou conta pessoal.',
      'você precisa instalá-lo na sua {% ifversion enterprise-installed-apps %}empresa, {% endif %}organização ou conta pessoal.',
    )

    content = content.replaceAll(
      'tornando mais difícil para os atores mal-intencionados acessarem os repositórios e as configurações de uma organização.',
      'tornando mais difícil para os atores mal-intencionados acessarem os repositórios e as configurações de uma organização.{% endif %}',
    )

    content = content.replaceAll(
      'nos repositórios internos e {% endif %}privados {% ifversion ghec %}da sua organização.',
      'nos repositórios privados {% ifversion ghec %}e internos {% endif %}da sua organização.',
    )

    content = content.replaceAll(
      '{% ifversion ghec %}Se sua empresa usar {% data variables.product.prodname_emus %}, você{% else %} também poderá impedir os usuários de criarem repositórios de propriedade de suas contas de usuário.',
      '{% ifversion ghec %}Se sua empresa usar {% data variables.product.prodname_emus %}, você{% else %}Você{% endif %} também poderá impedir os usuários de criarem repositórios de propriedade de suas contas de usuário.',
    )

    content = content.replaceAll(
      '1. Em "Nome de usuário, organização ou nome da empresa {% else %}nome de usuário ou nome da organização do {% data variables.product.prodname_dotcom %} {% ifversion fpt or enterprise-apps-public-beta %} do novo proprietário",{% endif %} digite o nome da conta para a qual você deseja transferir o {% data variables.product.prodname_github_app %}.',
      '1. Em "{% ifversion fpt or enterprise-apps-public-beta %}Nome de usuário, organização ou nome da empresa{% else %}nome de usuário ou nome da organização{% endif %} do {% data variables.product.prodname_dotcom %} do novo proprietário", digite o nome da conta para a qual você deseja transferir o {% data variables.product.prodname_github_app %}.',
    )

    content = content.replaceAll(
      'do {% endif %}{% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} IDE.',
      'do {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %}{% endif %} IDE.',
    )
  }

  if (context.code === 'zh') {
    content = content.replaceAll('{% 数据variables', '{% data variables')
    content = content.replaceAll('{% 数据 variables', '{% data variables')
    content = content.replaceAll('{%数据variables', '{% data variables')
    content = content.replaceAll('{%数据 variables', '{% data variables')
    // Run the s. variant first, so the broader rule can't produce reusabless.
    content = content.replaceAll('{% 数据可重用s.', '{% data reusables.')
    content = content.replaceAll('{% 数据可重用', '{% data reusables')
    content = content.replaceAll('{% 其他 %}', '{% else %}')
    content = content.replaceAll('{%- 其他 %}', '{%- else %}')
    content = content.replaceAll('{% 原始 %}', '{% raw %}')
    content = content.replaceAll('{%- 原始 %}', '{%- raw %}')
    content = content.replaceAll('{% 警告 %}', '{% warning %}')
    content = content.replaceAll('{% 结束警告 %}', '{% endwarning %}')
    content = content.replaceAll('{% 否则 %}', '{% else %}')
    content = content.replaceAll('{%- 否则 %}', '{%- else %}')
    content = content.replace(/\{ 如果 /g, '{% if ')
    content = content.replace(/，则为 \{%</g, '<')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?或[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*或\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?和[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*和\s*/g, ' and '),
    )
    content = content.replaceAll('{% 行标题 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行标题 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 数据变量.', '{% data variables.')
    content = content.replaceAll('{%数据变量.', '{% data variables.')
    content = content.replaceAll('{%-数据变量.', '{%- data variables.')
    content = content.replaceAll('{% 分配 ', '{% assign ')
    content = content.replaceAll('{%- 分配 ', '{%- assign ')
    content = content.replaceAll('{% Windows 操作系统 %}', '{% windows %}')
    content = content.replaceAll('{%- Windows 操作系统 %}', '{%- windows %}')
    content = content.replaceAll('{% Windows终端 %}', '{% windows %}')
    content = content.replaceAll('{% 桌面 %}', '{% desktop %}')
    content = content.replaceAll('{%- 桌面 %}', '{%- desktop %}')
    content = content.replaceAll('{% 行标头 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行标头 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 行标题 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 行标题 %}', '{%- rowheaders %}')

    content = content.replaceAll('{% ifversion 命令面板 %}', '{% ifversion command-palette %}')
    content = content.replaceAll('{%- ifversion 命令面板 %}', '{%- ifversion command-palette %}')
    content = content.replaceAll('{% ifversion 子问题 %}', '{% ifversion sub-issues %}')
    content = content.replaceAll('{%- ifversion 子问题 %}', '{%- ifversion sub-issues %}')
    content = content.replaceAll('{% ifversion 问题类型 %}', '{% ifversion issue-types %}')
    content = content.replaceAll('{%- ifversion 问题类型 %}', '{%- ifversion issue-types %}')
    content = content.replaceAll('{% 结束行标题 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束行标题 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% 结束行标头 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束行标头 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% 结束行头 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束行头 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% 行标题结束 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 行标题结束 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% 结束表头列 %}', '{% endrowheaders %}')
    content = content.replaceAll('{%- 结束表头列 %}', '{%- endrowheaders %}')
    content = content.replaceAll('{% data Variables.', '{% data variables.')
    content = content.replaceAll('{% data Reusables.', '{% data reusables.')
    content = content.replaceAll('{%- data Variables.', '{%- data variables.')
    content = content.replaceAll('{%- data Reusables.', '{%- data reusables.')
    content = content.replaceAll('{% 否则如果 ', '{% elsif ')
    content = content.replaceAll('{%- 否则如果 ', '{%- elsif ')
    content = content.replaceAll('{% 结束 %}', '{% endif %}')
    content = content.replaceAll('{%- 结束 %}', '{%- endif %}')
    content = content.replaceAll('{% 结尾 %}', '{% endif %}')
    content = content.replaceAll('{%- 结尾 %}', '{%- endif %}')
    content = content.replaceAll('{% 结束for %}', '{% endfor %}')
    content = content.replaceAll('{%- 结束for %}', '{%- endfor %}')
    content = content.replaceAll('{% 结束if %}', '{% endif %}')
    content = content.replaceAll('{%- 结束if %}', '{%- endif %}')
    content = content.replace(/\{%(-?)\s*数据\s+/g, '{%$1 data ')
    content = content.replace(
      /(\{%-?\s*indented_data_reference\s+)可(?:重|复)用(?:项|组件|s)?\./g,
      '$1reusables.',
    )

    content = content.replaceAll(
      '如果实例使用内置身份验证{% endif %}，则可以更改 {% data variables.product.github %} 帐户 {% ifversion ghes %} 的用户名。',
      '可以更改 {% data variables.product.github %} 帐户的用户名。{% ifversion ghes %} 如果实例使用内置身份验证。{% endif %}',
    )

    content = content.replaceAll(
      '可以通过 SAML 单点登录 (SSO){% ifversion ghec %}和跨域身份管理系统 (SCIM){% endif %} 集中管理 {% ifversion ghes %} 帐户以及对 {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghec %}你的企业资源{% endif %}的访问权限。',
      '可以通过 SAML 单点登录 (SSO){% ifversion ghec %}和跨域身份管理系统 (SCIM){% endif %} 集中管理帐户以及对 {% ifversion ghes %}{% data variables.location.product_location %}{% elsif ghec %}你的企业资源{% endif %}的访问权限。',
    )

    content = content.replaceAll(
      '可以将身份验证信息（如密码和访问令牌）存储为加密机密，然后在配置文件中 {% data variables.product.prodname_dependabot %} 引用这些信息。{% ifversion dependabot-on-actions-self-hosted %} 如果您在专用网络上有注册表，您也可以在使用自托管运行程序执行{% data variables.product.prodname_dependabot %}时配置{% data variables.product.prodname_dependabot %}访问权限。',
      '可以将身份验证信息（如密码和访问令牌）存储为加密机密，然后在配置文件中 {% data variables.product.prodname_dependabot %} 引用这些信息。{% ifversion dependabot-on-actions-self-hosted %} 如果您在专用网络上有注册表，您也可以在使用自托管运行程序执行{% data variables.product.prodname_dependabot %}时配置{% data variables.product.prodname_dependabot %}访问权限。{% endif %}',
    )

    content = content.replaceAll('> * {% ifversion ghes %} 本文包含', '> * 本文包含')

    content = content.replace(/\{%(-?)\s*捕获\s*(\w+)\s*(-?)%\}/g, '{%$1 capture $2 $3%}')

    content = content.replaceAll(
      '{% else %} 的访问权限。',
      '{% else %}组织的设置{% endif %} 的访问权限。',
    )

    content = content.replaceAll(
      '在{% data variables.product.prodname_dotcom_the_website %}或{% data variables.enterprise.data_residency_site %}{% endif %}上的企业{% ifversion ghec %}进行通信。',
      '的企业{% ifversion ghec %}在{% data variables.product.prodname_dotcom_the_website %}或{% data variables.enterprise.data_residency_site %}{% endif %}进行通信。',
    )

    content = content.replaceAll(
      '可以{% ifversion ghec%}在企业或组织级别{% endif %}在组织级别{% else %}创建网络配置，从而将 Azure 虚拟网络 (VNET) 用于专用网络。',
      '可以{% ifversion ghec %}在企业或组织级别{% else %}在组织级别{% endif %}创建网络配置，从而将 Azure 虚拟网络 (VNET) 用于专用网络。',
    )

    content = content.replaceAll(
      '适用于{% data variables.product.prodname_team %}上的{% ifversion fpt or ghec %}账户以及{% data variables.product.prodname_ghe_server %}{% endif %}上的{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}账户。',
      '适用于{% ifversion fpt or ghec %}{% data variables.product.prodname_team %}和{% data variables.product.prodname_ghe_cloud %}上的账户{% elsif ghes %}{% data variables.product.prodname_ghe_server %}上的账户{% endif %}。',
    )

    content = content.replaceAll(
      '{% data variables.product.github %}{% else %}{% data variables.location.product_location_enterprise %}{% endif %} 上的{% ifversion fpt or ghec %}企业资源',
      '{% ifversion fpt or ghec %}{% data variables.product.github %} 上的企业资源{% else %}{% data variables.location.product_location_enterprise %}{% endif %}',
    )

    content = content.replaceAll(
      '企业中 {% data variables.product.github %}{% elsif ghes %} 上 {% data variables.location.product_location %}{% endif %} 上每个新个人帐户 {% ifversion ghec %} 的用户名。',
      '{% ifversion ghec %}企业中 {% data variables.product.github %}{% elsif ghes %} 上 {% data variables.location.product_location %}{% endif %} 上每个新个人帐户的用户名。',
    )

    content = content.replaceAll(
      '会按照特定规则确定您实例{% endif %}上您企业{% elsif ghes %}中各个用户帐户{% ifversion ghec %}的用户名。',
      '会按照特定规则确定{% ifversion ghec %}您企业中{% elsif ghes %}您实例上{% endif %}各个用户帐户的用户名。',
    )

    content = content.replaceAll(
      '这包括{% ifversion ghec %}公共存储库、专用存储库和{% endif %}内部{% elsif fpt %}存储库。',
      '这包括{% ifversion ghec %}公共存储库、专用存储库和内部存储库{% elsif fpt %}公共存储库和专用存储库{% endif %}。',
    )

    content = content.replaceAll(
      '具有“管理组织操作变量”或“管理组织操作机密”权限{% endif %}的组织所有者{% ifversion custom-org-roles %}和用户可以在组织级别创建机密或变量。',
      '组织所有者{% ifversion custom-org-roles %}和具有“管理组织操作变量”或“管理组织操作机密”权限的用户{% endif %}可以在组织级别创建机密或变量。',
    )

    content = content.replaceAll(
      '在 {% else %}2026 年 8 月 3 日{% data variables.product.prodname_ghe_server %}{% endif %} 3.24{% ifversion fpt or ghec %} 之前已启用单个回调 URL 的应用，其回调 URL 已启用通配符匹配。',
      '在{% ifversion fpt or ghec %}2026 年 8 月 3 日{% else %}{% data variables.product.prodname_ghe_server %} 3.24{% endif %} 之前已启用单个回调 URL 的应用，其回调 URL 已启用通配符匹配。',
    )

    content = content.replaceAll(
      '{% ifversion ghes %}在“检查、工作流运行、状态、工件、日志和缓存设置”部分的 **检查、工作流运行、状态、工件和日志保留** 下，输入一个新值。',
      '{% ifversion ghes %}在“检查、工作流运行、状态、工件、日志和缓存设置”部分的{% else %}在{% endif %} **检查、工作流运行、状态、工件和日志保留** 下，输入一个新值。',
    )

    content = content.replaceAll(
      '你可以使用圆括号嵌套筛选器，最多可达五层深度。{% ifversion ghes < 3.18 %} 目前无法在括号中包含`repo`、`org`或`user`限定符。\n\n{% endwebui %}',
      '你可以使用圆括号嵌套筛选器，最多可达五层深度。{% ifversion ghes < 3.18 %} 目前无法在括号中包含`repo`、`org`或`user`限定符。{% endif %}\n\n{% endwebui %}',
    )
  }

  if (context.code === 'ru') {
    content = content.replaceAll(
      '{% данных {% данных variables.product.prodname_dotcom %} нижнего колонтитула {% ghversion %}, для всех пользователей и участников совместной работы на всех страницах репозитория и организации для репозиториев и организаций, принадлежащих к корпоративным variables.location.product_location_enterprise{%endif %}.',
      '{% data variables.product.prodname_dotcom %} нижнего колонтитула{% ifversion ghes %}, для всех пользователей и на всех страницах {% data variables.location.product_location_enterprise %}{% elsif ghec %} для всех пользователей и участников совместной работы на всех страницах репозитория и организации для репозиториев и организаций, принадлежащих к предприятию{% endif %}.',
    )
    content = content.replaceAll('[«AUTOTITLE»](', '[AUTOTITLE](')
    content = content.replaceAll('[АВТОЗАГОЛОВОК](', '[AUTOTITLE](')
    content = content.replaceAll('[{% autoTITLE](', '[AUTOTITLE](')
    content = content.replaceAll('{% данных variables', '{% data variables')
    content = content.replaceAll('{% данных, variables', '{% data variables')
    content = content.replaceAll('{% данными variables', '{% data variables')
    content = content.replaceAll('{% данных организации variables', '{% data variables')
    content = content.replaceAll('{% данным variables.', '{% data variables.')
    content = content.replaceAll('{% данные variables.', '{% data variables.')
    content = content.replaceAll('{% данных reusables', '{% data reusables')
    content = content.replaceAll('{% данные reusables', '{% data reusables')
    content = content.replaceAll('{% данных, многократно используемых.', '{% data reusables.')
    content = content.replaceAll(
      '{% данных, которые можно использовать повторно.',
      '{% data reusables.',
    )
    content = content.replaceAll('{% данных переменных.', '{% data variables.')
    content = content.replaceAll('{% данных.', '{% data variables.')
    content = content.replaceAll('{% data переменных.', '{% data variables.')
    content = content.replaceAll('{% переменным данных.', '{% data variables.')
    content = content.replaceAll('{% переменных данных.', '{% data variables.')
    content = content.replaceAll('{% .dependency-review.', '{% data variables.dependency-review.')
    content = content.replaceAll('{% .code-scanning.', '{% data variables.code-scanning.')
    content = content.replaceAll('{%.dependency-review.', '{% data variables.dependency-review.')
    content = content.replaceAll('{%.code-scanning.', '{% data variables.code-scanning.')
    content = content.replaceAll('{%.copilot.', '{% data variables.copilot.')
    content = content.replaceAll('{% данных" variables', '{% data variables')
    content = content.replaceAll('{%" variables.', '{% data variables.')
    content = content.replaceAll('{%, variables.', '{% data variables.')
    content = content.replaceAll('{% необработанного %}', '{% raw %}')
    content = content.replaceAll('{%- необработанного %}', '{%- raw %}')
    content = content.replaceAll('{%- ifversion fpt или ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt или ghec %}', '{% ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion ghec или fpt %}', '{% ifversion ghec or fpt %}')
    content = content.replaceAll('{% ghes или ghec %}', '{% ifversion ghes or ghec %}')
    content = content.replaceAll('{% elsif ghec или ghes %}', '{% elsif ghec or ghes %}')
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?или[^%]*?%\}/g, (match) => {
      return match.replace(/ или /g, ' or ')
    })
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?%\}/g, (match) => {
      return match.replace(/(\d),(\d)/g, '$1.$2')
    })
    content = content.replaceAll('{% конечным %}', '{% endif %}')
    content = content.replaceAll('{%- конечным %}', '{%- endif %}')
    content = content.replaceAll('{%- конец %}', '{%- endif %}')
    content = content.replaceAll('{%- конец для %}', '{%- endfor %}')
    content = content.replaceAll('{% конец для %}', '{% endfor %}')
    content = content.replaceAll('{% заголовки строк %}', '{% rowheaders %}')
    content = content.replaceAll('{%- заголовки строк %}', '{%- rowheaders %}')
    content = content.replaceAll('{% windowsTerminal %}', '{% windowsterminal %}')
    content = content.replaceAll('{%- windowsTerminal %}', '{%- windowsterminal %}')
    content = content.replace(
      /\{%(-?)\s*командная\s+палитра\s+ifversion\s*(-?)%\}/g,
      '{%$1 ifversion command-palette $2%}',
    )
    // Run before the конец fallback. Split, not regex, to avoid catastrophic backtracking.
    if (content.includes('{% конец %}') && content.includes('{% raw %}')) {
      const parts = content.split('{% raw %}')
      for (let i = 1; i < parts.length; i++) {
        parts[i] = parts[i].replace('{% конец %}', '{% endraw %}')
      }
      content = parts.join('{% raw %}')
    }
    content = content.replaceAll('{% конец %}', '{% endif %}')
    content = content.replaceAll('{% Эльсиф %}', '{% else %}')
    content = content.replaceAll('{%- Эльсиф %}', '{%- else %}')
    content = content.replaceAll(
      'обязательный-2fa-dotcom-участник',
      'mandatory-2fa-dotcom-contributors',
    )
    content = content.replaceAll(
      'обязательный-2fa-участник-2023',
      'mandatory-2fa-contributors-2023',
    )
    content = content.replaceAll('{% ifversion не ', '{% ifversion not ')
    content = content.replaceAll('{% переменных данных.', '{% data variables.')
    content = content.replaceAll('{% повторно используемых данных.', '{% data reusables.')
    content = content.replaceAll('{% примечание %}', '{% note %}')
    content = content.replaceAll('{%- примечание %}', '{%- note %}')
    content = content.replaceAll('{% конечных головщиков %}', '{% endrowheaders %}')
    content = content.replaceAll('{% данных для повторного использования.', '{% data reusables.')
    content = content.replace(
      /(\{%-?\s*indented_data_reference\s+)повторн[а-яё]*(?:\s+[а-яё]+)*\./g,
      '$1reusables.',
    )
    content = content.replaceAll('{% еще %}', '{% else %}')
    content = content.replaceAll('{%- еще %}', '{%- else %}')
    content = content.replaceAll('{% ещё %}', '{% else %}')
    content = content.replaceAll('{%- ещё %}', '{%- else %}')
    content = content.replaceAll('{% иначе %}', '{% else %}')
    content = content.replaceAll('{%- иначе %}', '{%- else %}')
    content = content.replaceAll('{% необработанные %}', '{% raw %}')
    content = content.replaceAll('{%- необработанные %}', '{%- raw %}')
    content = content.replaceAll('{% необработанный %}', '{% raw %}')
    content = content.replaceAll('{%- необработанный %}', '{%- raw %}')
    content = content.replaceAll('{% сырой %}', '{% raw %}')
    content = content.replaceAll('{%- сырой %}', '{%- raw %}')
    content = content.replaceAll('{% нарисовать %}', '{% endraw %}')
    content = content.replaceAll('{%- нарисовать %}', '{%- endraw %}')
    content = content.replaceAll('{% эндкёрл %}', '{% endcurl %}')
    content = content.replaceAll('{%- эндкёрл %}', '{%- endcurl %}')
    content = content.replaceAll('{% запроса %}', '{% endraw %}')
    content = content.replaceAll('{%- запроса %}', '{%- endraw %}')
    content = content.replaceAll('{% API %}', '{% api %}')
    content = content.replaceAll('{%- API %}', '{%- api %}')

    content = content.replace(/\{%(-?)\s*захватить\s+(\w+)\s*(-?)%\}/g, '{%$1 capture $2 $3%}')

    content = content.replace(
      /\{%(-?\s+(?:ifversion|elsif|if)\s+[^%]*?),\s*((?:fpt|ghec|ghes|ghae|ghecom)[^%]*?-?%\})/g,
      '{%$1 or $2',
    )

    content = content.replaceAll('{% джетмозги %}', '{% jetbrains %}')
    content = content.replaceAll('{%- джетмозги %}', '{%- jetbrains %}')

    content = content.replaceAll(
      '{% для глоссария в глоссариях %}',
      '{% for glossary in glossaries %}',
    )
    content = content.replaceAll('{{ глоссарий.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{{ глоссарий.description }}', '{{ glossary.description }}')

    // Check includes first, since these regexes backtrack O(n²) on long word-character strings.
    if (content.includes('%данн')) {
      content = content.replace(
        /([\w.-]+\.[\w.-]+\.[\w_]+) %данн\w*[^{]*\{%\s+\}/g,
        '{% data $1 %}',
      )
      content = content.replace(
        /([\w.-]+\.[\w.-]+\.[\w_]+) %\}данн\w*\s*\{%\s*\./g,
        '{% data $1 %}.',
      )
    }
    if (content.includes('%{% data')) {
      content = content.replace(/([\w.-]+\.[\w.-]+\.[\w_]+) %\{% data\s+\}/g, '{% data $1 %}')
    }

    content = content.replaceAll(
      '{% octicon "организация" aria-hidden="true" aria-label="organization" %}',
      '{% octicon "organization" aria-hidden="true" aria-label="organization" %}',
    )
    content = content.replace(/\{%(-?)\s*Эльсиф\s+/g, '{%$1 elsif ')
    content = content.replace(/\{%-?\s*для\s+(\w+)\s+в\s+/g, (match) => {
      const dash = match.startsWith('{%-') ? '{%-' : '{%'
      return match.replace(/^\{%-?\s*для\s+(\w+)\s+в\s+/, `${dash} for $1 in `)
    })
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?, а не [^%]*?%\}/g, (match) => {
      return match.replace(/, а не /g, ' and not ')
    })
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\sне\s[^%]*?%\}/g, (match) => {
      return match.replace(/ не /g, ' not ')
    })
    content = content.replaceAll('aria-label="autoTITLE"', 'aria-label="AUTOTITLE"')
    content = content.replaceAll('{% эндраw %}', '{% endraw %}')
    content = content.replaceAll('{%- эндраw %}', '{%- endraw %}')
    content = content.replaceAll('{% эндраw -%}', '{% endraw -%}')
    content = content.replaceAll('{% эндесктоп %}', '{% enddesktop %}')
    content = content.replaceAll('{%- эндесктоп %}', '{%- enddesktop %}')
    content = content.replaceAll('{% эндеклипс %}', '{% endeclipse %}')
    content = content.replaceAll('{%- эндеклипс %}', '{%- endeclipse %}')
    content = content.replaceAll('{% эндекклипс %}', '{% endeclipse %}')
    content = content.replaceAll('{% endекклипс %}', '{% endeclipse %}')
    content = content.replace(/(\{%-?\s*[a-z]+\s+)«([^»]*)»/g, '$1"$2"')
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?[<>=][^%]*?%\}/g, (match) => {
      // Cyrillic 'о' (U+043E) often replaces ASCII '0' (U+0030)
      return match.replace(/(\d)\s*о/g, '$10').replace(/о\s*(\d)/g, '0$1')
    })

    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+\2\s+ifversion\s*(-?)%\}/g,
      '{%$1 ifversion $2 $3%}',
    )

    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+ifversion\s*([^%]*?)\s*-?%\}/g,
      (_m, dash, plan, rest) => {
        const fixedRest = rest.replace(/(\d),(\d)/g, '$1.$2')
        const trimmed = fixedRest.trim()
        return `{%${dash} ifversion ${plan}${trimmed ? ` ${trimmed}` : ''} %}`
      },
    )
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+или\s+(fpt|ghec|ghes|ghae|ghecom)\s*-?%\}/g,
      '{%$1 ifversion $2 or $3 %}',
    )
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+и\s+(fpt|ghec|ghes|ghae|ghecom)\s*-?%\}/g,
      '{%$1 ifversion $2 and $3 %}',
    )
    content = content.replace(
      /\{%(-?)\s*(fpt|ghec|ghes|ghae|ghecom)\s+version\s*-?%\}/g,
      '{%$1 ifversion $2 %}',
    )

    content = content.replaceAll('{% остальных %}', '{% else %}')
    content = content.replaceAll('{%- остальных %}', '{%- else %}')
    content = content.replaceAll('{% иначе %}', '{% else %}')
    content = content.replaceAll('{%- иначе %}', '{%- else %}')
    content = content.replaceAll('{% ещё %}', '{% else %}')
    content = content.replaceAll('{%- ещё %}', '{%- else %}')
    content = content.replace(/\{%(-?)\s*иначе если\s+/g, '{%$1 elsif ')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?или[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*или\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sи\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sи\s/g, ' and '),
    )

    content = content.replaceAll(
      'Вы можете просмотреть и отозвать {% ghec ghec для участников предприятия {% ifversion %}linked identity, активные сеансы и авторизованные учетные данные{%else %}активные сеансы SAML{% endif %}.',
      'Вы можете просмотреть и отозвать {% ifversion ghec %}связанные удостоверения, активные сеансы и авторизованные учетные данные участников предприятия{% else %}активные сеансы SAML{% endif %}.',
    )

    content = content.replaceAll(
      'Вы можете управлять доступом к параметрам и репозиториям организации {% ifversion org-custom-role-with-repo-permissions %}, а также к параметрам организации {% else %}организации с пользовательскими ролями организации.',
      'Вы можете управлять доступом к параметрам и репозиториям организации {% ifversion org-custom-role-with-repo-permissions %}, а также к параметрам организации {% else %}организации с пользовательскими ролями организации.{% endif %}',
    )

    content = content.replaceAll(
      '{% ifversion ghes %}Владелец предприятия может{%else %}{% data variables.product.company_short %} перенести образы Docker, ранее хранящиеся в реестре Docker на {% data variables.product.github %} на {% data variables.product.prodname_container_registry %}.',
      '{% ifversion ghes %}Владелец предприятия может{% else %}{% data variables.product.company_short %} может{% endif %} перенести образы Docker, ранее хранящиеся в реестре Docker на {% data variables.product.github %} на {% data variables.product.prodname_container_registry %}.',
    )

    content = content.replaceAll(
      'Вы можете увидеть, кто внес{% endif %} коммиты в репозиторий{% ifversion fpt or ghec %} и его зависимости.',
      'Вы можете увидеть, кто внес коммиты в репозиторий{% ifversion fpt or ghec %} и его зависимости{% endif %}.',
    )

    content = content.replaceAll(
      '{% ifversion enterprise-licensing-language %}license-language%else %}licenses{% license seats{% endif %}',
      '{% ifversion enterprise-licensing-language %}licenses{% else %}licensed seats{% endif %}',
    )

    content = content.replaceAll(
      '{% ifversion ghec %}аутентификации и{% endif %} провизионирования SCIM{% else %}с помощью Okta',
      '{% ifversion ghec %}SCIM{% else %}аутентификации и{% endif %} провизионирования с помощью Okta',
    )

    content = content.replaceAll(
      'связанную личность, активные сессии и авторизованные учетные{% else %}данные {% ifversion ghec %}SAML{% endif %}',
      '{% ifversion ghec %}связанную личность, активные сессии и авторизованные учетные данные{% else %}активные сессии SAML{% endif %}',
    )

    content = content.replaceAll(
      'доступом {% ifversion ghec %}к организациям, принадлежащим вашей организации{% endif %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.location.product_location %}.',
      'доступом {% ifversion ghec %}к организациям, принадлежащим вашей организации на {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}к {% data variables.location.product_location %}{% endif %}.',
    )

    content = content.replaceAll(
      '{% data variables.product.prodname_GH_code_security %}и доступны для аккаунтов и {% data variables.product.prodname_team %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}аккаунтов на {% data variables.product.prodname_ghe_server %}{% endif %}.{% ifversion fpt or ghec %}{% data variables.product.prodname_GH_secret_protection %}',
      '{% data variables.product.prodname_GH_code_security %} и {% data variables.product.prodname_GH_secret_protection %} доступны для {% ifversion fpt or ghec %}аккаунтов на {% data variables.product.prodname_team %} и {% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}аккаунтов на {% data variables.product.prodname_ghe_server %}{% endif %}.',
    )

    content = content.replaceAll(
      '{%. Назначение roleColumns = "read,triage,write,maintain", admin" | split: "," -%}',
      '{%- assign roleColumns = "read,triage,write,maintain,admin" | split: "," -%}',
    )
  }

  if (context.code === 'fr') {
    content = content.replaceAll('{% espaces de code %}', '{% codespaces %}')
    content = content.replaceAll('{%- espaces de code %}', '{%- codespaces %}')
    content = content.replaceAll('{% sinon %}', '{% else %}')
    content = content.replaceAll('{%- sinon %}', '{%- else %}')
    content = content.replaceAll('{% référentiel ifversion ', '{% ifversion ')
    content = content.replaceAll('{%- référentiel ifversion ', '{%- ifversion ')
    content = content.replace(/\{%-?\s*référentiel\s*-?%\}/g, '')
    content = content.replace(/\{%-?\s*paramètres\s*-?%\}/g, '')
    content = content.replace(/\{%-?\s*product\s*-?%\}/g, '')
    content = content.replace(
      /\{%(-?)\s*données\.(variables|reusables)\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
      '{%$1 data $2.$3$4',
    )
    content = content.replaceAll('{% données variables', '{% data variables')
    content = content.replaceAll('{% données réutilisables.', '{% data reusables.')
    content = content.replaceAll('{% variables de données.', '{% data variables.')
    content = content.replaceAll('{% de données variables.', '{% data variables.')
    content = content.replaceAll('{%- de données variables.', '{%- data variables.')
    content = content.replaceAll('{% de data variables.', '{% data variables.')
    content = content.replaceAll('{%- de data variables.', '{%- data variables.')
    content = content.replaceAll('{% autre %}', '{% else %}')
    content = content.replaceAll('{%- autre %}', '{%- else %}')
    content = content.replaceAll('{% brut %}', '{% raw %}')
    content = content.replaceAll('{%- brut %}', '{%- raw %}')
    content = content.replaceAll('{% %brut }', '{% raw %}')
    content = content.replaceAll('{% redessiner %}', '{% endraw %}')
    content = content.replaceAll('{%- redessiner %}', '{%- endraw %}')
    content = content.replaceAll('{% données ', '{% data ')
    content = content.replaceAll('{% Données variables', '{% data variables')
    content = content.replaceAll('{% Données réutilisables.', '{% data reusables.')
    content = content.replaceAll('{% Données Réutilisables.', '{% data reusables.')
    content = content.replaceAll('{% compte de données variables.', '{% data variables.')
    content = content.replaceAll('{%- compte de données variables.', '{%- data variables.')
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?ou [^%]*?%\}/g, (match) => {
      return match.replace(/ ou /g, ' or ')
    })
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?\bet\b[^%]*?%\}/g, (match) => {
      return match.replace(/ et /g, ' and ')
    })
    content = content.replace(/\{%-?\s*(?:if|ifversion|elsif)\s[^%]*?[«»][^%]*?%\}/g, (match) => {
      return match.replace(/«\s*/g, '"').replace(/\s*»/g, '"')
    })
    content = content.replace(/\{%-? (?:ifversion|elsif) [^%]*?%\}/g, (match) => {
      return match.replace(/(\d),(\d)/g, '$1.$2')
    })
    content = content.replaceAll('{% remarque %}', '{% note %}')
    content = content.replaceAll('{%- remarque %}', '{%- note %}')
    content = content.replaceAll('{%- remarque -%}', '{%- note -%}')
    content = content.replaceAll('{% avertissement %}', '{% warning %}')
    content = content.replaceAll('{%- avertissement %}', '{%- warning %}')
    content = content.replaceAll('{%- avertissement -%}', '{%- warning -%}')
    content = content.replaceAll('{% conseil %}', '{% tip %}')
    content = content.replaceAll('{%- conseil %}', '{%- tip %}')
    content = content.replaceAll('{%- conseil -%}', '{%- tip -%}')
    content = content.replaceAll('{% sinon %}', '{% else %}')
    content = content.replaceAll('{%- sinon %}', '{%- else %}')
    content = content.replaceAll('{% note de fin %}', '{% endnote %}')
    content = content.replaceAll('{%- note de fin %}', '{%- endnote %}')
    content = content.replaceAll('{% éclipse %}', '{% eclipse %}')
    content = content.replaceAll('{%- éclipse %}', '{%- eclipse %}')
    content = content.replaceAll('{% données_reutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- données_reutilisables.', '{%- data reusables.')
    content = content.replaceAll('{% données_réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- données_réutilisables.', '{%- data reusables.')
    content = content.replaceAll('{% composants réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- composants réutilisables.', '{%- data reusables.')
    // Match both forms, since an earlier fix may have already changed données to data.
    content = content.replaceAll(
      '{% données réutilisables propriétés-personnalisées valeurs-requises %}',
      '{% data reusables.organizations.custom-properties-required-values %}',
    )
    content = content.replaceAll(
      '{% data réutilisables propriétés-personnalisées valeurs-requises %}',
      '{% data reusables.organizations.custom-properties-required-values %}',
    )
    if (
      !content.includes('{% ifversion ') &&
      !content.includes('{%- ifversion ') &&
      !content.includes('{% elsif ') &&
      !content.includes('{%- elsif ') &&
      !content.includes('{% if ') &&
      !content.includes('{%- if ')
    ) {
      content = content.replaceAll('{% endif %}', '')
      content = content.replaceAll('{%- endif %}', '')
      content = content.replaceAll('{%- endif -%}', '')
    }
    content = content.replace(/\{%(-?)\s*pour\s+(\w+)\s+dans\s+/g, '{%$1 for $2 in ')
    content = content.replace(/\{%(-?)\s*pour\s+le\s+modèle\s+dans\s+/g, '{%$1 for model in ')
    content = content.replace(/\{%(-?)\s*pour\s+chaque\s+(\w+)\s+dans\s+/g, '{%$1 for $2 in ')
    content = content.replaceAll('{% des données variables.', '{% data variables.')
    content = content.replaceAll('{%- des données variables.', '{%- data variables.')
    content = content.replaceAll('{% des data variables.', '{% data variables.')
    content = content.replaceAll('{%- des data variables.', '{%- data variables.')
    content = content.replaceAll('{% assigner ', '{% assign ')
    content = content.replaceAll('{%- assigner ', '{%- assign ')
    content = content.replace(/\{%(-?)\s*quand\s+/g, '{%$1 when ')
    content = content.replaceAll('{% fincas %}', '{% endcase %}')
    content = content.replaceAll('{%- fincas %}', '{%- endcase %}')
    content = content.replaceAll('{% réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- réutilisables.', '{%- data reusables.')
    // Run last, so the specific path fixes above match first.
    content = content.replace(/\{%(-?)\s*données\s+/g, '{%$1 data ')
    content = content.replace(/\{%(-?\s*)data réutilisables\./g, '{%$1data reusables.')
    content = content.replace(/\{%(-?\s*)data variables de\./g, '{%$1data variables.')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sou\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sou\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\set\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\set\s/g, ' and '),
    )

    content = content.replace(
      /\{%-?(\s+(?:ifversion|elsif|if)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae)(?:\s+(?:or|and)\s+(?:not\s+)?(?:fpt|ghec|ghes|ghae))*)\}/g,
      '{%$1 %}',
    )

    content = content.replace(
      /\{%(-?)\s*des(?:\s+[^{}%\n]+?)?\s+variables\.([A-Za-z0-9._-]+)(\s*-?%\})/g,
      '{%$1 data variables.$2$3',
    )
    content = content.replaceAll('{% modules réutilisables.', '{% data reusables.')
    content = content.replaceAll('{%- modules réutilisables.', '{%- data reusables.')
    content = content.replaceAll('{% flux de travail variables.', '{% data variables.')
    content = content.replaceAll('{%- flux de travail variables.', '{%- data variables.')
    content = content.replaceAll('{% invite %}', '{% prompt %}')
    content = content.replaceAll('{%- invite %}', '{%- prompt %}')
    content = content.replaceAll('{% invite -%}', '{% prompt -%}')
    content = content.replaceAll('{%- invite -%}', '{%- prompt -%}')
    content = content.replaceAll(
      '{% collaborateurs invités ifversion %}',
      '{% ifversion guest-collaborators %}',
    )
    content = content.replaceAll(
      '{%- collaborateurs invités ifversion %}',
      '{%- ifversion guest-collaborators %}',
    )

    content = content.replace(
      /\{%(-?\s+(?:ifversion|elsif|if)\s+)(?:<|&lt;)(fpt|ghec|ghes|ghae|ghecom)\b/g,
      '{%$1$2',
    )

    content = content.replaceAll(
      '{% reusable (fr) classroom.vous-pouvez-créer-une-pull-request-pour-retour %}',
      '{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}',
    )

    content = content.replaceAll(
      'automatisation{% endif %} »{% elsif ghes %} de la barre latérale',
      'automatisation »{% elsif ghes %}{% endif %} de la barre latérale',
    )
  }

  if (context.code === 'ko') {
    content = content.replaceAll('{% 경고 %}', '{% warning %}')
    content = content.replaceAll('{% datda variables', '{% data variables')
    content = content.replaceAll('{%- datda variables', '{%- data variables')
    content = content.replace(
      /\{%(-?)\s*data를\s+[가-힣\s]+variables\.([A-Za-z0-9._-]+)\s*(-?)%\}/g,
      '{%$1 data variables.$2 $3%}',
    )
    content = content.replaceAll('[AUTOTITLE"을 참조하세요]', '[AUTOTITLE]')
    content = content.replaceAll('{% 데이터 variables', '{% data variables')
    content = content.replaceAll('{% 데이터 reusables.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 변수.', '{% data variables.')
    content = content.replaceAll('{% 데이터 변숫값.', '{% data variables.')
    content = content.replace(
      /1\. \{% ifversion ghes %\} \*\*아티팩트 및 로그 보존\*\*의 "아티팩트, 로그 및 캐시 설정" 구역에서 새 값을 입력합니다\./,
      '1. {% ifversion ghes %}"아티팩트, 로그 및 캐시 설정" 구역의 {% endif %}**아티팩트 및 로그 보존**에서 새 값을 입력합니다.',
    )
    content = content.replace(
      /1\. \{% ifversion ghes %\}"검사, 워크플로 실행, 상태, 아티팩트, 로그 및 캐시 설정" 섹션에서 \*\*검사, 워크플로 실행, 상태, 아티팩트 및 로그 보존\*\* 아래에 새 값을 입력합니다\./,
      '1. {% ifversion ghes %}"검사, 워크플로 실행, 상태, 아티팩트, 로그 및 캐시 설정" 섹션에서{% else %}{% endif %} **검사, 워크플로 실행, 상태, 아티팩트 및 로그 보존** 아래에 새 값을 입력합니다.',
    )
    content = content.replaceAll(
      '{% data variables.product.prodname_team %}의 {% ifversion fpt or ghec %}계정과 {% data variables.product.prodname_ghe_server %}{% endif %}의 {% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}계정에서 사용할 수 있습니다.',
      '{% ifversion fpt or ghec %}{% data variables.product.prodname_team %}의 계정과 {% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.prodname_ghe_server %}의 계정{% endif %}에서 사용할 수 있습니다.',
    )
    content = content.replaceAll('{% 기타 %}', '{% else %}')
    content = content.replaceAll('{%- 기타 %}', '{%- else %}')
    content = content.replaceAll('{% other %}', '{% else %}')
    content = content.replaceAll('{%- other %}', '{%- else %}')
    content = content.replaceAll('{% 참고 %}', '{% note %}')
    content = content.replaceAll('{%- 참고 %}', '{%- note %}')
    content = content.replaceAll('{% 원시 %}', '{% raw %}')
    content = content.replaceAll('{%- 원시 %}', '{%- raw %}')
    content = content.replaceAll('{% 들여쓰기_데이터_참조 ', '{% indented_data_reference ')
    content = content.replaceAll('{%- 들여쓰기_데이터_참조 ', '{%- indented_data_reference ')
    content = content.replaceAll('{% 옥티콘 ', '{% octicon ')
    content = content.replaceAll('{%- 옥티콘 ', '{%- octicon ')
    content = content.replaceAll('{% 행 머리글 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 행 머리글 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 행머리글 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 행머리글 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 엔드맥 %}', '{% endmac %}')
    content = content.replaceAll('{%- 엔드맥 %}', '{%- endmac %}')
    content = content.replaceAll('{% 윈도우즈 %}', '{% windows %}')
    content = content.replaceAll('{%- 윈도우즈 %}', '{%- windows %}')
    content = content.replaceAll('{% 윈도우 %}', '{% windows %}')
    content = content.replaceAll('{%- 윈도우 %}', '{%- windows %}')
    content = content.replaceAll('{% 데이터 재사용가능항목.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용 가능 항목.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용 가능항목.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용.', '{% data reusables.')
    content = content.replaceAll('{% 데이터 재사용 ', '{% data reusables.')
    content = content.replace(
      /(\{%-?\s*indented_data_reference\s+)재사용(?:\s+가능)?(?:\s+항목)?\./g,
      '$1reusables.',
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?또는[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*또는\s*/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?그리고[^%]*?-?%\}/g, (m) =>
      m.replace(/\s*그리고\s*/g, ' and '),
    )
    content = content.replaceAll('{% 그렇지 않으면 %}', '{% else %}')
    content = content.replaceAll('{%- 그렇지 않으면 %}', '{%- else %}')
    content = content.replaceAll('{% 옥티콘 ', '{% octicon ')
    content = content.replaceAll('{%- 옥티콘 ', '{%- octicon ')

    content = content.replaceAll('{% ifversion 명령 팔레트 %}', '{% ifversion command-palette %}')
    content = content.replaceAll('{%- ifversion 명령 팔레트 %}', '{%- ifversion command-palette %}')
    content = content.replaceAll('{% ifversion 하위 문제 %}', '{% ifversion sub-issues %}')
    content = content.replaceAll('{%- ifversion 하위 문제 %}', '{%- ifversion sub-issues %}')
    content = content.replaceAll(
      '{% ifversion 리포지토리-규칙 관리 %}',
      '{% ifversion repo-rules-management %}',
    )
    content = content.replaceAll(
      '{%- ifversion 리포지토리-규칙 관리 %}',
      '{%- ifversion repo-rules-management %}',
    )
    content = content.replaceAll(
      '{% ifversion 업데이트 알림 설정-22 %}',
      '{% ifversion update-notification-settings-22 %}',
    )
    content = content.replaceAll(
      '{%- ifversion 업데이트 알림 설정-22 %}',
      '{%- ifversion update-notification-settings-22 %}',
    )

    content = content.replaceAll('{% data Variables.', '{% data variables.')
    content = content.replaceAll('{%- data Variables.', '{%- data variables.')

    content = content.replaceAll('{{ 용어집.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{% 데이터 재사용.', '{% data reusables.')
    content = content.replaceAll('{% 행 머리글 %}', '{% rowheaders %}')
    content = content.replaceAll('{%- 행 머리글 %}', '{%- rowheaders %}')
    content = content.replaceAll('{% 윈도우즈 %}', '{% windows %}')
    content = content.replaceAll('{%- 윈도우즈 %}', '{%- windows %}')
    content = content.replaceAll('{% 엔드맥 %}', '{% endmac %}')
    content = content.replaceAll('{%- 엔드맥 %}', '{%- endmac %}')
    content = content.replaceAll('{% 주석 끝 %}', '{% endnote %}')
    content = content.replaceAll('{%- 주석 끝 %}', '{%- endnote %}')
    content = content.replaceAll('{% 데이터.variables.', '{% data variables.')
    content = content.replaceAll('{% 데이터.reusables.', '{% data reusables.')
    content = content.replaceAll('{% 데이터variables', '{% data variables')
    content = content.replaceAll('{% 데이터reusables', '{% data reusables')
    content = content.replaceAll('{%- 데이터variables', '{%- data variables')
    content = content.replaceAll('{%- 데이터reusables', '{%- data reusables')
    content = content.replaceAll('{% 재사용 가능 항목.', '{% data reusables.')
    content = content.replaceAll('{%- 재사용 가능 항목.', '{%- data reusables.')
    content = content.replaceAll('{% 재사용 가능.', '{% data reusables.')
    content = content.replaceAll('{%- 재사용 가능.', '{%- data reusables.')
    content = content.replaceAll('{% 데이터 재사용 가능 항목.', '{% data reusables.')
    content = content.replaceAll('{%- 데이터 재사용 가능 항목.', '{%- data reusables.')
    content = content.replaceAll('{% 데이터 재사용 가능.', '{% data reusables.')
    content = content.replaceAll('{%- 데이터 재사용 가능.', '{%- data reusables.')
    content = content.replaceAll(
      '{ 데이터 재사용 가능의 엔터프라이즈 관리 콘솔 설정 저장 }',
      '{% data reusables.enterprise_management_console.save-settings %}',
    )
    content = content.replaceAll(
      '{ 데이터 재사용 가능.감사_로그.보존_기간 }',
      '{% data reusables.audit_log.retention-periods %}',
    )
    content = content.replace(/\{%-?\s*만약\s+/g, (m) =>
      m.startsWith('{%-') ? '{%- if ' : '{% if ',
    )
    content = content.replace(/\{%-?\s*만일\s+/g, (m) =>
      m.startsWith('{%-') ? '{%- if ' : '{% if ',
    )
    content = content.replace(/\{%(-?)\s*위해\s+(\w+)\s+안에\s+/g, '{%$1 for $2 in ')
    content = content.replaceAll('{% Variable.', '{% data variables.')
    content = content.replaceAll('{%- Variable.', '{%- data variables.')

    content = content.replace(/\{%(-?)\s*캡처\s+(\w+)\s*(-?)%\}/g, '{%$1 capture $2 $3%}')

    content = content.replaceAll(
      '인스턴스에서 기본 제공 인증{% endif %}를 사용하는 경우 {% data variables.product.github %} 계정 {% ifversion ghes %}의 사용자 이름을 변경할 수 있습니다.',
      '{% data variables.product.github %} 계정의 사용자 이름을 변경할 수 있습니다.{% ifversion ghes %} 인스턴스에서 기본 제공 인증을 사용하는 경우.{% endif %}',
    )

    content = content.replaceAll(
      '자체 호스팅된 실행기에서 실행 중인 {% data variables.product.prodname_dependabot %}에 대한 액세스를 구성할 수도 있습니다.{% data variables.product.prodname_dependabot %}',
      '자체 호스팅된 실행기에서 실행 중인 {% data variables.product.prodname_dependabot %}에 대한 액세스를 구성할 수도 있습니다.{% endif %}',
    )

    content = content.replaceAll(
      '{% else %}에 대한 액세스를 제어할 수 있습니다.',
      '{% else %}조직의 설정{% endif %}에 대한 액세스를 제어할 수 있습니다.',
    )

    content = content.replaceAll(
      '{% data variables.product.prodname_dotcom %}.{% ifversion default-setup-self-hosted-runners-GHEC %}',
      '{% data variables.product.prodname_dotcom %}.{% endif %}',
    )

    if (
      context.dottedPath === 'reusables.repositories.about-READMEs' ||
      context.relativePath?.endsWith('data/reusables/repositories/about-READMEs.md')
    ) {
      content = content.replace(/\{%-?\s*endif\s*-?%\}\s*(\{%-?\s*ifversion\s)/g, '$1')
    }

    content = content.replaceAll(
      '이전 조직 구성원을 초대하여{% else %}조직에 이전 멤버를{% endif%} 다시 추가하고 해당 사용자의 이전 역할, 액세스 권한, 포크 및 설정을 복원할지 여부를 선택할 수 {% ifversion fpt or ghec %}있습니다.',
      '{% ifversion fpt or ghec %}이전 조직 구성원을 초대하여{% else %}조직에 이전 멤버를{% endif %} 다시 추가하고 해당 사용자의 이전 역할, 액세스 권한, 포크 및 설정을 복원할지 여부를 선택할 수 있습니다.',
    )

    content = content.replaceAll(
      '여기에는 공용, 프라이빗 및 내부{% elsif fpt %}모두 공용 및 프라이빗{% endif %} 리포지토리가 포함됩니다{% ifversion ghec %}.',
      '여기에는 {% ifversion ghec %}공용, 프라이빗 및 내부{% elsif fpt %}공용 및 프라이빗 모두{% endif %} 리포지토리가 포함됩니다.',
    )

    content = content.replaceAll(
      '"조직 작업 변수 관리" 또는 "조직 작업 비밀 관리" 권한이{% endif %} 있는 조직 소유자{% ifversion custom-org-roles %} 및 사용자는 조직 수준에서 비밀 또는 변수를 만들 수 있습니다.',
      '조직 소유자{% ifversion custom-org-roles %} 및 "조직 작업 변수 관리" 또는 "조직 작업 비밀 관리" 권한이 있는 사용자{% endif %}는 조직 수준에서 비밀 또는 변수를 만들 수 있습니다.',
    )

    content = content.replaceAll(
      '2026{% else %}{% data variables.product.prodname_ghe_server %}년 8월 3일 3.24{% endif %} 이전에 {% ifversion fpt or ghec %}단일 콜백 URL을 사용하도록 설정된 앱에는 해당 콜백 URL에 대해 와일드카드 일치가 활성화되어 있습니다.',
      '{% ifversion fpt or ghec %}2026년 8월 3일{% else %}{% data variables.product.prodname_ghe_server %} 3.24{% endif %} 이전에 단일 콜백 URL을 사용하도록 설정된 앱에는 해당 콜백 URL에 대해 와일드카드 일치가 활성화되어 있습니다.',
    )

    content = content.replaceAll(
      '예를 들어 `{{ page.title }`{% endraw %} 대신 {% raw %}`{{ page.title }}`인 경우입니다.',
      '예를 들어 {% raw %}`{{ page.title }`{% endraw %} 대신 {% raw %}`{{ page.title }}`{% endraw %}인 경우입니다.',
    )

    content = content.replaceAll(
      '1. "리포지토리 외부 협력자 초대{% ifversion ghec %}에서 설정 변경에 대한 정보를 검토합니다{% elsif ghes %}." {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}',
      '1. "리포지토리{% ifversion ghec %} 외부 협력자{% elsif ghes %} 초대{% endif %}"에서 설정 변경에 대한 정보를 검토합니다. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}',
    )

    content = content.replaceAll(
      '퍼블릭 리포지토리(퍼블릭 패키지)에 패키지를 게시하여 {% else %}엔터프라이즈의 모든 사용자{% endif %}{% ifversion fpt or ghec %} 모두{% data variables.product.prodname_dotcom %}과(와) 공유하거나 프라이빗 리포지토리의 패키지(프라이빗 패키지)를 게시하여 협력자 또는 조직과 공유할 수 있습니다.',
      '퍼블릭 리포지토리(퍼블릭 패키지)에 패키지를 게시하여 {% ifversion fpt or ghec %}모두 {% data variables.product.prodname_dotcom %}과(와){% else %}엔터프라이즈의 모든 사용자와{% endif %} 공유하거나 프라이빗 리포지토리의 패키지(프라이빗 패키지)를 게시하여 협력자 또는 조직과 공유할 수 있습니다.',
    )

    content = content.replaceAll(
      '{% data variables.copilot.copilot_autofix_short %} 제안{% endif %} 사용 여부에 따라 수정된 경고 수 {% ifversion code-scanning-autofix %}, 해결되지 않은 상태로 병합된 수',
      '{% ifversion code-scanning-autofix %} {% data variables.copilot.copilot_autofix_short %} 제안 사용 여부에 따라{% endif %} 수정된 경고 수, 해결되지 않은 상태로 병합된 수',
    )
  }

  if (context.code === 'de') {
    // {%– uses an en dash (U+2013) instead of a hyphen.
    content = content.replaceAll('{%–', '{%-')

    content = content.replaceAll('{% Daten variables', '{% data variables')
    content = content.replaceAll('{% daten variables', '{% data variables')
    content = content.replaceAll('{% Daten reusables', '{% data reusables')
    content = content.replaceAll('{%- Daten reusables', '{%- data reusables')
    content = content.replaceAll('{% Datenseite variables', '{% data variables')
    content = content.replaceAll('{%- Datenseite variables', '{%- data variables')
    content = content.replaceAll('{% data wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{% Daten wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{% Data wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{%- Daten wiederverwendbare.', '{%- data reusables.')
    content = content.replaceAll('{% Daten wiederverwendbar.', '{% data reusables.')
    content = content.replaceAll('{% daten wiederverwendbars.', '{% data reusables.')
    content = content.replaceAll('{% daten wiederverwendbar.', '{% data reusables.')
    content = content.replaceAll('{% daten wiederverwendbare.', '{% data reusables.')
    content = content.replaceAll('{%- Daten variables', '{%- data variables')
    content = content.replaceAll('{% Daten Variablen.', '{% data variables.')
    content = content.replaceAll('{% daten reusables', '{% data reusables')
    content = content.replaceAll('{%- daten reusables', '{%- data reusables')
    content = content.replaceAll('{% unformatierte %}', '{% raw %}')
    content = content.replaceAll('{%- unformatierte %}', '{%- raw %}')
    content = content.replaceAll('{% Datenvariablen.', '{% data variables.')
    content = content.replaceAll('{%- Datenvariablen.', '{%- data variables.')
    content = content.replaceAll('{%-Daten variables', '{%- data variables')
    content = content.replaceAll('{%-Daten-variables', '{%- data variables')
    content = content.replace(/\{%-(Daten[A-Za-z]+)\s+(variables|reusables)/g, '{%- data $2')
    content = content.replaceAll('{%- ifversion fpt oder ghec %}', '{%- ifversion fpt or ghec %}')
    content = content.replaceAll('{% ifversion fpt oder ghec %}', '{% ifversion fpt or ghec %}')
    content = content.replace(/\{%-? (?:ifversion|elsif|if) [^%]*?oder [^%]*?%\}/g, (match) => {
      return match.replace(/ oder /g, ' or ')
    })
    content = content.replaceAll('{% Hinweis %}', '{% note %}')
    content = content.replaceAll('{%- Hinweis %}', '{%- note %}')
    content = content.replaceAll('{%- Hinweis -%}', '{%- note -%}')
    content = content.replaceAll('{% Warnung %}', '{% warning %}')
    content = content.replaceAll('{%- Warnung %}', '{%- warning %}')
    content = content.replaceAll('{%- Warnung -%}', '{%- warning -%}')
    content = content.replaceAll('{% Tipp %}', '{% tip %}')
    content = content.replaceAll('{%- Tipp %}', '{%- tip %}')
    content = content.replaceAll('{%- Tipp -%}', '{%- tip -%}')
    content = content.replaceAll('{% Codespaces %}', '{% codespaces %}')
    content = content.replaceAll('{%- Codespaces %}', '{%- codespaces %}')
    content = content.replaceAll('{% Aufforderung %}', '{% prompt %}')
    content = content.replaceAll('{%- Aufforderung %}', '{%- prompt %}')
    content = content.replaceAll('{% Endprompt %}', '{% endprompt %}')
    content = content.replaceAll('{%- Endprompt %}', '{%- endprompt %}')
    content = content.replace(/\{%-? für (\w+) in /g, (match) => {
      return match.replace('für', 'for')
    })
    content = content.replaceAll('{% ansonsten %}', '{% else %}')
    content = content.replaceAll('{%- ansonsten %}', '{%- else %}')
    content = content.replaceAll('{% andernfalls %}', '{% else %}')
    content = content.replaceAll('{%- andernfalls %}', '{%- else %}')
    content = content.replaceAll('{% sonst %}', '{% else %}')
    content = content.replaceAll('{%- sonst %}', '{%- else %}')
    content = content.replace(/\{% andernfalls ifversion\s+(.+?)\s*%\}/g, '{% elsif $1 %}')
    content = content.replace(/\{% sonst ifversion\s+(.+?)\s*%\}/g, '{% elsif $1 %}')
    content = content.replaceAll('{% Zeilenkopfzeilen %}', '{% rowheaders %}')
    content = content.replaceAll('{%- Zeilenkopfzeilen %}', '{%- rowheaders %}')
    content = content.replaceAll('{% Rohdaten %}', '{% raw %}')
    content = content.replaceAll('{%- Rohdaten %}', '{%- raw %}')
    content = content.replaceAll('{%- Rohdaten -%}', '{%- raw -%}')
    content = content.replaceAll('{% Endnotiz %}', '{% endnote %}')
    content = content.replaceAll('{%- Endnotiz %}', '{%- endnote %}')
    content = content.replaceAll('{% data-variables.', '{% data variables.')
    content = content.replaceAll('{%- data-variables.', '{%- data variables.')
    content = content.replaceAll('{%- Datenworkflow variables.', '{%- data variables.')
    content = content.replaceAll('{% Datenworkflow variables.', '{% data variables.')
    content = content.replaceAll('{% ifec ', '{% ifversion ')
    content = content.replaceAll('{%- ifec ', '{%- ifversion ')
    content = content.replaceAll('{% andere %}', '{% else %}')
    content = content.replaceAll('{%- andere %}', '{%- else %}')
    content = content.replaceAll('{% Dateninstanz ', '{% data ')
    content = content.replaceAll('{% Datenauflistung ', '{% data ')
    content = content.replaceAll('{%- Datenauflistung ', '{%- data ')
    content = content.replaceAll(
      '{% ifversion-Sicherheitskonfigurationen %}',
      '{% ifversion security-configurations %}',
    )
    content = content.replaceAll(
      '{%- ifversion-Sicherheitskonfigurationen %}',
      '{%- ifversion security-configurations %}',
    )
    content = content.replaceAll('{% ifversion-Unterprobleme %}', '{% ifversion sub-issues %}')
    content = content.replaceAll('{%- ifversion-Unterprobleme %}', '{%- ifversion sub-issues %}')
    content = content.replaceAll(
      '{% ifversion-Sicherheitskampagnen %}',
      '{% ifversion security-campaigns %}',
    )
    content = content.replaceAll(
      '{%- ifversion-Sicherheitskampagnen %}',
      '{%- ifversion security-campaigns %}',
    )
    content = content.replaceAll('{%Webseite data variables', '{% data variables')
    content = content.replaceAll('{% Webseite data variables', '{% data variables')
    content = content.replaceAll('{%- Webseite data variables', '{%- data variables')
    content = content.replaceAll('{% Daten nur variables', '{% data variables')
    content = content.replaceAll('{%- Daten nur variables', '{%- data variables')
    content = content.replaceAll('{% Dateneinstellungen variables', '{% data variables')
    content = content.replaceAll('{%- Dateneinstellungen variables', '{%- data variables')
    content = content.replaceAll('{% Datenpaket variables', '{% data variables')
    content = content.replaceAll('{%- Datenpaket variables', '{%- data variables')
    content = content.replaceAll('{% datan variables', '{% data variables')
    content = content.replaceAll('{%- datan variables', '{%- data variables')
    content = content.replaceAll('{%-Datenvariablen.', '{%- data variables.')
    // Run last, so the specific path fixes above match first.
    content = content.replace(/\{%(-?)\s*[Dd]aten\s+/g, '{%$1 data ')
    content = content.replace(
      /\{%(-?\s*)data wiederverwendbar(?:e|en|ens)?\./g,
      '{%$1data reusables.',
    )
    content = content.replace(/\{%(-?\s*)data Variablen\./g, '{%$1data variables.')
    content = content.replace(/\{%(-?\s*)data variablen\./g, '{%$1data variables.')
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\soder\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\soder\s/g, ' or '),
    )
    content = content.replace(/\{%-?\s+(?:ifversion|elsif|if)\s+[^%]*?\sund\s[^%]*?-?%\}/g, (m) =>
      m.replace(/\sund\s/g, ' and '),
    )
    content = content.replaceAll('{% eingerucktes_datenverweis ', '{% indented_data_reference ')
    content = content.replaceAll('{%- eingerucktes_datenverweis ', '{%- indented_data_reference ')
    content = content.replaceAll(
      '{% ifversion unveränderliche Versionen %}',
      '{% ifversion immutable-releases %}',
    )
    content = content.replaceAll(
      '{%- ifversion unveränderliche Versionen %}',
      '{%- ifversion immutable-releases %}',
    )

    content = content.replaceAll(
      'Mit angepassten Organisationsrollen kannst du den Zugriff auf die Einstellungen deiner {% ifversion org-custom-role-with-repo-permissions %}Organisation und die Repositories{% else %}einer Organisation steuern.',
      'Mit angepassten Organisationsrollen kannst du den Zugriff auf die Einstellungen deiner {% ifversion org-custom-role-with-repo-permissions %}Organisation und die Repositories{% else %}einer Organisation{% endif %} steuern.',
    )

    content = content.replaceAll(
      '{% ifversion ghes %}ein, um Authentifizierung und Provisionierung für {% data variables.product.prodname_emus %} auf {% data variables.product.prodname_dotcom_the_website %} oder {% data variables.enterprise.data_residency_site %}{% endif %} für Ihr Unternehmen{% else %} zentral zu verwalten.',
      '{% ifversion ghes %}ein, um Authentifizierung und Provisionierung für Ihr Unternehmen zentral zu verwalten{% else %}für {% data variables.product.prodname_emus %} auf {% data variables.product.prodname_dotcom_the_website %} oder {% data variables.enterprise.data_residency_site %}{% endif %}.',
    )

    content = content.replaceAll(
      'auf selbst-gehosteten Runnern ausführen.{% data variables.product.prodname_dependabot %}',
      'auf selbst-gehosteten Runnern ausführen.{% endif %}',
    )
    content = content.replaceAll(
      'werden 200 GB auf dem Stammdateisystem verfügbar sein. Die verbleibenden 200GB{% else %}',
      'werden {% ifversion ghes %}200 GB auf dem Stammdateisystem verfügbar sein. Die verbleibenden 200GB{% else %}',
    )

    content = content.replaceAll(
      '1. Wählen Sie unter "Repository {% ifversion ghec %}Einladungen für externe Mitarbeiter{% elsif ghes %}" das Dropdown-Menü aus und wählen Sie eine Richtlinie.',
      '1. Wählen Sie unter "Repository {% ifversion ghec %}Einladungen für externe Mitarbeiter{% elsif ghes %}Einladungen{% endif %}" das Dropdown-Menü aus und wählen Sie eine Richtlinie.',
    )

    content = content.replaceAll(
      '{% ifversion ghec %}Wenn Ihr Unternehmen {% data variables.product.prodname_emus %} verwendet, können Sie ebenfalls verhindern, dass Benutzer Repositorys erstellen, die ihren Benutzerkonten gehören. ',
      '{% ifversion ghec %}Wenn Ihr Unternehmen {% data variables.product.prodname_emus %} verwendet, können Sie{% endif %} ebenfalls verhindern, dass Benutzer Repositorys erstellen, die ihren Benutzerkonten gehören. ',
    )
  }

  content = content.replace(
    /(\* \{%[- ]prompt [-]?%\}(?![^\n]*\{%-?\s*endprompt\s*-?%\})[^\n]*'cat is' : 'cats are'\} hungry\.[^\n]*(?:\?|？)[^\n]*)(\n|$)/g,
    '$1{% endprompt %}$2',
  )

  content = content.replace(/\{%-?[^%]*?-?%\}/g, (match) => {
    return match.replace(/[«»“”„]/g, '"').replace(/[‘’‚]/g, "'")
  })

  content = content.replace(
    /\{%(-?)\s+(ifversion|elsif|if)\s+([^%]*?)\s*(-?)%\}/g,
    (_m, dashOpen, tag, body, dashClose) =>
      `{%${dashOpen} ${tag} ${body.replace(/\s+/g, ' ').trim()} ${dashClose}%}`,
  )

  if (englishContent && content.includes('{% octicon ')) {
    const englishNames: string[] = []
    for (const m of englishContent.matchAll(/\{%-?\s*octicon\s+"([^"]*)"/g)) {
      englishNames.push(m[1])
    }
    const translatedAll = [...content.matchAll(/\{%-?\s*octicon\b[^%]*%\}/g)]
    const translatedMatches = [...content.matchAll(/\{%-?\s*octicon\s+"([^"]*)"/g)]
    if (
      englishNames.length > 0 &&
      translatedMatches.length === englishNames.length &&
      translatedMatches.some((m, i) => m[1] !== englishNames[i])
    ) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*octicon\s+")([^"]*)(")/g,
        (_match, prefix, _name, suffix) => {
          const englishName = englishNames[i++]
          return `${prefix}${englishName}${suffix}`
        },
      )
    } else if (englishNames.length > 0) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*octicon\s+")([^"]*)(")/g,
        (match, prefix, name, suffix) => {
          // eslint-disable-next-line no-control-regex
          if (/[^\x00-\x7F]/.test(name)) {
            const englishName = englishNames[Math.min(i, englishNames.length - 1)]
            i++
            return `${prefix}${englishName}${suffix}`
          }
          i++
          return match
        },
      )
    }

    if (englishNames.length > 0 && translatedAll.length === englishNames.length) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*octicon)(\s+)([^"%][^%]*?)(\s*-?%\})/g,
        (_m, head, ws, body, tail) => {
          const name = englishNames[i++]
          return `${head}${ws}"${name}" ${body.trim()} ${tail.trimStart()}`
        },
      )
    }
  }

  if (englishContent && content.includes('{% indented_data_reference ')) {
    const englishArgs: string[] = []
    for (const m of englishContent.matchAll(
      /\{%-?\s*indented_data_reference\s+([^%]*?)\s*-?%\}/g,
    )) {
      englishArgs.push(m[1].trim())
    }
    const translatedMatches = [
      ...content.matchAll(/\{%-?\s*indented_data_reference\s+([^%]*?)\s*-?%\}/g),
    ]
    if (
      englishArgs.length > 0 &&
      translatedMatches.length === englishArgs.length &&
      translatedMatches.some((m, i) => m[1].trim() !== englishArgs[i])
    ) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*indented_data_reference\s+)([^%]*?)(\s*-?%\})/g,
        (_match, prefix, _args, suffix) => {
          const englishArg = englishArgs[i++]
          return `${prefix}${englishArg}${suffix}`
        },
      )
    } else if (englishArgs.length > 0) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*indented_data_reference\s+)([^%]*?)(\s*-?%\})/g,
        (match, prefix, args, suffix) => {
          // eslint-disable-next-line no-control-regex
          if (/[^\x00-\x7F]/.test(args)) {
            const englishArg = englishArgs[Math.min(i, englishArgs.length - 1)]
            i++
            return `${prefix}${englishArg}${suffix}`
          }
          i++
          return match
        },
      )
    }
  }

  if (englishContent && content.includes('{% data ')) {
    const englishArgs: string[] = []
    for (const m of englishContent.matchAll(/\{%-?\s*data\s+([^%]*?)\s*-?%\}/g)) {
      englishArgs.push(m[1].trim())
    }
    const translatedMatches = [...content.matchAll(/\{%-?\s*data\s+([^%]*?)\s*-?%\}/g)]
    if (
      englishArgs.length > 0 &&
      translatedMatches.length === englishArgs.length &&
      translatedMatches.some((m, i) => m[1].trim() !== englishArgs[i])
    ) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*data\s+)([^%]*?)(\s*-?%\})/g,
        (_match, prefix, _args, suffix) => {
          const englishArg = englishArgs[i++]
          return `${prefix}${englishArg}${suffix}`
        },
      )
    } else if (englishArgs.length > 0) {
      let i = 0
      content = content.replace(
        /(\{%-?\s*data\s+)([^%]*?)(\s*-?%\})/g,
        (match, prefix, args, suffix) => {
          // eslint-disable-next-line no-control-regex
          if (/[^\x00-\x7F]/.test(args)) {
            const englishArg = englishArgs[Math.min(i, englishArgs.length - 1)]
            i++
            return `${prefix}${englishArg}${suffix}`
          }
          i++
          return match
        },
      )
    }
  }

  content = content.replace(/\s*<\|endoftext\|>\s*/g, ' ')

  content = content.replaceAll('{% Data ', '{% data ')
  content = content.replaceAll('{%- Data ', '{%- data ')

  content = content.replaceAll('{% Windows %}', '{% windows %}')
  content = content.replaceAll('{%- Windows %}', '{%- windows %}')
  content = content.replaceAll('{% Linux %}', '{% linux %}')
  content = content.replaceAll('{%- Linux %}', '{%- linux %}')
  content = content.replaceAll('{% Eclipse %}', '{% eclipse %}')
  content = content.replaceAll('{%- Eclipse %}', '{%- eclipse %}')
  content = content.replaceAll('{% Mac %}', '{% mac %}')
  content = content.replaceAll('{%- Mac %}', '{%- mac %}')

  content = content.replaceAll('{% Endwindows %}', '{% endwindows %}')
  content = content.replaceAll('{%- Endwindows %}', '{%- endwindows %}')
  content = content.replace(/\{% Elsif /g, '{% elsif ')
  content = content.replaceAll('{% Endif %}', '{% endif %}')
  content = content.replaceAll('{%- Endif %}', '{%- endif %}')
  content = content.replaceAll('{%- Endif -%}', '{%- endif -%}')

  content = content.replaceAll('{% endifen %}', '{% endif %}')
  content = content.replaceAll('{%- endifen %}', '{%- endif %}')
  content = content.replaceAll('{% Endifen %}', '{% endif %}')
  content = content.replaceAll('{%- Endifen %}', '{%- endif %}')
  content = content.replaceAll('{% endif _%}', '{% endif %}')

  content = content.replaceAll('{% okticon ', '{% octicon ')

  content = content.replaceAll('{% dada variables', '{% data variables')
  content = content.replaceAll('{% % data', '{% data')

  content = content.replaceAll('{% data .variables.', '{% data variables.')
  content = content.replaceAll('{%- data .variables.', '{%- data variables.')
  content = content.replaceAll('{% data .reusables.', '{% data reusables.')
  content = content.replaceAll('{%- data .reusables.', '{%- data reusables.')

  content = content.replaceAll('{% data variable.', '{% data variables.')
  content = content.replaceAll('{%- data variable.', '{%- data variables.')
  content = content.replaceAll('{% data reusable.', '{% data reusables.')
  content = content.replaceAll('{%- data reusable.', '{%- data reusables.')

  content = content.replace(/href=""https:\/\//g, 'href="https://')

  content = content.replaceAll('<b></b>', '')
  content = content.replaceAll('<u></u>', '')

  content = content.replace(/(\{%-? )ifversion-([a-z][\w-]*\s*%\})/g, '$1ifversion $2')

  content = content.replaceAll('["AUTOTITLE]', '"[AUTOTITLE]')
  content = content.replaceAll('[ AUTOTITLE](', '[AUTOTITLE](')
  content = content.replaceAll('[ "AUTOTITLE](', '[AUTOTITLE](')
  content = content.replaceAll('[AUTOTITLE] (', '[AUTOTITLE](')

  // Run after the per-language fixes, which turn {{% данных variables into {{% data variables.
  content = content.replaceAll('{{% octicon', '{% octicon')
  content = content.replaceAll('{{% endif %}}', '{% endif %}')
  content = content.replaceAll('{{% endif %}', '{% endif %}')
  content = content.replaceAll('{{%endif %}', '{% endif %}')
  content = content.replaceAll('{{% data variables.', '{% data variables.')
  content = content.replaceAll('{{% data reusables.', '{% data reusables.')
  content = content.replaceAll('{{% ifversion ', '{% ifversion ')
  content = content.replaceAll('{{% else %}}', '{% else %}')
  content = content.replaceAll('{{% elsif ', '{% elsif ')
  content = content.replaceAll('{{% vscode %}}', '{% vscode %}')
  content = content.replaceAll('{{% endvscode %}}', '{% endvscode %}')
  content = content.replaceAll('{{% endvisualstudio %}}', '{% endvisualstudio %}')

  content = content.replaceAll('{% {% ', '{% ')
  content = content.replaceAll('{%{% ', '{% ')

  content = content.replace(/\{%{2,}/g, '{%')
  content = content.replaceAll('%%}', '%}')

  content = content.replaceAll('%{% data', '{% data')
  content = content.replaceAll('%{% ifversion', '{% ifversion')

  content = content.replaceAll('{ endif %}%', '{% endif %}')
  content = content.replaceAll('{ endif% %}', '{% endif %}')
  // An empty {%} tag is typically {% else %}.
  content = content.replace(/\{%\}(?!})/g, '{% else %}')
  // A tag with only whitespace for a name is almost always {% endif %}.
  content = content.replace(/\{%\s+\}/g, '{% endif %}')

  content = content.replaceAll('{else %}', '{% else %}')
  content = content.replaceAll('{endif %}', '{% endif %}')
  content = content.replaceAll('{%else %}', '{% else %}')

  content = content.replaceAll('{%**', '{% else %}**')

  content = content.replaceAll('%**}', '%}**')

  content = content.replaceAll('{{% variables.', '{% data variables.')

  content = content.replaceAll('%}}', '%}')

  content = content.replaceAll('{% variables.', '{% data variables.')
  content = content.replaceAll('{% reusables.', '{% data reusables.')
  content = content.replaceAll('{% datavariables', '{% data variables')
  content = content.replaceAll('{% datavariable.', '{% data variables.')
  content = content.replaceAll('{% datavariable ', '{% data variables ')

  content = content.replaceAll('{% %} de dados reusables.', '{% data reusables.')
  content = content.replaceAll('{% %} de dados variables.', '{% data variables.')

  // Split, not regex, to avoid catastrophic backtracking on large content.
  if (content.includes('{% %}') && content.includes('{% raw %}')) {
    const parts = content.split('{% raw %}')
    for (let i = 1; i < parts.length; i++) {
      parts[i] = parts[i].replace('{% %}', '{% endraw %}')
    }
    content = parts.join('{% raw %}')
  }

  content = content.replace(
    /(\{% ifversion [^%]*?%\}[^{]*?)\{% %\}([^{]*?\{% endif %\})/g,
    '$1{% else %}$2',
  )

  // A remaining {% %} is almost always {% endif %}.
  content = content.replaceAll('{% %}', '{% endif %}')

  content = content.replace(/\{ +%([^%]+?)% *\}/g, '{%$1%}')

  // Run after the per-language fixes: any {% still followed by non-ASCII text is never a valid tag.
  // eslint-disable-next-line no-control-regex
  content = content.replace(/\{% (?=[^\x00-\x7F])/g, '')

  content = content.replace(/\{% \. /g, '')

  content = content.replace(/({% data [\w.-]+ %)(?!})/g, '$1}')

  // eslint-disable-next-line no-control-regex
  content = content.replace(/({% data [\w.-]+) (?=[^\x00-\x7F])/g, '$1 %} ')

  // Prebuild Sets to avoid O(tags × contentLength) includes scans.
  if (englishContent) {
    const englishLinebreaks = new Set<string>()
    const englishSpaces = new Set<string>()
    for (const m of englishContent.matchAll(/\{%.+?%\}[\n ]/g)) {
      if (m[0].endsWith('\n')) englishLinebreaks.add(m[0])
      else englishSpaces.add(m[0])
    }
    if (englishLinebreaks.size > 0) {
      content = content.replace(/\{%(.+?)%\} /g, (match, _p1, offset, string) => {
        if (match.lastIndexOf('{%') > 0) return match
        const lineStart = (string as string).lastIndexOf('\n', offset) + 1
        if (/^[ \t]{0,3}#{1,6}/.test((string as string).slice(lineStart, offset))) return match
        const withLinebreak = `${match.slice(0, -1)}\n`
        if (englishLinebreaks.has(withLinebreak) && !englishSpaces.has(match)) {
          return withLinebreak
        }
        return match
      })
      if (englishContent.includes('{% endif %}\n| ')) {
        content = content.replace(/\{% endif %\} \| /g, '{% endif %}\n| ')
      }
    }
  }

  content = content.replaceAll(' | | ', ' |\n| ')

  // Run after the specific fixes above, and swap only when no other tag sits between, so nesting survives.
  {
    const noTag = '(?:(?!\\{%)[\\s\\S])*?'
    const reorderRegex = new RegExp(
      `(\\{%-?\\s*ifversion\\s+[^%]+?%\\})(${noTag})\\{%-?\\s*endif\\s*-?%\\}(${noTag})\\{%-?\\s*else\\s*-?%\\}`,
      'g',
    )
    content = content.replace(reorderRegex, '$1$2{% else %}$3{% endif %}')
  }

  if (englishContent) {
    const englishTrimmed = englishContent.trimEnd()
    if (englishTrimmed.endsWith('{% endif %}') && !/\s\{% endif %\}$/.test(englishTrimmed)) {
      const contentTrimmed = content.trimEnd()
      if (!contentTrimmed.endsWith('{% endif %}')) {
        const openers = (contentTrimmed.match(/\{%-?\s*ifversion\b/g) || []).length
        const closers = (contentTrimmed.match(/\{%-?\s*endif\b/g) || []).length
        if (openers - closers === 1) {
          content = `${contentTrimmed}{% endif %}\n`
        }
      }
    }
  }

  // Earlier normalizations can recreate {{% KEYWORD after the keyword fixes run, so catch it here.
  content = content.replace(
    /\{\{(%\s*(?:data |ifversion |elsif |endif\b|else\b|octicon |note\b|endnote\b|tip\b|endtip\b|raw\b|endraw\b|comment\b|endcomment\b|for |endfor\b|assign |vscode\b|endvscode\b|visualstudio\b|endvisualstudio\b|rowheaders\b|endrowheaders\b))/g,
    '{$1',
  )

  // Run after the catch-all, which can leave {%raw with no space.
  content = content.replaceAll('{%raw %}', '{% raw %}')
  content = content.replaceAll('{%raw -%}', '{% raw -%}')
  content = content.replaceAll('{%endraw %}', '{% endraw %}')
  content = content.replaceAll('{%endraw -%}', '{% endraw -%}')

  content = stripLegacyAlertTags(content)

  const closerToOpeners: Array<[string, RegExp]> = [
    ['endif', /\{%-?\s*(?:if|ifversion)\s/],
    ['endfor', /\{%-?\s*for\s/],
    ['endraw', /\{%-?\s*raw\s*-?%\}/],
    ['endcase', /\{%-?\s*case\s/],
    ['endcomment', /\{%-?\s*comment\s*-?%\}/],
    ['endcapture', /\{%-?\s*capture\s/],
    ['endnote', /\{%-?\s*note\s*-?%\}/],
    ['endwarning', /\{%-?\s*warning\s*-?%\}/],
    ['endtip', /\{%-?\s*tip\s*-?%\}/],
    ['endcaution', /\{%-?\s*caution\s*-?%\}/],
    ['endimportant', /\{%-?\s*important\s*-?%\}/],
    ['endrowheaders', /\{%-?\s*rowheaders\s*-?%\}/],
    ['enddesktop', /\{%-?\s*desktop\s*-?%\}/],
    ['endmac', /\{%-?\s*mac\s*-?%\}/],
    ['endwebui', /\{%-?\s*webui\s*-?%\}/],
    ['endwindowsterminal', /\{%-?\s*windowsterminal\s*-?%\}/],
    ['endwindows', /\{%-?\s*windows\s*-?%\}/],
    ['endlinux', /\{%-?\s*linux\s*-?%\}/],
    ['endeclipse', /\{%-?\s*eclipse\s*-?%\}/],
    ['endjetbrains', /\{%-?\s*jetbrains\s*-?%\}/],
    ['endvscode', /\{%-?\s*vscode\s*-?%\}/],
    ['endvisualstudio', /\{%-?\s*visualstudio\s*-?%\}/],
    ['endprompt', /\{%-?\s*prompt\s*-?%\}/],
    ['endmobile', /\{%-?\s*mobile\s*-?%\}/],
    ['endcli', /\{%-?\s*cli\s*-?%\}/],
    ['endcurl', /\{%-?\s*curl\s*-?%\}/],
    ['endindented_data_reference', /\{%-?\s*indented_data_reference\s/],
  ]

  if (context.skipOrphanStripping) {
    return content
  }

  for (const [closer, openerRegex] of closerToOpeners) {
    const closerRegex = new RegExp(`\\{%-?\\s*${closer}\\s*-?%\\}`, 'g')
    const closers = content.match(closerRegex)
    if (!closers) continue
    const globalOpener = new RegExp(openerRegex.source, `${openerRegex.flags}g`)
    const openers = content.match(globalOpener)
    const openerCount = openers ? openers.length : 0
    const closerCount = closers.length
    if (closerCount <= openerCount) continue
    let toRemove = closerCount - openerCount
    const positions: Array<{ start: number; end: number }> = []
    closerRegex.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = closerRegex.exec(content)) !== null) {
      positions.push({ start: m.index, end: m.index + m[0].length })
    }
    // Remove extras from the end, where translators append them.
    for (let i = positions.length - 1; i >= 0 && toRemove > 0; i--, toRemove--) {
      const { start, end } = positions[i]
      content = content.slice(0, start) + content.slice(end)
    }
  }

  if (!/\{%-?\s*(?:if|ifversion)\s/.test(content)) {
    content = content.replace(/\{%-?\s*else\s*-?%\}/g, '')
    content = content.replace(/\{%-?\s*elsif\s+[^%]*?-?%\}/g, '')
  }

  return content
}

// Rejoin markers that the translation pipeline split from their content, which breaks rendering.
// Markers allow 0 to 3 leading spaces, matching CommonMark.
// Continuations need 6+ spaces, so 4-space indented code stays untouched.
// Standalone paragraphs need 9+ spaces: artifacts use 14, and list continuations in the corpus use at most 6.
// Fences match at any indent, so fences inside list items count.
// Skip fenced code and frontmatter, and ignore fence markers inside frontmatter.
function joinDanglingMarkers(content: string): string {
  const lines = content.split('\n')
  const out: string[] = []
  let inFence = false
  let fenceChar = ''
  let fenceLen = 0
  let inFrontmatter = lines[0] === '---'

  const headingOnly = /^([ \t]{0,3})(#{1,6})[ \t]*$/
  const blockquoteOnly = /^([ \t]{0,3}>)[ \t]*$/
  const orderedListOnly = /^([ \t]{0,3}\d+\.)[ \t]*$/
  const markerThenBoldOnly =
    /^([ \t]{0,3}(?:[*+-]|\d+\.)[ \t]+|[ \t]{0,3}>[ \t]+|[ \t]{0,3}#{1,6}[ \t]+|\|[ \t]*)\*\*[ \t]*$/
  const deepIndented = /^[ \t]{6,}(\S.*)$/
  const veryDeepIndented = /^[ \t]{9,}(\S.*)$/

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (inFrontmatter && i > 0 && (line === '---' || line === '...')) {
      inFrontmatter = false
      out.push(line)
      continue
    }

    if (inFrontmatter) {
      out.push(line)
      continue
    }

    const fenceMatch = line.match(/^[ \t]*(`{3,}|~{3,})/)
    if (fenceMatch) {
      const marker = fenceMatch[1]
      if (!inFence) {
        inFence = true
        fenceChar = marker[0]
        fenceLen = marker.length
      } else if (marker[0] === fenceChar && marker.length >= fenceLen) {
        inFence = false
        fenceChar = ''
        fenceLen = 0
      }
      out.push(line)
      continue
    }

    if (inFence) {
      out.push(line)
      continue
    }

    const selfStrip = line.match(veryDeepIndented)
    if (selfStrip) {
      out.push(selfStrip[1])
      continue
    }

    const next = i + 1 < lines.length ? lines[i + 1] : undefined
    const nextDeep = next !== undefined ? next.match(deepIndented) : null
    if (!nextDeep) {
      out.push(line)
      continue
    }
    const nextContent = nextDeep[1]

    const consumeContinuations = (start: number): { extra: string; nextI: number } => {
      let extra = ''
      let j = start
      while (j + 1 < lines.length) {
        const cont = lines[j + 1].match(deepIndented)
        if (!cont) break
        extra += cont[1]
        j++
      }
      return { extra, nextI: j }
    }

    const heading = line.match(headingOnly)
    if (heading) {
      const { extra, nextI } = consumeContinuations(i + 1)
      out.push(`${heading[1]}${heading[2]} ${nextContent}${extra}`)
      i = nextI
      continue
    }

    const bq = line.match(blockquoteOnly)
    if (bq) {
      const { extra, nextI } = consumeContinuations(i + 1)
      out.push(`${bq[1]} ${nextContent}${extra}`)
      i = nextI
      continue
    }

    const ol = line.match(orderedListOnly)
    if (ol) {
      out.push(`${ol[1]} ${nextContent}`)
      i++
      continue
    }

    const boldOpen = line.match(markerThenBoldOnly)
    if (boldOpen) {
      const { extra, nextI } = consumeContinuations(i + 1)
      out.push(`${boldOpen[1]}**${nextContent}${extra}`)
      i = nextI
      continue
    }

    out.push(line)
  }

  return out.join('\n')
}

// Remove note, warning, tip, and danger tags, which the renderer no longer supports.
// Skip frontmatter, fenced code, multiline raw blocks, and inline code, where tags are literal examples.
function stripLegacyAlertTags(content: string): string {
  const tagPattern = /\{%-?\s*(?:end)?(?:note|warning|tip|danger)\s*-?%\}[ \t]*/g
  const lines = content.split('\n')
  const out: string[] = []
  let inFence = false
  let fenceChar = ''
  let fenceLen = 0
  let inRaw = false
  let inFrontmatter = lines[0] === '---'

  const stripOutsideInlineCode = (line: string): string =>
    line
      .split('`')
      .map((segment, index) => (index % 2 === 0 ? segment.replace(tagPattern, '') : segment))
      .join('`')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (inFrontmatter) {
      if (i > 0 && (line === '---' || line === '...')) inFrontmatter = false
      out.push(line)
      continue
    }

    const fenceMatch = line.match(/^[ \t]*(`{3,}|~{3,})/)
    if (fenceMatch) {
      const marker = fenceMatch[1]
      if (!inFence) {
        inFence = true
        fenceChar = marker[0]
        fenceLen = marker.length
      } else if (marker[0] === fenceChar && marker.length >= fenceLen) {
        inFence = false
        fenceChar = ''
        fenceLen = 0
      }
      out.push(line)
      continue
    }

    if (inFence) {
      out.push(line)
      continue
    }

    if (inRaw) {
      if (/\{%-?\s*endraw\s*-?%\}/.test(line)) inRaw = false
      out.push(line)
      continue
    }
    if (/\{%-?\s*raw\s*-?%\}/.test(line) && !/\{%-?\s*endraw\s*-?%\}/.test(line)) {
      inRaw = true
      out.push(line)
      continue
    }

    const withoutTags = stripOutsideInlineCode(line)
    if (withoutTags === line) {
      out.push(line)
      continue
    }
    const stripped = withoutTags.replace(/[ \t]+$/, '')

    if (stripped === '') {
      const previousIsBlank = out.length === 0 || out[out.length - 1] === ''
      if (previousIsBlank && lines[i + 1] === '') i++
      continue
    }

    out.push(stripped)
  }

  return out.join('\n')
}
