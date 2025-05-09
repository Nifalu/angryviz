import React from 'react';
import { ThemeToggle } from '../colortheme/ThemeToggle.jsx';

const HeaderPanel = ({ title = "AngryViz" }) => {
    return (
        <div className="h-14 border-b border-border bg-background flex items-center justify-between px-4 w-full">
            <div className="font-semibold text-lg">{title}</div>
            <div className="flex items-center gap-2">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default HeaderPanel;