import '../node_modules/bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div>Personal Digital Assistance</div>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage} 
                            description="Alexa ncjkadsvnclascl"/>
                        <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description="Cortana nskfjvdslwnlbnl" />
                        <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImage}
                            description="Siri fwedjnvjwnv jenj" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;