Dependency submission APIを使うと、プロジェクトに依存関係をサブミットできます。 これにより、ソフトウェアがコンパイルあるいはビルドされる際に解決されるような依存関係を{% data variables.product.prodname_dotcom %}の依存関係グラフの機能に追加し、プロジェクトのすべての依存関係をさらに完全に描き出せるようになります。

依存関係グラフは、リポジトリ中のマニフェストもしくはロックファイル（たとえばJavaScriptプロジェクトの`package-lock.json`ファイル）から特定された依存関係に加えて、このAPIを使ってえサブミットされた依存関係を表示します。 依存関係グラフの表示に関する詳しい情報については「[リポジトリの依存関係グラフの調査](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)」を参照してください。

サブミットされた依存関係は、既知の脆弱性について{% data variables.product.prodname_dependabot_alerts %}と{% data variables.product.prodname_dependabot_security_updates %}を受け取ります。 依存関係に対する{% data variables.product.prodname_dependabot_alerts %}が得られるのは、{% data variables.product.prodname_advisory_database %}の[サポートされているエコシステム](https://github.com/github/advisory-database#supported-ecosystems)のいずれかからのものである場合だけです。 サブミットされた依存関係は、依存関係レビューやOrganizationの依存関係インサイトには表示されません。
