import { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TodoItem from '../components/todoitem.js';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    if (!localStorage.getItem('todoItems')) {
      localStorage.setItem('todoItems', '[]');
    }
    if (!localStorage.getItem('completedItems')) {
      localStorage.setItem('completedItems', '[]');
    }
     const todoItems = JSON.parse(localStorage.getItem('todoItems'));
     const completedItems = JSON.parse(localStorage.getItem('completedItems'));
     this.setState({ todoItems, completedItems });
  }

  onClick = (event) => {
    this.setState({ value: event.target.value });
  }

  submit = () => {
    var todos = JSON.parse(localStorage.getItem('todoItems'));
    if (this.state.value) {
      const id = this.state.todoItems.length + 1;
      const valueObj = { name: this.state.value, id, done: false };
      todos.push(valueObj);
      localStorage.setItem('todoItems', JSON.stringify(todos));
      this.setState({ value: '', emptyError: false, todoItems: todos });
    } else {
      this.setState({ emptyError: true })
    }
  }
  renderTodoItems = () => {
    const style= { display: 'flex', flex: 1 };
    const items = this.state.todoItems.map((item) => {
      return (
        <TodoItem class={style} item={item} deleteItem={this.deleteItem} onChange={this.checkboxOnChange} nocheckMark/>
      )
    })

    return items;
  }

  renderCompletedItems = () => {
    if (this.state.completedItems.length > 0) {
      const style= { display: 'flex', flex: 1 };
      const items = this.state.completedItems.map((item) => {
        return (
          <TodoItem class={style} item={item} deleteItem={this.deleteItem} onChange={this.checkboxOnChange}/>
        )
      })
      return items; 
    } else if (this.state.completedItems.length === 0 && this.state.todoItems.length > 0){
      return (<Typography>Complete a task in your todo list. YOU CAN DO IT!</Typography>);
    }
       
  }

  deleteItem = (item) => {
    const newTodoItems = JSON.parse(JSON.stringify(this.state.todoItems));
    const id = newTodoItems.findIndex(i => i.id === item.id);
    const newState = {};
    if (id >= 0) {
      newTodoItems.splice(id, 1);
      newState.todoItems = newTodoItems;
    } else {
      const completed = JSON.parse(JSON.stringify(this.state.completedItems));
      const id2 = completed.findIndex(i => i.id === item.id);
      if (id2 >= 0) {
        completed.splice(id2, 1);
        newState.completedItems = completed;
      }
    }
    this.setState(newState, () => {
      localStorage.setItem('todoItems', JSON.stringify(newTodoItems));
    });
  }
  checkboxOnChange = (event, checked) => {
    const index = this.state.todoItems.findIndex(i => i.id === parseInt(event.target.value, 10));
    const todos = JSON.parse(JSON.stringify(this.state.todoItems));
    const completed = JSON.parse(JSON.stringify(this.state.completedItems));
    todos[index].done = checked;
    completed.push(todos[index]);
    todos.splice(index, 1);
    this.setState({ todoItems: todos, completedItems: completed }, () => {
      localStorage.setItem('todoItems', JSON.stringify(this.state.todoItems));
      localStorage.setItem('completedItems', JSON.stringify(this.state.completedItems));

    });
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Structural Todo List
        </Typography>
        <Input placeholder={'enter an action item here'} style={{ width: 400, height: 25, marginRight: 15 }} onChange={this.onClick} type="input" value={this.state.value}/>
        <Button variant="contained" color="primary" onClick={this.submit}>ADD</Button>
        {this.state.emptyError &&
        <div style={{ color: 'red' }}>please enter an todo item before hitting submit</div>
        }
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', paddingTop: 20 }}>
        {this.state.todoItems && 
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              TO DO LIST       
            </Typography>
            {this.renderTodoItems()}
          </Grid>
        }
        {this.state.completedItems && 
          <Grid item xs={12} md={6}>
          <Typography variant="h6">
            COMPLETED TO DO LIST       
          </Typography>
          {this.renderCompletedItems()}
        </Grid>
        }
        </div>
      </Container>
    )
  }
}