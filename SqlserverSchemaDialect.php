<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         3.0.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Cake\Database\Schema;

/**
 * Schema management/reflection features for SQLServer.
 *
 * @internal
 */
class SqlserverSchemaDialect extends SchemaDialect
{
    /**
     * @var string
     */
    public const DEFAULT_SCHEMA_NAME = 'dbo';

    /**
     * Generate the SQL to list the tables and views.
     *
     * @param array<string, mixed> $config The connection configuration to use for
     *    getting tables from.
     * @return array An array of (sql, params) to execute.
     */
    public function listTablesSql(array $config): array
    {
        $sql = "SELECT TABLE_NAME
            FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = ?
            AND (TABLE_TYPE = 'BASE TABLE' OR TABLE_TYPE = 'VIEW')
            ORDER BY TABLE_NAME";
        $schema = empty($config['schema']) ? static::DEFAULT_SCHEMA_NAME : $config['schema'];

        return [$sql, [$schema]];
    }

    /**
     * Generate the SQL to list the tables, excluding all views.
     *
     * @param array<string, mixed> $config The connection configuration to use for
     *    getting tables from.
     * @return array<mixed> An array of (sql, params) to execute.
     */
    public function listTablesWithoutViewsSql(array $config): array
    {
        $sql = "SELECT TABLE_NAME
            FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_SCHEMA = ?
            AND (TABLE_TYPE = 'BASE TABLE')
            ORDER BY TABLE_NAME";
        $schema = empty($config['schema']) ? static::DEFAULT_SCHEMA_NAME : $config['schema'];

        return [$sql, [$schema]];
    }

    /**
     * @inheritDoc
     */
    public function describeColumnSql(string $tableName, array $config): array
    {
        $sql = 'SELECT DISTINCT
            AC.column_id AS [column_id],
            AC.name AS [name],
            TY.name AS [type],
            AC.max_length AS [char_length],
            AC.precision AS [precision],
            AC.scale AS [scale],
            AC.is_identity AS [autoincrement],
            AC.is_nullable AS [null],
            OBJECT_DEFINITION(AC.default_object_id) AS [default],
            AC.collation_name AS [collation_name]
            FROM sys.[objects] T
            INNER JOIN sys.[schemas] S ON S.[schema_id] = T.[schema_id]
            INNER JOIN sys.[all_columns] AC ON T.[object_id] = AC.[object_id]
            INNER JOIN sys.[types] TY ON TY.[user_type_id] = AC.[user_type_id]
            WHERE T.[name] = ? AND S.[name] = ?
            ORDER BY column_id';

        $schema = empty($config['schema']) ? static::DEFAULT_SCHEMA_NAME : $config['schema'];

        return [$sql, [$tableName, $schema]];
    }

    /**
     * Convert a column definition to the abstract types.
     *
     * The returned type will be a type that
     * Cake\Database\TypeFactory  can handle.
     *
     * @param string $col The column type
     * @param int|null $length the column length
     * @param int|null $precision The column precision
     * @param int|null $scale The column scale
     * @return array<string, mixed> Array of column information.
     * @link https://technet.microsoft.com/en-us/library/ms187752.aspx
     */
    protected function _convertColumn(
        string $col,
        ?int $length = null,
        ?int $precision = null,
        ?int $scale = null
    ): array {
        $col = strtolower($col);

        $type = $this->_applyTypeSpecificColumnConversion(
            $col,
            compact('length', 'precision', 'scale')
        );
        if ($type !== null) {
            return $type;
        }

        if (in_array($col, ['date', 'time'])) {
            return ['type' => $col, 'length' => null];
        }

        if ($col === 'datetime') {
            // datetime cannot parse more than 3 digits of precision and isn't accurate
            return ['type' => TableSchema::TYPE_DATETIME, 'length' => null];
        }
        if (strpos($col, 'datetime') !== false) {
            $typeName = TableSchema::TYPE_DATETIME;
            if ($scale > 0) {
                $typeName = TableSchema::TYPE_DATETIME_FRACTIONAL;
            }

            return ['type' => $typeName, 'length' => null, 'precision' => $scale];
        }

        if ($col === 'char') {
            return ['type' => TableSchema::TYPE_CHAR, 'length' => $length];
        }

        if ($col === 'tinyint') {
            return ['type' => TableSchema::TYPE_TINYINTEGER, 'length' => $precision ?: 3];
        }
        if ($col === 'smallint') {
            return ['type' => TableSchema::TYPE_SMALLINTEGER, 'length' => $precision ?: 5];
        }
        if ($col === 'int' || $col === 'integer') {
            return ['type' => TableSchema::TYPE_INTEGER, 'length' => $precision ?: 10];
        }
        if ($col === 'bigint') {
            return ['type' => TableSchema::TYPE_BIGINTEGER, 'length' => $precision ?: 20];
        }
        if ($col === 'bit') {
            return ['type' => TableSchema::TYPE_BOOLEAN, 'length' => null];
        }
        if (
            strpos($col, 'numeric') !== false ||
            strpos($col, 'money') !== false ||
            strpos($col, 'decimal') !== false
        ) {
            return ['type' => TableSchema::TYPE_DECIMAL, 'length' => $precision, 'precision' => $scale];
        }

        if ($col === 'real' || $col === 'float') {
            return ['type' => TableSchema::TYPE_FLOAT, 'length' => null];
        }
        // SqlServer schema reflection returns double length for unicode
        // columns because internally it uses UTF16/UCS2
        if ($col === 'nvarchar' || $col === 'nchar' || $col === 'ntext') {
            $length /= 2;
        }
        if (strpos($col, 'varchar') !== false && $length < 0) {
            return ['type' => TableSchema::TYPE_TEXT, 'length' => null];
        }

        if (strpos($col, 'varchar') !== false) {
            return ['type' => TableSchema::TYPE_STRING, 'length' => $length ?: 255];
        }

        if (strpos($col, 'char') !== false) {
            return ['type' => TableSchema::TYPE_CHAR, 'length' => $length];
        }

        if (strpos($col, 'text') !== false) {
            return ['type' => TableSchema::TYPE_TEXT, 'length' => null];
        }

        if ($col === 'image' || strpos($col, 'binary') !== false) {
            // -1 is the value for MAX which we treat as a 'long' binary
            if ($length == -1) {
                $length = TableSchema::LENGTH_LONG;
            }

            return ['type' => TableSchema::TYPE_BINARY, 'length' => $length];
        }

        if ($col === 'uniqueidentifier') {
            return ['type' => TableSchema::TYPE_UUID];
        }

        return ['type' => TableSchema::TYPE_STRING, 'length' => null];
    }

    /**
     * @inheritDoc
     */
    public function convertColumnDescription(TableSchema $schema, array $row): void
    {
        $field = $this->_convertColumn(
            $row['type'],
            $row['char_length'] !== null ? (int)$row['char_length'] : null,
            $row['precision'] !== null ? (int)$row['precision'] : null,
            $row['scale'] !== null ? (int)$row['scale'] : null
        );

        if (!empty($row['autoincrement'])) {
            $field['autoIncrement'] = true;
        }

        $field += [
            'null' => $row['null'] === '1',
            'default' => $this->_defaultValue($field['type'], $row['default']),
            'collate' => $row['collation_name'],
        ];
        $schema->addColumn($row['name'], $field);
    }

    /**
     * Manipulate the default value.
     *
     * Removes () wrapping default values, extracts strings from
     * N'' wrappers and collation text and converts NULL strings.
     *
     * @param string $type The schema type
     * @param string|null $default The default value.
     * @return string|int|null
     */
    protected function _defaultValue($type, $default)
    {
        if ($default === null) {
            return null;
        }

        // remove () surrounding value (NULL) but leave () at the end of functions
        // integers might have two ((0)) wrapping value
        if (preg_match('/^\(+(.*?(\(\))?)\)+$/', $default, $matches)) {
            $default = $matches[1];
        }

        if ($default === 'NULL') {
            return null;
        }

        if ($type === TableSchema::TYPE_BOOLEAN) {
            return (int)$default;
        }

        // Remove quotes
        if (preg_match("/^\(?N?'(.*)'\)?/", $default, $matches)) {
            return str_replace("''", "'", $matches[1]);
        }

        return $default;
    }

    /**
     * @inheritDoc
     */
    public function describeIndexSql(string $tableName, array $config): array
    {
        $sql = "SELECT
                I.[name] AS [index_name],
                IC.[index_column_id] AS [index_order],
                AC.[name] AS [column_name],
                I.[is_unique], I.[is_primary_key],
                I.[is_unique_constraint]
            FROM sys.[tables] AS T
            INNER JOIN sys.[schemas] S ON S.[schema_id] = T.[schema_id]
            INNER JOIN sys.[indexes] I ON T.[object_id] = I.[object_id]
            INNER JOIN sys.[index_columns] IC ON I.[object_id] = IC.[object_id] AND I.[index_id] = IC.[index_id]
            INNER JOIN sys.[all_columns] AC ON T.[object_id] = AC.[object_id] AND IC.[column_id] = AC.[column_id]
            WHERE T.[is_ms_shipped] = 0 AND I.[type_desc] <> 'HEAP' AND T.[name] = ? AND S.[name] = ?
            ORDER BY I.[index_id], IC.[index_column_id]";

        $schema = empty($config['schema']) ? static::DEFAULT_SCHEMA_NAME : $config['schema'];

        return [$sql, [$tableName, $schema]];
    }

    /**
     * @inheritDoc
     */
    public function convertIndexDescription(TableSchema $schema, array $row): void
    {
        $type = TableSchema::INDEX_INDEX;
        $name = $row['index_name'];
        if ($row['is_primary_key']) {
            $name = $type = TableSchema::CONSTRAINT_PRIMARY;
        }
        if ($row['is_unique_constraint'] && $type === TableSchema::INDEX_INDEX) {
            $type = TableSchema::CONSTRAINT_UNIQUE;
        }

        if ($type === TableSchema::INDEX_INDEX) {
            $existing = $schema->getIndex($name);
        } else {
            $existing = $schema->getConstraint($name);
        }

        $columns = [$row['column_name']];
        if (!empty($existing)) {
            $columns = array_merge($existing['columns'], $columns);
        }

        if ($type === TableSchema::CONSTRAINT_PRIMARY || $type === TableSchema::CONSTRAINT_UNIQUE) {
            $schema->addConstraint($name, [
                'type' => $type,
                'columns' => $columns,
            ]);

            return;
        }
        $schema->addIndex($name, [
            'type' => $type,
            'columns' => $columns,
        ]);
    }

    /**
     * @inheritDoc
     */
    public function describeForeignKeySql(string $tableName, array $config): array
    {
        // phpcs:disable Generic.Files.LineLength
        $sql = 'SELECT FK.[name] AS [foreign_key_name], FK.[delete_referential_action_desc] AS [delete_type],
                FK.[update_referential_action_desc] AS [update_type], C.name AS [column], RT.name AS [reference_table],
                RC.name AS [reference_column]
            FROM sys.foreign_keys FK
            INNER JOIN sys.foreign_key_columns FKC ON FKC.constraint_object_id = FK.object_id
            INNER JOIN sys.tables T ON T.object_id = FKC.parent_object_id
            INNER JOIN sys.tables RT ON RT.object_id = FKC.referenced_object_id
            INNER JOIN sys.schemas S ON S.schema_id = T.schema_id AND S.schema_id = RT.schema_id
            INNER JOIN sys.columns C ON C.column_id = FKC.parent_column_id AND C.object_id = FKC.parent_object_id
            INNER JOIN sys.columns RC ON RC.column_id = FKC.referenced_column_id AND RC.object_id = FKC.referenced_object_id
            WHERE FK.is_ms_shipped = 0 AND T.name = ? AND S.name = ?
            ORDER BY FKC.constraint_column_id';
        // phpcs:enable Generic.Files.LineLength

        $schema = empty($config['schema']) ? static::DEFAULT_SCHEMA_NAME : $config['schema'];

        return [$sql, [$tableName, $schema]];
    }

    /**
     * @inheritDoc
     */
    public function convertForeignKeyDescription(TableSchema $schema, array $row): void
    {
        $data = [
            'type' => TableSchema::CONSTRAINT_FOREIGN,
            'columns' => [$row['column']],
            'references' => [$row['reference_table'], $row['reference_column']],
            'update' => $this->_convertOnClause($row['update_type']),
            'delete' => $this->_convertOnClause($row['delete_type']),
        ];
        $name = $row['foreign_key_name'];
        $schema->addConstraint($name, $data);
    }

    /**
     * @inheritDoc
     */
    protected function _foreignOnClause(string $on): string
    {
        $parent = parent::_foreignOnClause($on);

        return $parent === 'RESTRICT' ? parent::_foreignOnClause(TableSchema::ACTION_NO_ACTION) : $parent;
    }

    /**
     * @inheritDoc
     */
    protected function _convertOnClause(string $clause): string
    {
        switch ($clause) {
            case 'NO_ACTION':
                return TableSchema::ACTION_NO_ACTION;
            case 'CASCADE':
                return TableSchema::ACTION_CASCADE;
            case 'SET_NULL':
                return TableSchema::ACTION_SET_NULL;
            case 'SET_DEFAULT':
                return TableSchema::ACTION_SET_DEFAULT;
        }

        return TableSchema::ACTION_SET_NULL;
    }

    /**
     * @inheritDoc
     */
    public function columnSql(TableSchema $schema, string $name): string
    {
        /** @var array $data */
        $data = $schema->getColumn($name);

        $sql = $this->_getTypeSpecificColumnSql($data['type'], $schema, $name);
        if ($sql !== null) {
            return $sql;
        }

        $out = $this->_driver->quoteIdentifier($name);
        $typeMap = [
            TableSchema::TYPE_TINYINTEGER => ' TINYINT',
            TableSchema::TYPE_SMALLINTEGER => ' SMALLINT',
            TableSchema::TYPE_INTEGER => ' INTEGER',
            TableSchema::TYPE_BIGINTEGER => ' BIGINT',
            TableSchema::TYPE_BINARY_UUID => ' UNIQUEIDENTIFIER',
            TableSchema::TYPE_BOOLEAN => ' BIT',
            TableSchema::TYPE_CHAR => ' NCHAR',
            TableSchema::TYPE_FLOAT => ' FLOAT',
            TableSchema::TYPE_DECIMAL => ' DECIMAL',
            TableSchema::TYPE_DATE => ' DATE',
            TableSchema::TYPE_TIME => ' TIME',
            TableSchema::TYPE_DATETIME => ' DATETIME2',
            TableSchema::TYPE_DATETIME_FRACTIONAL => ' DATETIME2',
            TableSchema::TYPE_TIMESTAMP => ' DATETIME2',
            TableSchema::TYPE_TIMESTAMP_FRACTIONAL => ' DATETIME2',
            TableSchema::TYPE_TIMESTAMP_TIMEZONE => ' DATETIME2',
            TableSchema::TYPE_UUID => ' UNIQUEIDENTIFIER',
            TableSchema::TYPE_JSON => ' NVARCHAR(MAX)',
        ];

        if (isset($typeMap[$data['type']])) {
            $out .= $typeMap[$data['type']];
        }

        if ($data['type'] === TableSchema::TYPE_INTEGER || $data['type'] === TableSchema::TYPE_BIGINTEGER) {
            if ($schema->getPrimaryKey() === [$name] || $data['autoIncrement'] === true) {
                unset($data['null'], $data['default']);
                $out .= ' IDENTITY(1, 1)';
            }
        }

        if ($data['type'] === TableSchema::TYPE_TEXT && $data['length'] !== TableSchema::LENGTH_TINY) {
            $out .= ' NVARCHAR(MAX)';
        }

        if ($data['type'] === TableSchema::TYPE_CHAR) {
            $out .= '(' . $data['length'] . ')';
        }

        if ($data['type'] === TableSchema::TYPE_BINARY) {
            if (
                !isset($data['length'])
                || in_array($data['length'], [TableSchema::LENGTH_MEDIUM, TableSchema::LENGTH_LONG], true)
            ) {
                $data['length'] = 'MAX';
            }

            if ($data['length'] === 1) {
                $out .= ' BINARY(1)';
            } else {
                $out .= ' VARBINARY';

                $out .= sprintf('(%s)', $data['length']);
            }
        }

        if (
            $data['type'] === TableSchema::TYPE_STRING ||
            (
                $data['type'] === TableSchema::TYPE_TEXT &&
                $data['length'] === TableSchema::LENGTH_TINY
            )
        ) {
            $type = ' NVARCHAR';
            $length = $data['length'] ?? TableSchema::LENGTH_TINY;
            $out .= sprintf('%s(%d)', $type, $length);
        }

        $hasCollate = [TableSchema::TYPE_TEXT, TableSchema::TYPE_STRING, TableSchema::TYPE_CHAR];
        if (in_array($data['type'], $hasCollate, true) && isset($data['collate']) && $data['collate'] !== '') {
            $out .= ' COLLATE ' . $data['collate'];
        }

        $precisionTypes = [
            TableSchema::TYPE_FLOAT,
            TableSchema::TYPE_DATETIME,
            TableSchema::TYPE_DATETIME_FRACTIONAL,
            TableSchema::TYPE_TIMESTAMP,
            TableSchema::TYPE_TIMESTAMP_FRACTIONAL,
        ];
        if (in_array($data['type'], $precisionTypes, true) && isset($data['precision'])) {
            $out .= '(' . (int)$data['precision'] . ')';
        }

        if (
            $data['type'] === TableSchema::TYPE_DECIMAL &&
            (
                isset($data['length']) ||
                isset($data['precision'])
            )
        ) {
            $out .= '(' . (int)$data['length'] . ',' . (int)$data['precision'] . ')';
        }

        if (isset($data['null']) && $data['null'] === false) {
            $out .= ' NOT NULL';
        }

        $dateTimeTypes = [
            TableSchema::TYPE_DATETIME,
            TableSchema::TYPE_DATETIME_FRACTIONAL,
            TableSchema::TYPE_TIMESTAMP,
            TableSchema::TYPE_TIMESTAMP_FRACTIONAL,
        ];
        $dateTimeDefaults = [
            'current_timestamp',
            'getdate()',
            'getutcdate()',
            'sysdatetime()',
            'sysutcdatetime()',
            'sysdatetimeoffset()',
        ];
        if (
            isset($data['default']) &&
            in_array($data['type'], $dateTimeTypes, true) &&
            in_array(strtolower($data['default']), $dateTimeDefaults, true)
        ) {
            $out .= ' DEFAULT ' . strtoupper($data['default']);
        } elseif (isset($data['default'])) {
            $default = is_bool($data['default'])
                ? (int)$data['default']
                : $this->_driver->schemaValue($data['default']);
            $out .= ' DEFAULT ' . $default;
        } elseif (isset($data['null']) && $data['null'] !== false) {
            $out .= ' DEFAULT NULL';
        }

        return $out;
    }

    /**
     * @inheritDoc
     */
    public function addConstraintSql(TableSchema $schema): array
    {
        $sqlPattern = 'ALTER TABLE %s ADD %s;';
        $sql = [];

        foreach ($schema->constraints() as $name) {
            /** @var array $constraint */
            $constraint = $schema->getConstraint($name);
            if ($constraint['type'] === TableSchema::CONSTRAINT_FOREIGN) {
                $tableName = $this->_driver->quoteIdentifier($schema->name());
                $sql[] = sprintf($sqlPattern, $tableName, $this->constraintSql($schema, $name));
            }
        }

        return $sql;
    }

    /**
     * @inheritDoc
     */
    public function dropConstraintSql(TableSchema $schema): array
    {
        $sqlPattern = 'ALTER TABLE %s DROP CONSTRAINT %s;';
        $sql = [];

        foreach ($schema->constraints() as $name) {
            /** @var array $constraint */
            $constraint = $schema->getConstraint($name);
            if ($constraint['type'] === TableSchema::CONSTRAINT_FOREIGN) {
                $tableName = $this->_driver->quoteIdentifier($schema->name());
                $constraintName = $this->_driver->quoteIdentifier($name);
                $sql[] = sprintf($sqlPattern, $tableName, $constraintName);
            }
        }

        return $sql;
    }

    /**
     * @inheritDoc
     */
    public function indexSql(TableSchema $schema, string $name): string
    {
        /** @var array $data */
        $data = $schema->getIndex($name);
        $columns = array_map(
            [$this->_driver, 'quoteIdentifier'],
            $data['columns']
        );

        return sprintf(
            'CREATE INDEX %s ON %s (%s)',
            $this->_driver->quoteIdentifier($name),
            $this->_driver->quoteIdentifier($schema->name()),
            implode(', ', $columns)
        );
    }

    /**
     * @inheritDoc
     */
    public function constraintSql(TableSchema $schema, string $name): string
    {
        /** @var array $data */
        $data = $schema->getConstraint($name);
        $out = 'CONSTRAINT ' . $this->_driver->quoteIdentifier($name);
        if ($data['type'] === TableSchema::CONSTRAINT_PRIMARY) {
            $out = 'PRIMARY KEY';
        }
        if ($data['type'] === TableSchema::CONSTRAINT_UNIQUE) {
            $out .= ' UNIQUE';
        }

        return $this->_keySql($out, $data);
    }

    /**
     * Helper method for generating key SQL snippets.
     *
     * @param string $prefix The key prefix
     * @param array $data Key data.
     * @return string
     */
    protected function _keySql(string $prefix, array $data): string
    {
        $columns = array_map(
            [$this->_driver, 'quoteIdentifier'],
            $data['columns']
        );
        if ($data['type'] === TableSchema::CONSTRAINT_FOREIGN) {
            return $prefix . sprintf(
                ' FOREIGN KEY (%s) REFERENCES %s (%s) ON UPDATE %s ON DELETE %s',
                implode(', ', $columns),
                $this->_driver->quoteIdentifier($data['references'][0]),
                $this->_convertConstraintColumns($data['references'][1]),
                $this->_foreignOnClause($data['update']),
                $this->_foreignOnClause($data['delete'])
            );
        }

        return $prefix . ' (' . implode(', ', $columns) . ')';
    }

    /**
     * @inheritDoc
     */
    public function createTableSql(TableSchema $schema, array $columns, array $constraints, array $indexes): array
    {
        $content = array_merge($columns, $constraints);
        $content = implode(",\n", array_filter($content));
        $tableName = $this->_driver->quoteIdentifier($schema->name());
        $out = [];
        $out[] = sprintf("CREATE TABLE %s (\n%s\n)", $tableName, $content);
        foreach ($indexes as $index) {
            $out[] = $index;
        }

        return $out;
    }

    /**
     * @inheritDoc
     */
    public function truncateTableSql(TableSchema $schema): array
    {
        $name = $this->_driver->quoteIdentifier($schema->name());
        $queries = [
            sprintf('DELETE FROM %s', $name),
        ];

        // Restart identity sequences
        $pk = $schema->getPrimaryKey();
        if (count($pk) === 1) {
            /** @var array $column */
            $column = $schema->getColumn($pk[0]);
            if (in_array($column['type'], ['integer', 'biginteger'])) {
                $queries[] = sprintf(
                    "IF EXISTS (SELECT * FROM sys.identity_columns WHERE OBJECT_NAME(OBJECT_ID) = '%s' AND " .
                    "last_value IS NOT NULL) DBCC CHECKIDENT('%s', RESEED, 0)",
                    $schema->name(),
                    $schema->name()
                );
            }
        }

        return $queries;
    }
}

// phpcs:disable
// Add backwards compatible alias.
class_alias('Cake\Database\Schema\SqlserverSchemaDialect', 'Cake\Database\Schema\SqlserverSchema');
// phpcs:enable
