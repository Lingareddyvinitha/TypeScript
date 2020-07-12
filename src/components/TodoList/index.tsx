import React, { Component } from 'react'

import { withRouter, RouteComponentProps } from 'react-router-dom'

import { observer } from 'mobx-react'

import withComponentName, { hocProps } from '../../hocs/withComponentName'

import NoDataView from '../common/NoDataView'

import TodoModel from '../../stores/models/TodoModel'

import Todo from '../Todo'

import { TodosListWrapper } from './styledComponents'
import { observable } from 'mobx'

interface TodoListProps extends RouteComponentProps {
  todos: Array<TodoModel>
}

class TodoList extends Component<TodoListProps> {
  // sampleRef: React.RefObject<HTMLInputElement> = React.createRef()
  render() {
    const { todos } = this.props

    if (todos.length === 0) {
      return <NoDataView />
    }
    return (
      <TodosListWrapper>
        {todos.map(todoItem => {
          return <Todo key={todoItem.id} todo={todoItem} />
        })}
      </TodosListWrapper>
    )
  }
}

// export default React.forwardRef<HTMLInputElement, TodoListProps & hocProps>(
//   (props, ref) => {
//     return <Tod {...props} inputRef={ref} />
//   }
// )

export default withRouter(withComponentName(TodoList))
