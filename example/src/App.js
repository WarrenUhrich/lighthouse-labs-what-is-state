import './App.css';

import React, { useState } from 'react';

import HelloWorld from './components/HelloWorld';
import SayHello from './components/SayHello';
import ContentBlock from './components/ContentBlock';
import Timer from './components/Timer';
import Counter from './components/Counter';
import ChangePageHeading from './components/ChangePageHeading';

function App() {
  const [heading, setHeading] = useState('Cool React App');

  return (
    <div>
      <h1>{heading}</h1>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />

      <ChangePageHeading
        heading={heading}
        setHeading={setHeading}
      />

      {/* <Timer /> */}

      <ContentBlock
        title="React"
        description="React is a JS library for building component-based web UIs."
      />
      <ContentBlock
        title="jQuery"
        description="jQuery is a JS library for easy web page DOM manipulation using JS."
      />
      {/*{ContentBlock({
        title: 'React',
        description: 'React is a JS library for building component-based web UIs.'
      })}
      {ContentBlock({
        title: 'jQuery',
        description: 'jQuery is a JS library for easy web page DOM manipulation using JS.'
      })}*/}
      {/*
        * Components are just functions!
        * We can pass arguments!
        */}
      {SayHello('World')}
      {SayHello('Lighthouse Labs')}
      {SayHello('Neeha')}
      {SayHello('Katelynn')}

      {/*
        * Components are just functions!
        * We can run them, and they return JSX.
        */}
      {HelloWorld()}
      {HelloWorld()}
      {HelloWorld()}
    </div>
  );
}

export default App;
