
let toString = ReasonReact.string

[@react.component]
let make= (~todos, checkFn, deleteFn) => { 
    ReasonReact.array(
      Array.of_list(
        List.map((t) => 
                 <React.Fragment>
                   <li className={t.completed ? Styles.completed: Styles.todoList } onClick={checkFn} >
                    {toString(t.text)}
                    </li>
                    <span className=Styles.x onClick={deleteFn}>{toString("X")}</span>
                  </React.Fragment> 
                  , todos)
     )
    )
}
