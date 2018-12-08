import { Button } from '@blueprintjs/core'
import axios from 'axios'
import React from "react"
import ReactDOM from "react-dom"

interface TasksState {
  tasks?: string
}

class Counter extends React.Component<{}, TasksState> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasks: ''
    }
    this.getData = this.getData.bind(this)
  }

  getData() {
    axios
      .get('http://127.0.0.1:3000/')
      .then(results => {
        const data = results.data
        console.log(data)
        this.setState({
          tasks: '' + data
        })
      })
  }

  render() {
    return(
      <div>
        <Button onClick={this.getData}>getData</Button>
        <div>{this.state.tasks}</div>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.querySelector(".root"))
