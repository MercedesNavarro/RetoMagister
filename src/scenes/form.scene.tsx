import React from 'react';
import { Step1Component, MenuComponent } from '../pods';

export const FormScene: React.FC = () => {
  return (
    <main>
      <menu className="menu">
        <MenuComponent></MenuComponent>
      </menu>
      <section className="form">
        <Step1Component></Step1Component>
      </section>
    </main>
  );
};
