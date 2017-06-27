@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives
@builtin "string.ne"


model            -> rules                       {% fst %}
rules            -> rule                        {% fst %}
                  | rules nl rule               {% handleRules %}
rule             -> null
                  | field                       {% fst %}
                  | comment                     {% returnNull %}
                  | command                     {% handleCommand %}
field            -> _ fieldName fieldMetas:* {% handleField %}
fieldMetas       -> _ fieldMeta     {% snd %}
fieldMeta        -> ":" fieldType   {% snd %}
                  | isInternal      {% fst %}
                  | fieldQuantifier {% fst %}
fieldType        -> (integer
                  | float
                  | string
                  | boolean
                  | date
                  | url
                  | range
                  | enum
                  | object) {% ft => ft[0][0] %}
isInternal       -> "^" {% _ => { return {"#isInternal": true}; } %}
fieldQuantifier  -> "?" {% _ => { return {"#isRequired": false                  }; } %}
                  | "!" {% _ => { return {"#isForbidden": true                  }; } %}
                  | "*" {% _ => { return {"#isArray": true, "#isRequired": false}; } %}
                  | "+" {% _ => { return {"#isArray": true                      }; } %}
fieldName        -> identifier {% fst %}
command          -> "@" identifier _ (string | identifier):?





integer             -> "integer"  ( _ integerDefaultValue {% snd %}):? {% fieldType %}
integerDefaultValue ->  valueSign int {% defaultValue %}

float               -> "float"  ( _ floatDefaultValue {% snd %}):? {% fieldType %}
floatDefaultValue   ->  valueSign decimal {% defaultValue %}

string              -> "string" ( _ stringDefaultValue {% snd %}):? {% fieldType %}
stringDefaultValue  -> valueSign string {% defaultValue %}

boolean             -> "boolean" ( _ booleanDefaultValue {% snd %}):? {% fieldType %}
booleanDefaultValue -> valueSign ( "false" | "true" )

date                -> "date" ( _ valueSign _ "NOW"):? {% fieldType %}
dateDefaultValue    -> valueSign "NOW"

url                 -> "url" ( _ urlDefaultValue ):?
urlDefaultValue     -> valueSign urlFunction "(" identifier ")"
urlFunction         -> "URLDOMAIN" | "URLTLD"

range               -> "range(" _ int ".." int _ ")" ( _ integerDefaultValue ):?

enum                -> "enum(" _ identifier ("," _ identifier):+ _ ")" ( _ enumDefaultValue ):?
enumDefaultValue    -> valueSign identifier {% defaultValue %}

object              -> "object" {% _ => { return {"#type": "object"}; } %}

comment             -> "#" [^\n]:* {% returnNull %}

identifier          -> [_a-zA-Z] [_a-zA-Z0-9-]:* {% d => d[0] + d[1].join('') %}
valueSign           -> "="
_                   -> wschar:* {% returnNull %}
__                  -> wschar:+ {% returnNull %}
wschar              -> [ \t]    {% id %}
nls                 -> nl:+     {% returnNull %}
nl                  -> "\n"     {% returnNull %}


@{%

  function defaultValue(d){
    return {"#default": d[1]};
  }

  function fst(d){
    return d[0];
  }

  function snd(d){
    return d[1];
  }

  function fieldType(d){
    return Object.assign({"#type":d[0]}, d[1]);
  }

  function nestOrMergeRule(){
  }

  function handleField(f){
    return {
        [f[1]]: Object.assign({"#type":"string"}, ...f[2])
    };
  }

  function handleRules(d) {
    return Object.assign({},d[0],d[2]);
  }

  function returnNull() {
    return null;
  }

  function handleCommand(c){
    // TODO
    return null;
  }

%}
