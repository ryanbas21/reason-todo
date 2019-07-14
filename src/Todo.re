module Styles = {
  open Css;

  let x = style([
                marginLeft(px(3))
  ]);

  let input = style([
                    display(flexBox),
                    alignItems(flexStart),
                    justifySelf(flexStart),
                    alignSelf(flexStart)
  ]);

  let todoList = style([
                        display(flexBox),
                        flexDirection(row),
                        alignItems(center),
                        justifyContent(center)
  ]);
  let container = style([
                        display(flexBox),
                        width(pct(100.00)),
                        alignItems(center),
                        justifyContent(center)
  ]);

  let completed = Css.(
        merge([
              todoList,
              style([
                    textDecoration(lineThrough)
              ]),
        ])
    ); 
}

type todo = {
  id: int,
  text: string,
  completed: bool
};

type state = {
  todos: list(todo),
  input: string
};

type action =
  | Add(string)
  | Check(int)
  | Delete(int)
  | Change(string)


let todoId = ref(0)

let newTodo = text => {
  todoId := todoId^ + 1;
  { id: todoId^, completed: false, text }
}

let check = (id, todos) => List.map(t => t.id === id ? {...t, completed: !t.completed } : t, todos)
let delete = (id, todos) => List.filter(t => t.id !== id, todos)

let toString = ReasonReact.string

let reducer = (state, action) => {
  switch(action) {
    | Add(text) => { input: "", todos: [newTodo(text), ...state.todos] }
    | Check(id) => { ...state, todos: check(id, state.todos) }
    | Delete(id) => { ...state, todos: List.filter(t => t.id !== id, state.todos) }
    | Change(input) => { ...state, input }
  }
};

[@react.component]
let make = () => {
    let (state, dispatch) = React.useReducer(reducer, { todos: [], input: "" });
    <div>
        <p>{toString(state.input)}</p>
        <ul className=Styles.container>
        {
          <TodoItem checkfn={(_e) => dispatch(Check(t.id))} deleteFn={(_e) => dispatch(Delete(t.id))}/>
        }
    </ul>
      <AddTodo 
          onSubmit={(_e) => dispatch(Add(state.input)) } 
          onClick={(_e) => dispatch(Add(state.input))}
          onChange={(event) => dispatch(Change(ReactEvent.Form.target(event)##value))} 
          input={state.input} 
      />
           </div>;
}
