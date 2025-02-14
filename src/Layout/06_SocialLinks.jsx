import DecryptedText from '../components/custom_components/Text_Component/DecryptedText';

export default function CardFive() {
  return (
    <div className="h-[400px] bg-black font-serif text-gray-400 flex flex-col items-center justify-center overflow-hidden rounded-xl ">
      {/* LinkedIn */}
      <div style={{ marginTop: '2rem' }}>
        <div className="group relative cursor-pointe text-8xl uppercase">
          <button
            rel="noopener noreferrer"
            className='group relative cursor-pointer text-8xl uppercase'
            onClick={() =>
              window.open('https://www.linkedin.com/in/vishal-soni-07-/')
            }
          >
            <DecryptedText
              text="LinkedIn"
              animateOn="view"
              revealDirection="center"
              className="text-gray-400 group-hover:text-blue-600 transition duration-300"
            />
          </button>
          {/* Underline animation */}
          <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      {/* Instagram */}
      <div
        className="group relative cursor-pointer text-8xl uppercase"
        style={{ marginTop: '2rem' }}
      >
        <button
          rel="noopener noreferrer"
          className='group relative cursor-pointer text-8xl uppercase'
          onClick={() =>
            window.open('https://www.instagram.com/')
          }
        >
          <DecryptedText
            text="Instagram"
            animateOn="view"
            revealDirection="center"
            className="text-gray-400 group-hover:text-pink-700 transition duration-300"
          />
        </button>
        {/* Underline animation */}
        <div className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-pink-500 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}
