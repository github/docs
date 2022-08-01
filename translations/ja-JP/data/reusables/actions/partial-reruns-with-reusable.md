パブリックリポジトリの再利用可能なワークフローは、SHA、リリースタグ、ブランチ名を使って参照できます。 詳しい情報については[「再利用可能なワークフローの呼び出し」](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)を参照してください。

再利用可能なワークフローを使い、その参照がSHAではないワークフローを再実行する場合、注意すべき動作が一部あります。

* ワークフロー中のすべてのジョブを再実行すると、再利用可能なワークフローを指定された参照から使います。 ワークフロー中のすべてのジョブの再実行に関する詳しい情報については[「ワークフロー中のすべてのジョブの再実行」](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)を参照してください。
* 失敗したジョブもしくはワークフロー中の特定のジョブを再実行すると、最初の試行と同じコミットSHAからの再利用可能なワークフローを使います。 ワークフロー中の失敗したジョブの再実行に関する詳しい情報については[「ワークフロー中の失敗したジョブの再実行」](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow)を参照してください。 ワークフロー中の特定のジョブの再実行に関する詳しい情報については[「ワークフロー中の特定のジョブの再実行」](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow)を参照してください。
