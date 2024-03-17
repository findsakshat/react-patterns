import CustomHookPatternExample from './03-custom-hooks-pattern/index';
import CompoundComponentsPatternExample from './02-compound-components-pattern';
import './App.css'

export default function App() {
  return (
    <main className='max-w-[900px] mx-auto p-4'>
      {/* <CustomHookPatternExample /> */}
      <CompoundComponentsPatternExample />
    </main>
  )
}