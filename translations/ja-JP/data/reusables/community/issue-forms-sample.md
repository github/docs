```YAML{:copy}
name: Bug Report
description: File a bug report
title: "[Bug]: "
labels: ["bug", "triage"]
assignees:
  - octocat
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: さらに情報が必要な場合、どのように連絡すればよいでしょうか？
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: また、生じると期待されていたことは何でしょうか？
      placeholder: Tell us what you see!
      value: "バグが生じました!"
    validations:
      required: true
  - type: dropdown
    id: version
    attributes:
      label: Version
      description: 実行していたソフトウェアのバージョンは?
      options:
        - 1.0.2 (Default)
        - 1.0.3 (Edge)
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: 関連するログの出力をコピーしてペーストしてください。 これは自動的にコードにフォーマットされるので、バックティックは不要です。
      render: shell
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: このIssueをサブミットすることで、あなたは私たちの [行動規範](https://example.com)に同意したことになります。
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
```
