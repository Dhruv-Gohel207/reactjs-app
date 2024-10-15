import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import useTheme from '../context/theme';

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white  after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 flex items-center justify-center">
                {/* Conditional rendering of the moon or sun icon */}
                {themeMode === "dark" ? (
                    <FaMoon className="" /> // Moon icon for dark mode
                ) : (
                    <FaSun className="text-yellow-500" /> // Sun icon for light mode
                )}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                Toggle Theme
            </span>
        </label>
    );
}
