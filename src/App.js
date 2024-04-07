import './App.css';
import TestOne from './components/test';
import FlowTwo from './components/TestTwo';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CustomTwo from './components/CustomTwo';
import D3OrgTestOne from './components/D3OrgTestOne';
import RootNode from './components/RootNode';
import D3TreeTestOne from './components/D3TreeTestOne';

function App() {
  
  const data = [
    { order: 'root', name: 'Jane Doe', empId: '0021', reportingManagerId: '0000', designation: 'CEO', photo: 'https://firebasestorage.googleapis.com/v0/b/pluxi-3716a.appspot.com/o/CL0001%2FBR0001%2FTraining%2FE001111%2FScreenshot%202024-02-02%20145755.png?alt=media', score: '50' },
    { order: 'child1', name: 'Tyler Weary', empId: '0721', reportingManagerId: '0021', designation: 'Devops', photo: '🤓', score: '90' },
    { order: 'child2', name: 'Kristi Price', empId: '0822', reportingManagerId: '0721', designation: 'Developer', photo: '🤩', score: '110' },
    { order: 'child3', name: 'Harry', empId: '0081', reportingManagerId: '0822', designation: 'UI/UX', photo: '🤩', score: '110' },
    { order: 'child2', name: 'Henry', empId: '1021', reportingManagerId: '0651', designation: 'Designer', photo: '🤩', score: '110' },
    { order: 'child1', name: 'John', empId: '0651', reportingManagerId: '0021', designation: 'Developer', photo: '🤓', score: '90' },
    { order: 'child3', name: 'Alex', empId: '5021', reportingManagerId: '0822', designation: 'Soft Eng', photo: '🤩', score: '70' },
    { order: 'child3', name: 'Alen', empId: '0121', reportingManagerId: '0822', designation: 'QA', photo: '🤩', score: '110' },
];



  return (
    <div className="border w-100 p-5">

      {/* <TestOne></TestOne> */}
      {/* <FlowTwo></FlowTwo> */}
      {/* {
        data?.map((d, i) => <RootNode key={i} data={d}></RootNode>)
      } */}

      <D3OrgTestOne data={data} ></D3OrgTestOne>


      {/* <D3TreeTestOne ></D3TreeTestOne> */}

    </div>
  );
}

export default App;
