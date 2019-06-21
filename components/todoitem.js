import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

const TodoItem = (props) => (
    <Container maxWidth='sm' style={{paddingBottom: 10 }}>
      <Card class={props.class} raised>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bordercolor: 'red', borderRadius: 5 }}>
          <FormControlLabel control={<Checkbox value={props.item.id} color="primary" checked={props.item.done} onChange={(event, checked) => props.onChange(event, checked)}/>}/>
          <div>{props.item.name}</div>
          <div onClick={() => props.deleteItem(props.item)}>X</div>
        </div>
        
      </Card>
    </Container>
  )
  
  export default TodoItem