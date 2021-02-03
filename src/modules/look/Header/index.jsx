import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

import styles from './header.module.scss';

function useCounter() {
    const initialState = () =>
        Number(window.localStorage.getItem('count') || null);
    const [count, setCount] = useState(initialState);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    useEffect(() => window.localStorage.setItem('count', count), [count]);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    });

    return { count, increment, decrement };
}

function useRotate() {
    const initialRotate = () => JSON.parse(window.localStorage.getItem('rotateLogo'));
    const [isActive, setActive] = useState(initialRotate);
    const handleToggle = () => setActive(!isActive);
    useEffect(() => window.localStorage.setItem('rotateLogo', JSON.stringify(isActive)), [isActive]);

    return { isActive, handleToggle };
}

const SwitchColor = () => {
    const [color, setColor] = useState('dark');

    const colorSwitch = () => {
        if (color !== 'white') {
            return setColor('pink');
        }
        return setColor('orange');
    };

    return (
        <div style={{ padding: '20px', backgroundColor: color }}>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('white')}>White</button>
            <button onClick={colorSwitch}>Orange</button>
        </div>
    );
};

const WellcomeBox = () => {
    const [boxVisible, setBoxVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBoxVisible(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {boxVisible && <div className={styles.wBox}>Hello, Alex!</div>}
        </>
    );
};

const Header = ({ text = 'Hello' }) => {
    const { isActive, handleToggle } = useRotate('false');
    const { count, increment, decrement } = useCounter(5, 2);

    return (
    <header className={styles.header}>
        <img src={logo} className={isActive ? 'App-logoTwo' : 'App-logo'} alt="logo" />
        {isActive}
        <WellcomeBox />
        <p>
            {text}
        </p>
        <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
        >
            Learn React
        </a>
        <SwitchColor />
        <button
            className={styles.button}
            onClick={handleToggle}>
            {isActive ? 'Rotate right' : 'Rotate left'}
        </button>

        <div className="counter">{count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </header>
    );
};

Header.propTypes = {
    text: PropTypes.string,
};

export default Header;
