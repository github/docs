設定スクリプトを使って、自動的に新しいランナーをグループに追加できます。 たとえば、このコマンドは新しいランナーを登録し、 `--runnergroup`パラメータを使ってそのランナーを`rg-runnergroup`という名前のグループに追加します。

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

このコマンドは、ランナーグループが存在しなければ失敗します。

```
Could not find any self-hosted runner group named "rg-runnergroup".
```