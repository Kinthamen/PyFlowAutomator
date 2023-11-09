// This file is licensed under the CC BY-NC-SA 4.0 license.
// See https://creativecommons.org/licenses/by-nc-sa/4.0/ for details.

import type { PureDictionary } from "./types";

const unlistedNodes = ["GET_VARIABLE", "SET_VARIABLE", "PURE"];

export const pureNodes: PureDictionary = {
    "==": {
        label: "==",
        category: "comparison",
        type: "PURE",
        args: [null, null],
        function: "operator.eq"
    },
    ">=": {
        label: ">=",
        category: "comparison",
        type: "PURE",
        args: [null, null],
        function: "operator.ge"
    },
    ">": {
        label: ">",
        category: "comparison",
        type: "PURE",
        args: [null, null],
        function: "operator.gt"
    },
    "<=": {
        label: "<=",
        category: "comparison",
        type: "PURE",
        args: [null, null],
        function: "operator.le"
    },
    "<": {
        label: "<",
        category: "comparison",
        type: "PURE",
        args: [null, null],
        function: "operator.lt"
    },
    "!=": {
        label: "!=",
        category: "comparison",
        type: "PURE",
        args: [null, null],
        function: "operator.ne"
    },
    "is": {
        label: "is",
        category: "logical",
        type: "PURE",
        args: [null, null],
        function: "operator.is_"
    },
    "is_not": {
        label: "is not",
        category: "logical",
        type: "PURE",
        args: [null, null],
        function: "operator.is_not"
    },
    "not": {
        label: "not",
        category: "logical",
        type: "PURE",
        args: [null],
        function: "operator.not_"
    },
    "truth": {
        label: "truth",
        category: "logical",
        type: "PURE",
        args: [null],
        function: "operator.truth"
    },
    "abs": {
        label: "abs",
        category: "math",
        type: "PURE",
        args: [null],
        function: "operator.abs"
    },
    "add": {
        label: "+",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.add"
    },
    "and": {
        label: "and",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.and_"
    },
    "floordiv": {
        label: "//",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.floordiv"
    },
    "index": {
        label: "index",
        category: "math",
        type: "PURE",
        args: [null],
        function: "operator.index"
    },
    "inv": {
        label: "inv",
        category: "math",
        type: "PURE",
        args: [null],
        function: "operator.inv"
    },
    "lshift": {
        label: "<<",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.lshift"
    },
    "matmul": {
        label: "@",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.matmul"
    },
    "mod": {
        label: "%",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.mod"
    },
    "mul": {
        label: "*",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.mul"
    },
    "neg": {
        label: "neg",
        category: "math",
        type: "PURE",
        args: [null],
        function: "operator.neg"
    },
    "or": {
        label: "or",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.or_"
    },
    "pos": {
        label: "pos",
        category: "math",
        type: "PURE",
        args: [null],
        function: "operator.pos"
    },
    "pow": {
        label: "**",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.pow"
    },
    "rshift": {
        label: ">>",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.rshift"
    },
    "sub": {
        label: "-",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.sub"
    },
    "truediv": {
        label: "/",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.truediv"
    },
    "xor": {
        label: "^",
        category: "math",
        type: "PURE",
        args: [null, null],
        function: "operator.xor"
    },
    "concat": {
        label: "concat",
        category: "sequence",
        type: "PURE",
        args: [null, null],
        function: "operator.concat"
    },
    "contains": {
        label: "contains",
        category: "sequence",
        type: "PURE",
        args: [null, null],
        function: "operator.contains"
    },
    "countOf": {
        label: "countOf",
        category: "sequence",
        type: "PURE",
        args: [null, null],
        function: "operator.countOf"
    },
    "delitem": {
        label: "del a[b]",
        category: "sequence",
        type: "PURE",
        args: [null, null],
        function: "operator.delitem"
    },
    "getitem": {
        label: "a[b]",
        category: "sequence",
        type: "PURE",
        args: [null, null],
        function: "operator.getitem"
    },
    "indexOf": {
        label: "indexOf",
        category: "sequence",
        type: "PURE",
        args: [null, null],
        function: "operator.indexOf"
    },
    "setitem": {
        label: "a[b]=c",
        category: "sequence",
        type: "PURE",
        args: [null, null, null],
        function: "operator.setitem"
    },
    "iadd": {
        label: "+=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.iadd"
    },
    "iand": {
        label: "&=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.iand"
    },
    "iconcat": {
        label: "+=(seq)",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.iconcat"
    },
    "ifloordiv": {
        label: "//=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.ifloordiv"
    },
    "ilshift": {
        label: "<<=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.ilshift"
    },
    "imatmul": {
        label: "@=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.imatmul"
    },
    "imod": {
        label: "%=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.imod"
    },
    "imul": {
        label: "*=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.imul"
    },
    "ior": {
        label: "|=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.ior"
    },
    "ipow": {
        label: "**=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.ipow"
    },
    "irshift": {
        label: ">>=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.irshift"
    },
    "isub": {
        label: "-=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.isub"
    },
    "itruediv": {
        label: "/=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.itruediv"
    },
    "ixor": {
        label: "^=",
        category: "in-place",
        type: "PURE",
        args: [null, null],
        function: "operator.ixor"
    },
};

export const executableNodes: PureDictionary = {
    "if": {
        label: "if",
        category: "logic",
        type: "IF",
        kwargs: { "true": null, "false": null },
        function: "branch"
    },
    "for": {
        label: "for each",
        category: "logic",
        type: "FOR",
        kwargs: { next_function: null },
        function: "for_each"
    },
    "http_get": {
        label: "http get",
        category: "requests",
        type: "EXEC",
        args: [{ url: null }],
        function: "requests.get"
    },
    "json_path": {
        label: "json path",
        category: "data",
        type: "EXEC",
        args: [{ json: null }],
        kwargs: [{ expression: null }],
        function: "extract_json"
    },
    "print": {
        label: "print",
        category: "builtins",
        type: "EXEC",
        args: [{ text: null }],
        function: "builtins.print"
    },
}

export const specialNodes: PureDictionary = {
    "get_variable": {
        label: "get variable",
        category: "variables",
        type: "GET_VARIABLE",
        kwargs: { variable_name: "" },
        function: "__ignore__"
    },
    "set_variable": {
        label: "set variable",
        category: "variables",
        type: "SET_VARIABLE",
        kwargs: { variable_name: null, value: null },
        function: "set_variable"
    },
    "start": {
        label: "start",
        category: "flow",
        type: "START",
        function: "__ignore__"
    },
}

export const nodesList = Object.fromEntries(
    Object.entries({ ...pureNodes, ...executableNodes, ...specialNodes }).filter(
        ([key]) => !unlistedNodes.includes(key)
    )
);

export const categories = getCategories({ ...pureNodes, ...executableNodes });

function getCategories(nodes: PureDictionary): string[] {
    const categories: string[] = [];
    for (const node of Object.values(nodes)) {
        if (!categories.includes(node.category)) {
            categories.push(node.category);
        }
    }
    return categories;
}