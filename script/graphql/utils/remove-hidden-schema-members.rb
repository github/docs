#!/usr/bin/env ruby

require 'graphql'
require 'json'

if ARGV.empty?
  puts 'Must provide a GraphQL IDL filepath'
  exit 1
end

# borrowed from https://github.com/github/graphql-docs/blob/master/lib/graphql_docs/update_internal_developer/idl.rb
class Printer < GraphQL::Language::DocumentFromSchemaDefinition
  def build_object_type_node(object_type)
    apply_directives_to_node(object_type, super)
  end

  def build_field_node(field)
    apply_directives_to_node(field, super)
  end

  def build_union_type_node(union_type)
    apply_directives_to_node(union_type, super)
  end

  def build_interface_type_node(interface_type)
    apply_directives_to_node(interface_type, super)
  end

  def build_enum_type_node(enum_type)
    apply_directives_to_node(enum_type, super)
  end

  def build_enum_value_node(enum_value)
    apply_directives_to_node(enum_value, super)
  end

  def build_scalar_type_node(scalar_type)
    apply_directives_to_node(scalar_type, super)
  end

  def build_argument_node(argument)
    node = super
    node = apply_directives_to_node(argument, node)
    node = filter_possible_types_directive(argument, node)
    node
  end

  def build_input_object_node(input_object)
    apply_directives_to_node(input_object, super)
  end

  private

  def apply_directives_to_node(defn, node)
    directives = defn.ast_node ? defn.ast_node.directives : []
    if directives.any?
      node = node.merge(directives: directives)
    end
    node
  end

  def filter_possible_types_directive(argument, node)
    possible_types_directive = argument.ast_node.directives.find { |directive| directive.name == "possibleTypes" }
    return node unless possible_types_directive

    concrete_types_argument = possible_types_directive.arguments.find { |argument| argument.name == "concreteTypes" }
    filtered_concrete_types_value = concrete_types_argument.value.select { |type_name| warden.get_type(type_name) != nil }
    filtered_concrete_types_argument = concrete_types_argument.merge(value: filtered_concrete_types_value)

    abstract_type_argument = possible_types_directive.arguments.find { |argument| argument.name == "abstractType" }

    new_possible_type_arguments = if abstract_type_argument.nil? || warden.get_type(abstract_type_argument.value).nil?
      [filtered_concrete_types_argument]
    else
      [filtered_concrete_types_argument, abstract_type_argument]
    end

    new_possible_types_directive = possible_types_directive.merge(
      arguments: new_possible_type_arguments
    )

    new_directives_for_node = node.directives.map do |dir_node|
      if dir_node.name == "possibleTypes"
        new_possible_types_directive
      else
        dir_node
      end
    end
    node.merge(directives: new_directives_for_node)
  end
end

def decode_idl(idl_str)
  # Also remove feature-flagged things
  schema = GraphQL::Schema.from_definition(idl_str.chomp.force_encoding(Encoding::UTF_8))
  # GraphQL-Ruby puts all types in `schema.orphan_types`,
  # but that breaks the `reachable_types` test,
  # so empty out the previous set of orphan types
  schema.send(:own_orphan_types).clear
  Printer.new(schema).document.to_query_string
end

idl = ARGV[0]
idl_content = File.read(idl)

clean_idl = decode_idl(idl_content)

puts clean_idl
