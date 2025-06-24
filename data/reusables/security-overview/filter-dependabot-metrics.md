
| Qualifier | Description |
| -------- | -------- |
|`repo`|Display {% data variables.product.prodname_dependabot_alerts %} detected in a specified repository, for example: `repo:octo-repository`.|
|`topic`|Display {% data variables.product.prodname_dependabot_alerts %} with the matching topic, for example: `topic:asdf`.|
|`team`|Display {% data variables.product.prodname_dependabot_alerts %} owned by members of the specified team, for example: `team:octocat-dependabot-team`.|
|`visibility`|Display {% data variables.product.prodname_dependabot_alerts %} detected in repositories of the specified visibility, for example: `visibility:private`.|
|`archived`|Display {% data variables.product.prodname_dependabot_alerts %} detected in respositories that are either archived, or not, for example: `archived:true`.|
|`state`|Display {% data variables.product.prodname_dependabot_alerts %} of the specified state, for example: `state:unresolved`.|
|`severity`|Display {% data variables.product.prodname_dependabot_alerts %} of the specified severity, for example: `severity:critical`.|
|`scope`|Display {% data variables.product.prodname_dependabot_alerts %} from the development dependency (`development`) or from the runtime dependency (`runtime`).|
|`package`|Display {% data variables.product.prodname_dependabot_alerts %} detected in the specified package, for example: `package:lodash`.|
|`ecosystem`|Display {% data variables.product.prodname_dependabot_alerts %} detected in a specified ecosystem, for example: `ecosystem:Maven`.|
|`relationship`|Display {% data variables.product.prodname_dependabot_alerts %} of the specified relationship, for example: `relationship:indirect`.|
|`epss_percentage`|Display {% data variables.product.prodname_dependabot_alerts %} whose EPSS score meets the defined criteria, for example: `epss_percentage:>=0.01`|
|`exclude <QUALIFIER>`|Applies to all the available qualifiers.</br>Display alerts that do not match the selected qualifier from the list of {% data variables.product.prodname_dependabot_alerts %}|
