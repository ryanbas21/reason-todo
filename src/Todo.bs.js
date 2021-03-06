// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var x = Css.style(/* :: */[
      Css.marginLeft(Css.px(3)),
      /* [] */0
    ]);

var input = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.alignItems(Css.flexStart),
        /* :: */[
          Css.justifySelf(Css.flexStart),
          /* :: */[
            Css.alignSelf(Css.flexStart),
            /* [] */0
          ]
        ]
      ]
    ]);

var todoList = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.row),
        /* :: */[
          Css.alignItems(Css.center),
          /* :: */[
            Css.justifyContent(Css.center),
            /* [] */0
          ]
        ]
      ]
    ]);

var container = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.width(Css.pct(100.00)),
        /* :: */[
          Css.alignItems(Css.center),
          /* :: */[
            Css.justifyContent(Css.center),
            /* [] */0
          ]
        ]
      ]
    ]);

var completed = Css.merge(/* :: */[
      todoList,
      /* :: */[
        Css.style(/* :: */[
              Css.textDecoration(Css.lineThrough),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* x */x,
  /* input */input,
  /* todoList */todoList,
  /* container */container,
  /* completed */completed
];

var todoId = /* record */[/* contents */0];

function newTodo(text) {
  todoId[0] = todoId[0] + 1 | 0;
  return /* record */[
          /* id */todoId[0],
          /* text */text,
          /* completed */false
        ];
}

function check(id, todos) {
  return List.map((function (t) {
                var match = t[/* id */0] === id;
                if (match) {
                  return /* record */[
                          /* id */t[/* id */0],
                          /* text */t[/* text */1],
                          /* completed */!t[/* completed */2]
                        ];
                } else {
                  return t;
                }
              }), todos);
}

function $$delete(id, todos) {
  return List.filter((function (t) {
                  return t[/* id */0] !== id;
                }))(todos);
}

function toString(prim) {
  return prim;
}

function reducer(state, action) {
  switch (action.tag | 0) {
    case 0 : 
        return /* record */[
                /* todos : :: */[
                  newTodo(action[0]),
                  state[/* todos */0]
                ],
                /* input */""
              ];
    case 1 : 
        return /* record */[
                /* todos */check(action[0], state[/* todos */0]),
                /* input */state[/* input */1]
              ];
    case 2 : 
        var id = action[0];
        return /* record */[
                /* todos */List.filter((function (t) {
                          return t[/* id */0] !== id;
                        }))(state[/* todos */0]),
                /* input */state[/* input */1]
              ];
    case 3 : 
        return /* record */[
                /* todos */state[/* todos */0],
                /* input */action[0]
              ];
    
  }
}

function Todo(Props) {
  var match = React.useReducer(reducer, /* record */[
        /* todos : [] */0,
        /* input */""
      ]);
  var dispatch = match[1];
  var state = match[0];
  console.log(state);
  return React.createElement("div", undefined, React.createElement("p", undefined, state[/* input */1]), React.createElement("ul", {
                  className: container
                }, $$Array.of_list(List.map((function (t) {
                            var match = t[/* completed */2];
                            return React.createElement(React.Fragment, {
                                        children: null
                                      }, React.createElement("li", {
                                            className: match ? completed : todoList,
                                            onClick: (function (_e) {
                                                return Curry._1(dispatch, /* Check */Block.__(1, [t[/* id */0]]));
                                              })
                                          }, t[/* text */1]), React.createElement("span", {
                                            className: x,
                                            onClick: (function (_e) {
                                                return Curry._1(dispatch, /* Delete */Block.__(2, [t[/* id */0]]));
                                              })
                                          }, "X"));
                          }), state[/* todos */0]))), React.createElement("input", {
                  className: input,
                  type: "text",
                  value: state[/* input */1],
                  onChange: (function ($$event) {
                      return Curry._1(dispatch, /* Change */Block.__(3, [$$event.target.value]));
                    }),
                  onSubmit: (function (_e) {
                      return Curry._1(dispatch, /* Add */Block.__(0, [state[/* input */1]]));
                    })
                }), React.createElement("button", {
                  onClick: (function (_e) {
                      return Curry._1(dispatch, /* Add */Block.__(0, [state[/* input */1]]));
                    })
                }, "Add Todo"));
}

var make = Todo;

exports.Styles = Styles;
exports.todoId = todoId;
exports.newTodo = newTodo;
exports.check = check;
exports.$$delete = $$delete;
exports.toString = toString;
exports.reducer = reducer;
exports.make = make;
/* x Not a pure module */
