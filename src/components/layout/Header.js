import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <Link to={`/`} style={{ color: 'white' }}>
                Header
            </Link>
        </div>
    )
}
