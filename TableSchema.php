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

use Cake\Database\Connection;
use Cake\Database\Exception\DatabaseException;
use Cake\Database\TypeFactory;

/**
 * Represents a single table in a database schema.
 *
 * Can either be populated using the reflection API's
 * or by incrementally building an instance using
 * methods.
 *
 * Once created TableSchema instances can be added to
 * Schema\Collection objects. They can also be converted into SQL using the
 * createSql(), dropSql() and truncateSql() methods.
 */
class TableSchema implements TableSchemaInterface, SqlGeneratorInterface
{
    /**
     * The name of the table
     *
     * @var string
     */
    protected $_table;

    /**
     * Columns in the table.
     *
     * @var array<string, array>
     */
    protected $_columns = [];

    /**
     * A map with columns to types
     *
     * @var array<string, string>
     */
    protected $_typeMap = [];

    /**
     * Indexes in the table.
     *
     * @var array<string, array>
     */
    protected $_indexes = [];

    /**
     * Constraints in the table.
     *
     * @var array<string, array<string, mixed>>
     */
    protected $_constraints = [];

    /**
     * Options for the table.
     *
     * @var array
     */
    protected $_options = [];

    /**
     * Whether the table is temporary
     *
     * @var bool
     */
    protected $_temporary = false;

    /**
     * Column length when using a `tiny` column type
     *
     * @var int
     */
    public const LENGTH_TINY = 255;

    /**
     * Column length when using a `medium` column type
     *
     * @var int
     */
    public const LENGTH_MEDIUM = 16777215;

    /**
     * Column length when using a `long` column type
     *
     * @var int
     */
    public const LENGTH_LONG = 4294967295;

    /**
     * Valid column length that can be used with text type columns
     *
     * @var array<string, int>
     */
    public static $columnLengths = [
        'tiny' => self::LENGTH_TINY,
        'medium' => self::LENGTH_MEDIUM,
        'long' => self::LENGTH_LONG,
    ];

    /**
     * The valid keys that can be used in a column
     * definition.
     *
     * @var array<string, mixed>
     */
    protected static $_columnKeys = [
        'type' => null,
        'baseType' => null,
        'length' => null,
        'precision' => null,
        'null' => null,
        'default' => null,
        'comment' => null,
    ];

    /**
     * Additional type specific properties.
     *
     * @var array<string, array<string, mixed>>
     */
    protected static $_columnExtras = [
        'string' => [
            'collate' => null,
        ],
        'char' => [
            'collate' => null,
        ],
        'text' => [
            'collate' => null,
        ],
        'tinyinteger' => [
            'unsigned' => null,
        ],
        'smallinteger' => [
            'unsigned' => null,
        ],
        'integer' => [
            'unsigned' => null,
            'autoIncrement' => null,
        ],
        'biginteger' => [
            'unsigned' => null,
            'autoIncrement' => null,
        ],
        'decimal' => [
            'unsigned' => null,
        ],
        'float' => [
            'unsigned' => null,
        ],
    ];

    /**
     * The valid keys that can be used in an index
     * definition.
     *
     * @var array<string, mixed>
     */
    protected static $_indexKeys = [
        'type' => null,
        'columns' => [],
        'length' => [],
        'references' => [],
        'update' => 'restrict',
        'delete' => 'restrict',
    ];

    /**
     * Names of the valid index types.
     *
     * @var array<string>
     */
    protected static $_validIndexTypes = [
        self::INDEX_INDEX,
        self::INDEX_FULLTEXT,
    ];

    /**
     * Names of the valid constraint types.
     *
     * @var array<string>
     */
    protected static $_validConstraintTypes = [
        self::CONSTRAINT_PRIMARY,
        self::CONSTRAINT_UNIQUE,
        self::CONSTRAINT_FOREIGN,
    ];

    /**
     * Names of the valid foreign key actions.
     *
     * @var array<string>
     */
    protected static $_validForeignKeyActions = [
        self::ACTION_CASCADE,
        self::ACTION_SET_NULL,
        self::ACTION_SET_DEFAULT,
        self::ACTION_NO_ACTION,
        self::ACTION_RESTRICT,
    ];

    /**
     * Primary constraint type
     *
     * @var string
     */
    public const CONSTRAINT_PRIMARY = 'primary';

    /**
     * Unique constraint type
     *
     * @var string
     */
    public const CONSTRAINT_UNIQUE = 'unique';

    /**
     * Foreign constraint type
     *
     * @var string
     */
    public const CONSTRAINT_FOREIGN = 'foreign';

    /**
     * Index - index type
     *
     * @var string
     */
    public const INDEX_INDEX = 'index';

    /**
     * Fulltext index type
     *
     * @var string
     */
    public const INDEX_FULLTEXT = 'fulltext';

    /**
     * Foreign key cascade action
     *
     * @var string
     */
    public const ACTION_CASCADE = 'cascade';

    /**
     * Foreign key set null action
     *
     * @var string
     */
    public const ACTION_SET_NULL = 'setNull';

    /**
     * Foreign key no action
     *
     * @var string
     */
    public const ACTION_NO_ACTION = 'noAction';

    /**
     * Foreign key restrict action
     *
     * @var string
     */
    public const ACTION_RESTRICT = 'restrict';

    /**
     * Foreign key restrict default
     *
     * @var string
     */
    public const ACTION_SET_DEFAULT = 'setDefault';

    /**
     * Constructor.
     *
     * @param string $table The table name.
     * @param array<string, array|string> $columns The list of columns for the schema.
     */
    public function __construct(string $table, array $columns = [])
    {
        $this->_table = $table;
        foreach ($columns as $field => $definition) {
            $this->addColumn($field, $definition);
        }
    }

    /**
     * @inheritDoc
     */
    public function name(): string
    {
        return $this->_table;
    }

    /**
     * @inheritDoc
     */
    public function addColumn(string $name, $attrs)
    {
        if (is_string($attrs)) {
            $attrs = ['type' => $attrs];
        }
        $valid = static::$_columnKeys;
        if (isset(static::$_columnExtras[$attrs['type']])) {
            $valid += static::$_columnExtras[$attrs['type']];
        }
        $attrs = array_intersect_key($attrs, $valid);
        $this->_columns[$name] = $attrs + $valid;
        $this->_typeMap[$name] = $this->_columns[$name]['type'];

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function removeColumn(string $name)
    {
        unset($this->_columns[$name], $this->_typeMap[$name]);

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function columns(): array
    {
        return array_keys($this->_columns);
    }

    /**
     * @inheritDoc
     */
    public function getColumn(string $name): ?array
    {
        if (!isset($this->_columns[$name])) {
            return null;
        }
        $column = $this->_columns[$name];
        unset($column['baseType']);

        return $column;
    }

    /**
     * @inheritDoc
     */
    public function getColumnType(string $name): ?string
    {
        if (!isset($this->_columns[$name])) {
            return null;
        }

        return $this->_columns[$name]['type'];
    }

    /**
     * @inheritDoc
     */
    public function setColumnType(string $name, string $type)
    {
        if (!isset($this->_columns[$name])) {
            return $this;
        }

        $this->_columns[$name]['type'] = $type;
        $this->_typeMap[$name] = $type;

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function hasColumn(string $name): bool
    {
        return isset($this->_columns[$name]);
    }

    /**
     * @inheritDoc
     */
    public function baseColumnType(string $column): ?string
    {
        if (isset($this->_columns[$column]['baseType'])) {
            return $this->_columns[$column]['baseType'];
        }

        $type = $this->getColumnType($column);

        if ($type === null) {
            return null;
        }

        if (TypeFactory::getMap($type)) {
            $type = TypeFactory::build($type)->getBaseType();
        }

        return $this->_columns[$column]['baseType'] = $type;
    }

    /**
     * @inheritDoc
     */
    public function typeMap(): array
    {
        return $this->_typeMap;
    }

    /**
     * @inheritDoc
     */
    public function isNullable(string $name): bool
    {
        if (!isset($this->_columns[$name])) {
            return true;
        }

        return $this->_columns[$name]['null'] === true;
    }

    /**
     * @inheritDoc
     */
    public function defaultValues(): array
    {
        $defaults = [];
        foreach ($this->_columns as $name => $data) {
            if (!array_key_exists('default', $data)) {
                continue;
            }
            if ($data['default'] === null && $data['null'] !== true) {
                continue;
            }
            $defaults[$name] = $data['default'];
        }

        return $defaults;
    }

    /**
     * @inheritDoc
     */
    public function addIndex(string $name, $attrs)
    {
        if (is_string($attrs)) {
            $attrs = ['type' => $attrs];
        }
        $attrs = array_intersect_key($attrs, static::$_indexKeys);
        $attrs += static::$_indexKeys;
        unset($attrs['references'], $attrs['update'], $attrs['delete']);

        if (!in_array($attrs['type'], static::$_validIndexTypes, true)) {
            throw new DatabaseException(sprintf(
                'Invalid index type "%s" in index "%s" in table "%s".',
                $attrs['type'],
                $name,
                $this->_table
            ));
        }
        if (empty($attrs['columns'])) {
            throw new DatabaseException(sprintf(
                'Index "%s" in table "%s" must have at least one column.',
                $name,
                $this->_table
            ));
        }
        $attrs['columns'] = (array)$attrs['columns'];
        foreach ($attrs['columns'] as $field) {
            if (empty($this->_columns[$field])) {
                $msg = sprintf(
                    'Columns used in index "%s" in table "%s" must be added to the Table schema first. ' .
                    'The column "%s" was not found.',
                    $name,
                    $this->_table,
                    $field
                );
                throw new DatabaseException($msg);
            }
        }
        $this->_indexes[$name] = $attrs;

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function indexes(): array
    {
        return array_keys($this->_indexes);
    }

    /**
     * @inheritDoc
     */
    public function getIndex(string $name): ?array
    {
        if (!isset($this->_indexes[$name])) {
            return null;
        }

        return $this->_indexes[$name];
    }

    /**
     * Get the column(s) used for the primary key.
     *
     * @return array Column name(s) for the primary key. An
     *   empty list will be returned when the table has no primary key.
     * @deprecated 4.0.0 Renamed to {@link getPrimaryKey()}.
     */
    public function primaryKey(): array
    {
        deprecationWarning('`TableSchema::primaryKey()` is deprecated. Use `TableSchema::getPrimaryKey()`.');

        return $this->getPrimarykey();
    }

    /**
     * @inheritDoc
     */
    public function getPrimaryKey(): array
    {
        foreach ($this->_constraints as $data) {
            if ($data['type'] === static::CONSTRAINT_PRIMARY) {
                return $data['columns'];
            }
        }

        return [];
    }

    /**
     * @inheritDoc
     */
    public function addConstraint(string $name, $attrs)
    {
        if (is_string($attrs)) {
            $attrs = ['type' => $attrs];
        }
        $attrs = array_intersect_key($attrs, static::$_indexKeys);
        $attrs += static::$_indexKeys;
        if (!in_array($attrs['type'], static::$_validConstraintTypes, true)) {
            throw new DatabaseException(sprintf(
                'Invalid constraint type "%s" in table "%s".',
                $attrs['type'],
                $this->_table
            ));
        }
        if (empty($attrs['columns'])) {
            throw new DatabaseException(sprintf(
                'Constraints in table "%s" must have at least one column.',
                $this->_table
            ));
        }
        $attrs['columns'] = (array)$attrs['columns'];
        foreach ($attrs['columns'] as $field) {
            if (empty($this->_columns[$field])) {
                $msg = sprintf(
                    'Columns used in constraints must be added to the Table schema first. ' .
                    'The column "%s" was not found in table "%s".',
                    $field,
                    $this->_table
                );
                throw new DatabaseException($msg);
            }
        }

        if ($attrs['type'] === static::CONSTRAINT_FOREIGN) {
            $attrs = $this->_checkForeignKey($attrs);

            if (isset($this->_constraints[$name])) {
                $this->_constraints[$name]['columns'] = array_unique(array_merge(
                    $this->_constraints[$name]['columns'],
                    $attrs['columns']
                ));

                if (isset($this->_constraints[$name]['references'])) {
                    $this->_constraints[$name]['references'][1] = array_unique(array_merge(
                        (array)$this->_constraints[$name]['references'][1],
                        [$attrs['references'][1]]
                    ));
                }

                return $this;
            }
        } else {
            unset($attrs['references'], $attrs['update'], $attrs['delete']);
        }

        $this->_constraints[$name] = $attrs;

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function dropConstraint(string $name)
    {
        if (isset($this->_constraints[$name])) {
            unset($this->_constraints[$name]);
        }

        return $this;
    }

    /**
     * Check whether a table has an autoIncrement column defined.
     *
     * @return bool
     */
    public function hasAutoincrement(): bool
    {
        foreach ($this->_columns as $column) {
            if (isset($column['autoIncrement']) && $column['autoIncrement']) {
                return true;
            }
        }

        return false;
    }

    /**
     * Helper method to check/validate foreign keys.
     *
     * @param array<string, mixed> $attrs Attributes to set.
     * @return array<string, mixed>
     * @throws \Cake\Database\Exception\DatabaseException When foreign key definition is not valid.
     */
    protected function _checkForeignKey(array $attrs): array
    {
        if (count($attrs['references']) < 2) {
            throw new DatabaseException('References must contain a table and column.');
        }
        if (!in_array($attrs['update'], static::$_validForeignKeyActions)) {
            throw new DatabaseException(sprintf(
                'Update action is invalid. Must be one of %s',
                implode(',', static::$_validForeignKeyActions)
            ));
        }
        if (!in_array($attrs['delete'], static::$_validForeignKeyActions)) {
            throw new DatabaseException(sprintf(
                'Delete action is invalid. Must be one of %s',
                implode(',', static::$_validForeignKeyActions)
            ));
        }

        return $attrs;
    }

    /**
     * @inheritDoc
     */
    public function constraints(): array
    {
        return array_keys($this->_constraints);
    }

    /**
     * @inheritDoc
     */
    public function getConstraint(string $name): ?array
    {
        return $this->_constraints[$name] ?? null;
    }

    /**
     * @inheritDoc
     */
    public function setOptions(array $options)
    {
        $this->_options = $options + $this->_options;

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function getOptions(): array
    {
        return $this->_options;
    }

    /**
     * @inheritDoc
     */
    public function setTemporary(bool $temporary)
    {
        $this->_temporary = $temporary;

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function isTemporary(): bool
    {
        return $this->_temporary;
    }

    /**
     * @inheritDoc
     */
    public function createSql(Connection $connection): array
    {
        $dialect = $connection->getDriver()->schemaDialect();
        $columns = $constraints = $indexes = [];
        foreach (array_keys($this->_columns) as $name) {
            $columns[] = $dialect->columnSql($this, $name);
        }
        foreach (array_keys($this->_constraints) as $name) {
            $constraints[] = $dialect->constraintSql($this, $name);
        }
        foreach (array_keys($this->_indexes) as $name) {
            $indexes[] = $dialect->indexSql($this, $name);
        }

        return $dialect->createTableSql($this, $columns, $constraints, $indexes);
    }

    /**
     * @inheritDoc
     */
    public function dropSql(Connection $connection): array
    {
        $dialect = $connection->getDriver()->schemaDialect();

        return $dialect->dropTableSql($this);
    }

    /**
     * @inheritDoc
     */
    public function truncateSql(Connection $connection): array
    {
        $dialect = $connection->getDriver()->schemaDialect();

        return $dialect->truncateTableSql($this);
    }

    /**
     * @inheritDoc
     */
    public function addConstraintSql(Connection $connection): array
    {
        $dialect = $connection->getDriver()->schemaDialect();

        return $dialect->addConstraintSql($this);
    }

    /**
     * @inheritDoc
     */
    public function dropConstraintSql(Connection $connection): array
    {
        $dialect = $connection->getDriver()->schemaDialect();

        return $dialect->dropConstraintSql($this);
    }

    /**
     * Returns an array of the table schema.
     *
     * @return array<string, mixed>
     */
    public function __debugInfo(): array
    {
        return [
            'table' => $this->_table,
            'columns' => $this->_columns,
            'indexes' => $this->_indexes,
            'constraints' => $this->_constraints,
            'options' => $this->_options,
            'typeMap' => $this->_typeMap,
            'temporary' => $this->_temporary,
        ];
    }
}
