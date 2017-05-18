@builtin "number.ne"     # `int`, `decimal`, and `percentage` number primitives
@builtin "string.ne"


model            -> rules                       {% b => b[0] %}
rules            -> rule ( _ nls rules):* nl:?  {% r => r[0] %}
rule             -> field                       {% r => r[0] %}
                  | comment
                  | command
field            -> _ fieldName fieldMetas:* {% f => { return {[f[1]]: Object.assign({},f[2][0], f[2][1])}; } %}
fieldMetas       -> _ fieldMeta   {% r => r[1] %}
fieldMeta        -> ":" fieldType {% q => q[1] %}
                  | isInternal
                  | fieldQuantifier {% s => s[0] %}
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
fieldName        -> identifier {% l => l[0] %}
command          -> "@" identifier _ (string | identifier):?





integer             -> "integer"  ( _ integerDefaultValue {% k => k[1] %}):? {% i => { return Object.assign({"#type":"integer"}, i[1]); } %}
integerDefaultValue ->  valueSign _ int {% v => { return {"#default": v[2]}; } %}

float               -> "float"  ( _ floatDefaultValue ):? {% t => t[1] %}
floatDefaultValue   ->  valueSign _ decimal {% f => { return {'#default': f[2]}; } %}

string              -> "string" ( _ stringDefaultValue ):?
stringDefaultValue  -> valueSign _ string

boolean             -> "boolean" ( _ booleanDefaultValue):?
booleanDefaultValue -> valueSign _ ( "false" | "true" )

date                -> "date" ( _ valueSign _ "NOW"):?
dateDefaultValue    -> valueSign _ "NOW"

url                 -> "url" ( _ urlDefaultValue ):?
urlDefaultValue     -> valueSign _ urlFunction "(" identifier ")"
urlFunction         -> "URLDOMAIN" | "URLTLD"

range               -> "range(" _ int ".." int _ ")" ( _ integerDefaultValue ):?

enum                -> "enum(" _ identifier ("," _ identifier):+ _ ")" ( _ enumDefaultValue ):?
enumDefaultValue    -> valueSign identifier

object              -> "object" {% _ => { return {"#type": "object"}; } %}

comment             -> "#" [^\n]:* {% _ => { return null; } %}

identifier          -> [_a-zA-Z] [_a-zA-Z0-9-]:* {% d => d[0] + d[1].join('') %}
valueSign           -> "="
_                   -> wschar:* {% function(d) {return null;} %}
__                  -> wschar:+ {% function(d) {return null;} %}
wschar              -> [ \t] {% id %}
nls                 -> nl:+ {% function(d) {return null;} %}
nl                  -> "\n" {% function(d) {return null;} %}

