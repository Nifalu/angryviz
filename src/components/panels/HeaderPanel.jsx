// src/components/panels/HeaderPanel.jsx
import React from 'react';
import { ThemeToggle } from '../colortheme/ThemeToggle';

const HeaderPanel = ({ title = "AngryViz" }) => {
    return (
        <>
            <div className="header-title text-lg text-card-foreground">
                {title}
            </div>
            <div className="header-toggle justify-self-end">
                <ThemeToggle />
            </div>
        </>
    );
};

export default HeaderPanel;