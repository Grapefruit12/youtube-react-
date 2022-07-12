

import React from 'react';

function Header(){
    return(
        <header className='header'>
                <img src={ require('../../public/images/logo.png')} alt="logo__img" className="logo__img" />
                <form action="">
                    <label>
                        <input type="text" />
                        <button className="search">
                            <img src="../public/images/search.png" alt="search logo" className="search__img" />
                        </button>
                    </label>
                </form>
            </header>
    )
};

export default Header;
