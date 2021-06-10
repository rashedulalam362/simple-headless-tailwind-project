
import { Switch } from '@headlessui/react';
import { useState } from 'react';




function App() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="py-16 flex flex-col h-screen my-auto items-center bgimg bg-cover">
       <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-900' : 'bg-gray-500'
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
    </div>

  );
}

export default App;
