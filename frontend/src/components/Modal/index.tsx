interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

export default function Modal({
  modalOpen,
  setModalOpen,
  children,
}: ModalProps) {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          htmlFor="my-modal-3"
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => setModalOpen(false)}
        >
          X
        </label>
        {children}
      </div>
    </div>
  );
}
