import 'semantic-ui-css/semantic.min.css'
import Title from './components/Header'
import CreateComments from './components/create-comments'
import ListComments from './components/list-comments'
import { Grid, Segment } from 'semantic-ui-react'



function App() {
  return (
    <div>
      <Title />

      <Segment>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <CreateComments />
          </Grid.Column>
          <Grid.Column>
            <ListComments />
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default App;
