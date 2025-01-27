import Preview from '../components/custom_components/Btns/LivePreview';
import Card from '../components/custom_components/Wall/ProjectCard';
import { useState } from 'react';



export default function Projects() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="h-screen bg-[#161719] text-white flex items-center justify-center overflow-hidden text-xl rounded-xl">




      <div className="flex flex-col border-2 border-white h-[90%] w-[90%]">
        {/* Container with tab and modal */}
        <div className="flex items-center justify-between border-3 border-amber-400 h-[10%] ">
          {/* Tab Section */}
          <div className="flex items-center w-[100%] overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <div
              
              onClick={() => setCurrentTab(0)}
              className={`flex items-center flex-shrink-0 cursor-pointer px-5 py-2 border-b-4 dark:border-gray-300 dark:text-gray-600 ${currentTab === 0 ? 'border-amber-800 text-amber-800' : ''}`}
            >
              Project One
            </div>
            <div
              onClick={() => setCurrentTab(1)}
              className={`flex items-center flex-shrink-0 cursor-grab px-5 py-2 border-b-4 dark:border-gray-300 dark:text-gray-600 ${currentTab === 1 ? 'border-amber-800 text-amber-800' : ''}`}
            >
              Project Two
            </div>
            <div
              className="flex items-center flex-shrink-0 cursor-pointer px-5 py-2 border-b-4 dark:border-violet-600 dark:text-gray-900"
            >
              Project Three
            </div>
          </div>
        </div>



        <div className="flex h-[90%]">
          <div className="w-1/2 border-4 border-amber-800 flex  items-start justify-center">
            {/* Left Modal */}
            <ul>
              <li>project descrption</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reiciendis?</li>
              
              
            </ul>
          </div>
          <div className="w-1/2 border-4 border-amber-800 flex flex-col items-center justify-evenly">
            {/* Right Modal */}
            <Card />
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}
