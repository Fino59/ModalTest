import React from 'react'

import xIcon from '../../assets/images/X.png'
import './Modal.component.css';

interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
    const overlayRef = React.useRef(null);

    const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    }

    return isOpen ? (
        <div className={'modal'}>
            <div 
                className={'modal__overlay'}
                ref={overlayRef} 
                onClick={handleOverlayClick} 
            />
            <div className={'modal__box'}>
                <button 
                    className={'modal__close'}
                    onClick={onClose}
                >
                    <img src={xIcon} alt={'close modal'} />
                </button>
                <div className={'modal__title'}>
                    {title}
                </div>
                <div className={'modal__content'}>
                    {children}
                </div>
            </div>
        </div>    
    ) : null;
}