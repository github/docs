1. プライマリのMySQLもしくはRedisノードを置き換えようとしているなら、`cluster.conf`で`mysql-master`もしくは`redis-master`の値を置き換えるノード名に変更してください。

  たとえば、以下の変更された`cluster.conf`ファイルは新しくプロビジョニングされたノードの`ghe-replacement-data-node-1`をプライマリのMySQL及びRedisノードとして指定しています。 <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
