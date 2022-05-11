import { useState } from "react";

function withStorageListener(WrapperComponent) {
    return function WrapperComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false);
        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V2') {
                console.log('hubo cambios en TODOS_V2');
                setStorageChange(true);
            }
        });
        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false);
        }
        return (
            <WrapperComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        );
    }
}
export { withStorageListener }