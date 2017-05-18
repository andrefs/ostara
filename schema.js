// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "model", "symbols": ["rules"], "postprocess": b => b[0]},
    {"name": "rules$ebnf$1", "symbols": []},
    {"name": "rules$ebnf$1$subexpression$1", "symbols": ["_", "nls", "rules"]},
    {"name": "rules$ebnf$1", "symbols": ["rules$ebnf$1", "rules$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "rules$ebnf$2", "symbols": ["nl"], "postprocess": id},
    {"name": "rules$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "rules", "symbols": ["rule", "rules$ebnf$1", "rules$ebnf$2"], "postprocess": r => r[0]},
    {"name": "rule", "symbols": ["field"], "postprocess": r => r[0]},
    {"name": "rule", "symbols": ["comment"]},
    {"name": "rule", "symbols": ["command"]},
    {"name": "field$ebnf$1", "symbols": []},
    {"name": "field$ebnf$1", "symbols": ["field$ebnf$1", "fieldMetas"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "field", "symbols": ["_", "fieldName", "field$ebnf$1"], "postprocess": f => { return {[f[1]]: Object.assign({},f[2][0], f[2][1])}; }},
    {"name": "fieldMetas", "symbols": ["_", "fieldMeta"], "postprocess": r => r[1]},
    {"name": "fieldMeta", "symbols": [{"literal":":"}, "fieldType"], "postprocess": q => q[1]},
    {"name": "fieldMeta", "symbols": ["isInternal"]},
    {"name": "fieldMeta", "symbols": ["fieldQuantifier"], "postprocess": s => s[0]},
    {"name": "fieldType$subexpression$1", "symbols": ["integer"]},
    {"name": "fieldType$subexpression$1", "symbols": ["float"]},
    {"name": "fieldType$subexpression$1", "symbols": ["string"]},
    {"name": "fieldType$subexpression$1", "symbols": ["boolean"]},
    {"name": "fieldType$subexpression$1", "symbols": ["date"]},
    {"name": "fieldType$subexpression$1", "symbols": ["url"]},
    {"name": "fieldType$subexpression$1", "symbols": ["range"]},
    {"name": "fieldType$subexpression$1", "symbols": ["enum"]},
    {"name": "fieldType$subexpression$1", "symbols": ["object"]},
    {"name": "fieldType", "symbols": ["fieldType$subexpression$1"], "postprocess": ft => ft[0][0]},
    {"name": "isInternal", "symbols": [{"literal":"^"}], "postprocess": _ => { return {"#isInternal": true}; }},
    {"name": "fieldQuantifier", "symbols": [{"literal":"?"}], "postprocess": _ => { return {"#isRequired": false                  }; }},
    {"name": "fieldQuantifier", "symbols": [{"literal":"!"}], "postprocess": _ => { return {"#isForbidden": true                  }; }},
    {"name": "fieldQuantifier", "symbols": [{"literal":"*"}], "postprocess": _ => { return {"#isArray": true, "#isRequired": false}; }},
    {"name": "fieldQuantifier", "symbols": [{"literal":"+"}], "postprocess": _ => { return {"#isArray": true                      }; }},
    {"name": "fieldName", "symbols": ["identifier"], "postprocess": l => l[0]},
    {"name": "command$ebnf$1$subexpression$1", "symbols": ["string"]},
    {"name": "command$ebnf$1$subexpression$1", "symbols": ["identifier"]},
    {"name": "command$ebnf$1", "symbols": ["command$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "command$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "command", "symbols": [{"literal":"@"}, "identifier", "_", "command$ebnf$1"]},
    {"name": "integer$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "integer$ebnf$1$subexpression$1", "symbols": ["_", "integerDefaultValue"], "postprocess": k => k[1]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "integer$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "integer", "symbols": ["integer$string$1", "integer$ebnf$1"], "postprocess": i => { return Object.assign({"#type":"integer"}, i[1]); }},
    {"name": "integerDefaultValue", "symbols": ["valueSign", "_", "int"], "postprocess": v => { return {"#default": v[2]}; }},
    {"name": "float$string$1", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "float$ebnf$1$subexpression$1", "symbols": ["_", "floatDefaultValue"]},
    {"name": "float$ebnf$1", "symbols": ["float$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "float$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "float", "symbols": ["float$string$1", "float$ebnf$1"], "postprocess": t => t[1]},
    {"name": "floatDefaultValue", "symbols": ["valueSign", "_", "decimal"], "postprocess": f => { return {'#default': f[2]}; }},
    {"name": "string$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "string$ebnf$1$subexpression$1", "symbols": ["_", "stringDefaultValue"]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "string$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "string", "symbols": ["string$string$1", "string$ebnf$1"]},
    {"name": "stringDefaultValue", "symbols": ["valueSign", "_", "string"]},
    {"name": "boolean$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean$ebnf$1$subexpression$1", "symbols": ["_", "booleanDefaultValue"]},
    {"name": "boolean$ebnf$1", "symbols": ["boolean$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "boolean$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "boolean", "symbols": ["boolean$string$1", "boolean$ebnf$1"]},
    {"name": "booleanDefaultValue$subexpression$1$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "booleanDefaultValue$subexpression$1", "symbols": ["booleanDefaultValue$subexpression$1$string$1"]},
    {"name": "booleanDefaultValue$subexpression$1$string$2", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "booleanDefaultValue$subexpression$1", "symbols": ["booleanDefaultValue$subexpression$1$string$2"]},
    {"name": "booleanDefaultValue", "symbols": ["valueSign", "_", "booleanDefaultValue$subexpression$1"]},
    {"name": "date$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"N"}, {"literal":"O"}, {"literal":"W"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "date$ebnf$1$subexpression$1", "symbols": ["_", "valueSign", "_", "date$ebnf$1$subexpression$1$string$1"]},
    {"name": "date$ebnf$1", "symbols": ["date$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "date$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "date", "symbols": ["date$string$1", "date$ebnf$1"]},
    {"name": "dateDefaultValue$string$1", "symbols": [{"literal":"N"}, {"literal":"O"}, {"literal":"W"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "dateDefaultValue", "symbols": ["valueSign", "_", "dateDefaultValue$string$1"]},
    {"name": "url$string$1", "symbols": [{"literal":"u"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "url$ebnf$1$subexpression$1", "symbols": ["_", "urlDefaultValue"]},
    {"name": "url$ebnf$1", "symbols": ["url$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "url$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "url", "symbols": ["url$string$1", "url$ebnf$1"]},
    {"name": "urlDefaultValue", "symbols": ["valueSign", "_", "urlFunction", {"literal":"("}, "identifier", {"literal":")"}]},
    {"name": "urlFunction$string$1", "symbols": [{"literal":"U"}, {"literal":"R"}, {"literal":"L"}, {"literal":"D"}, {"literal":"O"}, {"literal":"M"}, {"literal":"A"}, {"literal":"I"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "urlFunction", "symbols": ["urlFunction$string$1"]},
    {"name": "urlFunction$string$2", "symbols": [{"literal":"U"}, {"literal":"R"}, {"literal":"L"}, {"literal":"T"}, {"literal":"L"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "urlFunction", "symbols": ["urlFunction$string$2"]},
    {"name": "range$string$1", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "range$string$2", "symbols": [{"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "range$ebnf$1$subexpression$1", "symbols": ["_", "integerDefaultValue"]},
    {"name": "range$ebnf$1", "symbols": ["range$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "range$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "range", "symbols": ["range$string$1", "_", "int", "range$string$2", "int", "_", {"literal":")"}, "range$ebnf$1"]},
    {"name": "enum$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"u"}, {"literal":"m"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enum$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_", "identifier"]},
    {"name": "enum$ebnf$1", "symbols": ["enum$ebnf$1$subexpression$1"]},
    {"name": "enum$ebnf$1$subexpression$2", "symbols": [{"literal":","}, "_", "identifier"]},
    {"name": "enum$ebnf$1", "symbols": ["enum$ebnf$1", "enum$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "enum$ebnf$2$subexpression$1", "symbols": ["_", "enumDefaultValue"]},
    {"name": "enum$ebnf$2", "symbols": ["enum$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "enum$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "enum", "symbols": ["enum$string$1", "_", "identifier", "enum$ebnf$1", "_", {"literal":")"}, "enum$ebnf$2"]},
    {"name": "enumDefaultValue", "symbols": ["valueSign", "identifier"]},
    {"name": "object$string$1", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "object", "symbols": ["object$string$1"], "postprocess": _ => { return {"#type": "object"}; }},
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": ["comment$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "comment", "symbols": [{"literal":"#"}, "comment$ebnf$1"], "postprocess": _ => { return null; }},
    {"name": "identifier$ebnf$1", "symbols": []},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[_a-zA-Z0-9-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": [/[_a-zA-Z]/, "identifier$ebnf$1"], "postprocess": d => d[0] + d[1].join('')},
    {"name": "valueSign", "symbols": [{"literal":"="}]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t]/], "postprocess": id},
    {"name": "nls$ebnf$1", "symbols": ["nl"]},
    {"name": "nls$ebnf$1", "symbols": ["nls$ebnf$1", "nl"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nls", "symbols": ["nls$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "nl", "symbols": [{"literal":"\n"}], "postprocess": function(d) {return null;}}
]
  , ParserStart: "model"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
