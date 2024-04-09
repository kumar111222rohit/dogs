import React from 'react';

import './Modal.css';
import { Button } from '../Button/Button';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  modalHeader: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  modalHeader,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-header">
          <div className="modal-header-text">{modalHeader}</div>
        <Button
          customClass="modal-close-btn"
          onClick={onClose}
          aria-label="Modal close"
          btnLabel="Close"
        />
      </div>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
