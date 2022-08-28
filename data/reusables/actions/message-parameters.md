| Parameter | Value |
| :- | :- |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 %}
| `title` | Custom title |{% endif %}
| `file` | Filename |
| `col` | Column number, starting at 1 |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 %}
| `endColumn` | End column number |{% endif %}
| `line` | Line number, starting at 1 |{% ifversion fpt or ghes > 3.2 or ghae-issue-4929 %}
| `endLine` | End line number |{% endif %}
