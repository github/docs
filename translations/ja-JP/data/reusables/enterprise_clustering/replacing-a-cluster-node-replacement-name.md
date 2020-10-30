1. MySQLのマスターノードもしくはRedisのマスターノードを入れ替えているなら、`cluster.conf`で`mysql-master`もしくは`redis-master`の値を入れ替えるノード名に修正してください。

  たとえば以下の修正された`cluster.conf`ファイルでは、新しくプロビジョニングされたクラスタノードの`ghe-replacement-data-node-1`をMySQL及びRedisのマスターノードとして指定しています。 <pre>
  mysql-master = <em>ghe-replacement-data-node-1</em>
  redis-master = <em>ghe-replacement-data-node-1</em>
  </pre>
