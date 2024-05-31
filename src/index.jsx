import List from './list';
import Form from './components/Form';
import Modal from 'react-modal';


function Index() {

    return (
        <div>
            <List />
            <Form />
        </div>);
}
Modal.setAppElement('#root');
export default Index;