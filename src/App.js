import { useState } from "react";
import Dropdown from "./components/Dropdown";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'}
    ]
    return (
        <div> 
            <div>App</div>
                <ButtonPage />
                <AccordionPage />
                <div className="flex">
                    <Dropdown 
                        options={options}
                        value={selection}
                        onChange={handleSelection}/>
                    <Dropdown 
                        options={options}
                        value={selection}
                        onChange={handleSelection}/>
                </div>
            </div>
    );
}

export default App;