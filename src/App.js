import 'semantic-ui-css/semantic.min.css'
import Title from './components/Header'
import CreateComments from './components/create-comments'
import ListComments from './components/list-comments'


function App() {
  return (
    <div>
      <Title />
      <CreateComments />
      <ListComments />
    </div>
  );
}

export default App;
