import { withStorageListener } from "../utils/withStorageListener";

function ChangeAlert ({ show, toggleShow }) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={ toggleShow(false) }>Volver a cargar la informacion</button>
            </div>
        );
    }else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener }