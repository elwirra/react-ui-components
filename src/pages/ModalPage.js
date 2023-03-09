import Modal from "../components/Modal";

function ModalPage({children}) {
    return (
        <div>
            <Modal>{children}</Modal>
        </div>
    );
}

export default ModalPage;