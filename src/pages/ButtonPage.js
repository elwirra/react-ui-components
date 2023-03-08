import { GoBell, GoDatabase, GoCloudDownload } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        console.log('Click');
    };

    return (
        <div> 
            <div><Button className="mb-5" success rounded onClick={handleClick}>
                <GoBell />Click me!</Button></div>
            <div><Button danger>
                <GoDatabase />Buy now!</Button></div>
            <div><Button warning>
                <GoCloudDownload />See deal!</Button></div>
            <div><Button primary>Hide Ads</Button></div>
            <div><Button secondary rounded>Submit</Button></div>
        </div>
    );
}

export default ButtonPage;