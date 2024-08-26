import { AiOutlineControl } from 'react-icons/ai';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
import { MouseEvent } from 'react';
import { useState } from 'react';
import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai';
import star_wars from '../../assets/star_wars_gif.gif';

/**
 * Renders a theme changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @param {boolean} props.selectButton - Whether to use a button instead of a dropdown for theme selection.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
  lightTheme = 'light',
  darkTheme = 'dark',
  selectButton = false,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
  lightTheme?: string;
  darkTheme?: string;
  selectButton?: boolean;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTheme = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    selectedTheme: string,
  ) => {
    e.preventDefault();

    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);

    setTheme(selectedTheme);
  };

  const toggleTheme = () => {
    setIsAnimating(true);

    // Toggle the theme with a small delay for animation effect
    setTimeout(() => {
      const newTheme = theme === lightTheme ? darkTheme : lightTheme;
      document.querySelector('html')?.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
      setIsAnimating(false); // Stop animation after theme is set
    }, 500); // Match the animation duration
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              // Render the GIF instead of "Theme"
              <img src={star_wars} alt="Igor GIF" className="w-80 h-auto" />
            )}
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {loading ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' }) : ''}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              widthCls: 'w-14 md:w-28',
              heightCls: 'h-10',
              className: 'mr-6',
            })
          ) : selectButton ? (
            <button
              onClick={toggleTheme}
              className="btn btn-ghost normal-case opacity-50 text-base-content flex items-center"
            >
              {theme === lightTheme ? (
                <>
                  <AiOutlineMoon
                    className={`w-8 h-8 ${isAnimating ? 'spin-animation' : ''}`}
                  />
                </>
              ) : (
                <>
                  <AiOutlineSun
                    className={`w-8 h-8 ${isAnimating ? 'spin-animation' : ''}`}
                  />
                </>
              )}
            </button>
          ) : (
            <div title="Change Theme" className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
              >
                <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
                <span className="hidden md:inline">Change Theme</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1792 1792"
                  className="inline-block w-4 h-4 ml-1 fill-current"
                >
                  <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-lg bg-base-200 text-base-content z-10"
              >
                <ul className="p-4 menu compact">
                  {[
                    themeConfig.defaultTheme,
                    ...themeConfig.themes.filter(
                      (item) => item !== themeConfig.defaultTheme,
                    ),
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={(e) => changeTheme(e, item)}
                        className={`${theme === item ? 'active' : ''}`}
                      >
                        <span className="opacity-60 capitalize">
                          {item === themeConfig.defaultTheme ? 'Default' : item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
