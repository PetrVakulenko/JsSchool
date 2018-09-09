import React from 'react';

const Header = ({children, title}) => (
    <h1>{children || title}</h1>
);

export default Header;
