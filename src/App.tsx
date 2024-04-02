import CustomHookPatternExample from './04-custom-hooks-pattern/index';
import CompoundComponentsPatternExample from './03-compound-components-pattern';
import './App.css'
import ContainerPresentationalPatternExample from './02-container-presentational-components-pattern';
import ContextAPIPatternExample from './05-context-api-pattern';
import ControlledAndUnControlledComponentPatternExample from './06-controlled-and-uncontrolled-components-pattern';
import MultipleSelectDropdownBuild from './builds/multiselect-dropdown-build';

export default function App() {
  return (
    <main className='max-w-[900px] mx-auto p-4'>
      {/* <ContainerPresentationalPatternExample /> */}
      {/* <CustomHookPatternExample /> */}
      {/* <CompoundComponentsPatternExample /> */}
      {/* <ContextAPIPatternExample /> */}
      {/* <ControlledAndUnControlledComponentPatternExample /> */}

      {/* BUILDS */}
      <MultipleSelectDropdownBuild />
    </main>
  )
}