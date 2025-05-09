// src/components/panels/HeaderPanel.jsx
import React from 'react';
import { ThemeToggle } from '../colortheme/ThemeToggle'; // Adjusted import path

const HeaderPanel = ({ title = "AngryViz" }) => {
    return (
        <>
            <div className="header-title font-semibold text-lg text-card-foreground pl-4">{title}</div> {/* Added pl-4 for some left padding */}
            <div className="header-toggle flex items-center justify-end gap-2 pr-4"> {/* Added justify-end and pr-4 for padding */}
                <ThemeToggle />
            </div>
        </>
    );
};

export default HeaderPanel;
