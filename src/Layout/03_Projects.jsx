import Preview from '../components/custom_components/Btns/LivePreview';
import { useState } from 'react';
import ImgOne from '../assets/Project_Image/ChatApp.png';
import ImgTwo from '../assets/Project_Image/ERP.png';
import ImgThree from '../assets/Project_Image/Shop.png';

export default function Projects() {
  const [currentImg, setCurrentImg] = useState(ImgOne);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-screen bg-[#161719] text-white flex items-center justify-center text-xl">
      <div className="flex flex-col h-[90%] w-[90%] rounded-xl shadow-lg bg-[#1e1f22] overflow-hidden">
        {/* Tabs Section */}
        <div className="flex items-center w-full gap-6 px-6 py-4 bg-[#1f2125]">
          {['Project One', 'Project Two', 'Project Three'].map((tab, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentImg([ImgOne, ImgTwo, ImgThree][index]);
                setActiveTab(index);
              }}
              className={`cursor-pointer px-6 py-3 text-center rounded-lg transition duration-300 ${
                activeTab === index
                  ? 'bg-blue-500 text-white font-bold shadow-md'
                  : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-1">
          {/* Left Modal */}
          <div className="w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Project Description</h2>
            <ul className="space-y-4 text-gray-400">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Reiciendis laborum officiis quibusdam voluptatem voluptates!
              </li>
              <li>Alias minima expedita explicabo ea molestiae quidem.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Distinctio voluptatem eum obcaecati modi temporibus.</li>
            </ul>
          </div>

          {/* Right Modal */}
          <div className="w-1/2 flex flex-col items-center justify-center gap-6 p-6">
          
            <div className=" flex items-center justify-center w-[80%] h-[60%] bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img
                src={currentImg}
                alt="Project"
                className="w-[50%] h-auto object-cover"
              />
            </div>
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}
