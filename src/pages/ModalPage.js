import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false); 
    
    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Some important modal information!</p>
        </Modal>
    );

    return (
        <div className="relative">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem dui, cursus quis leo ut, viverra iaculis ante. In nec rutrum mauris. Nulla at bibendum sapien. Sed nec magna nec orci tempus pharetra. Proin rutrum, odio malesuada tempus porttitor, ex neque tempus enim, a vulputate orci nisi ac ex. Aenean consequat, quam nec laoreet feugiat, dui urna mollis velit, at hendrerit ante orci sed magna. Aliquam pellentesque accumsan tortor, sed laoreet nunc dignissim a. Nulla ut diam et purus porta commodo. Fusce posuere, felis vitae convallis ornare, ex nibh viverra tellus, consequat suscipit est neque vel dolor. Quisque et dui ut diam cursus malesuada. Fusce eget bibendum nibh.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem dui, cursus quis leo ut, viverra iaculis ante. In nec rutrum mauris. Nulla at bibendum sapien. Sed nec magna nec orci tempus pharetra. Proin rutrum, odio malesuada tempus porttitor, ex neque tempus enim, a vulputate orci nisi ac ex. Aenean consequat, quam nec laoreet feugiat, dui urna mollis velit, at hendrerit ante orci sed magna. Aliquam pellentesque accumsan tortor, sed laoreet nunc dignissim a. Nulla ut diam et purus porta commodo. Fusce posuere, felis vitae convallis ornare, ex nibh viverra tellus, consequat suscipit est neque vel dolor. Quisque et dui ut diam cursus malesuada. Fusce eget bibendum nibh.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem dui, cursus quis leo ut, viverra iaculis ante. In nec rutrum mauris. Nulla at bibendum sapien. Sed nec magna nec orci tempus pharetra. Proin rutrum, odio malesuada tempus porttitor, ex neque tempus enim, a vulputate orci nisi ac ex. Aenean consequat, quam nec laoreet feugiat, dui urna mollis velit, at hendrerit ante orci sed magna. Aliquam pellentesque accumsan tortor, sed laoreet nunc dignissim a. Nulla ut diam et purus porta commodo. Fusce posuere, felis vitae convallis ornare, ex nibh viverra tellus, consequat suscipit est neque vel dolor. Quisque et dui ut diam cursus malesuada. Fusce eget bibendum nibh.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem dui, cursus quis leo ut, viverra iaculis ante. In nec rutrum mauris. Nulla at bibendum sapien. Sed nec magna nec orci tempus pharetra. Proin rutrum, odio malesuada tempus porttitor, ex neque tempus enim, a vulputate orci nisi ac ex. Aenean consequat, quam nec laoreet feugiat, dui urna mollis velit, at hendrerit ante orci sed magna. Aliquam pellentesque accumsan tortor, sed laoreet nunc dignissim a. Nulla ut diam et purus porta commodo. Fusce posuere, felis vitae convallis ornare, ex nibh viverra tellus, consequat suscipit est neque vel dolor. Quisque et dui ut diam cursus malesuada. Fusce eget bibendum nibh.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem dui, cursus quis leo ut, viverra iaculis ante. In nec rutrum mauris. Nulla at bibendum sapien. Sed nec magna nec orci tempus pharetra. Proin rutrum, odio malesuada tempus porttitor, ex neque tempus enim, a vulputate orci nisi ac ex. Aenean consequat, quam nec laoreet feugiat, dui urna mollis velit, at hendrerit ante orci sed magna. Aliquam pellentesque accumsan tortor, sed laoreet nunc dignissim a. Nulla ut diam et purus porta commodo. Fusce posuere, felis vitae convallis ornare, ex nibh viverra tellus, consequat suscipit est neque vel dolor. Quisque et dui ut diam cursus malesuada. Fusce eget bibendum nibh.</p>
            
            <Button onClick={handleClick} primary>Open modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;