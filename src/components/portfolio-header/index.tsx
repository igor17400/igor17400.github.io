import { useState } from 'react';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import './index.css';

const PortfolioHeader = ({
  theme,
  setTheme,
  lightTheme,
  darkTheme,
  resumeFileUrl,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  lightTheme: string;
  darkTheme: string;
  resumeFileUrl?: string;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    setIsAnimating(true);

    setTimeout(() => {
      const newTheme = theme === lightTheme ? darkTheme : lightTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      typeof window !== 'undefined' &&
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, newTheme);
      setTheme(newTheme);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center relative overflow-hidden bg-image sm:m-2 sm:my-4">
      {/* Overlay to reduce intensity */}
      <div className="overlay"></div>

      <div className="flex justify-between items-center p-2 mb-20 sm:mb-0 z-10 relative">
        <div></div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost bg-transparent hover:bg-transparent text-lg rounded-full px-4 py-2 flex items-center justify-center"
            style={{ width: '60px', height: '60px' }}
          >
            {theme === lightTheme ? (
              <AiOutlineMoon
                className={`text-white w-8 h-8 ${isAnimating ? 'spin-animation' : ''}`}
              />
            ) : (
              <AiOutlineSun
                className={`text-white w-8 h-8 ${isAnimating ? 'spin-animation' : ''}`}
              />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center flex-grow pb-20">
        <div
          className={`card justify-center text-center items-center m-2 p-2 sm:p-16 ${theme === lightTheme ? 'bg-white bg-opacity-70' : 'bg-black bg-opacity-70'}`}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Igor Lima Rocha Azevedo
          </h1>
          <p className="text-lg sm:text-2xl leading-relaxed max-w-2xl mx-auto">
            Electrical Engineer from the{' '}
            <a
              href="https://international.unb.br/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline italic text-primary"
            >
              University of Brasília
            </a>
            , now a Research Scholar at{' '}
            <a
              href="https://sites.google.com/view/toyolab/members?authuser=0"
              target="_blank"
              rel="noreferrer"
              className="hover:underline italic text-primary"
            >
              The University of Tokyo
            </a>{' '}
            - focusing on foundational models and recommender systems.
          </p>
          <div className="flex items-center space-x-4 pt-5">
            <a
              href={resumeFileUrl}
              target="_blank"
              className={`cursor-pointer bg-gradient-to-r py-2 px-4 sm:px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                theme === lightTheme
                  ? 'text-white from-blue-600 via-blue-400 to-blue-600'
                  : 'text-white from-blue-300 via-blue-700 to-blue-400'
              }`}
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pb-2 text-xs">
        <p>
          Background image by{' '}
          <a
            className="underline"
            href="https://unsplash.com/@g_leighton"
            target="_blank"
          >
            Gustavo Leighton
          </a>
        </p>
      </div>
    </div>
  );
};

export default PortfolioHeader;
