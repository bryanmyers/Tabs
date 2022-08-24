import './App.css';
import Status from './components/Status'
import Tab from './components/Tab'

import {useState} from 'react'

const initialTabs = [
  {index: 1, name: 'Tab 1',  active: false},
  {index: 2, name: 'Tab 2',  active: true},
  {index: 3, name: 'Tab 3',  active: false},
  {index: 4, name: 'Tab 4',  active: false}
]

function App() {

  const [tabs, setTabs] = useState(initialTabs)

  const makeTabs = tabs.map((tab, index) => <Tab key={index} text={tab.name} index={tab.index} active={tab.active} tabs={tabs} setTabs={setTabs} /> )

  return (
    <>
      <div className='flex'>
        {makeTabs}
      </div>
      <Status text={tabs.find(tab => tab.active === true).name} />
    </>
  );
}

export default App;
