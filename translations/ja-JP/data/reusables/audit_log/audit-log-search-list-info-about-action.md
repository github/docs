The name for each audit log entry is composed of the `action` object or category qualifier, followed by an operation type. For example, the `repo.create` entry refers to the `create` operation on the `repo` category.

各 Audit log エントリには、次のようなイベントに関する適切な情報が表示されます:

- The {% ifversion ghec or ghes or ghae %}enterprise or {% endif %}organization an action was performed in
- The user (actor) who performed the action
- The user affected by the action
- アクションの対象となったリポジトリ
- 実行されたアクション
- アクションが実行された国
- アクションが発生した日時
