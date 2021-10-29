import React from 'react';
import { Modal } from './components/Modal/Modal.component';
import logo from './assets/images/deftones.png';

import './App.css';

export const App = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className={'app'}>
      <img 
        src={logo} 
        className={'app__logo'} 
        alt={'logo'} 
      />
      <button 
        className={'app__btn'}
        onClick={toggleModal}
      >
       Click
      </button>
      <Modal
        title={'Modal title'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >        
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, modi nobis omnis veritatis culpa earum soluta aperiam aliquam cupiditate doloribus iusto, quisquam hic molestiae deleniti temporibus vitae incidunt maiores fuga!
      </Modal>
    </div>
  );
}


