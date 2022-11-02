import './appPleasureOurCoffee.scss'
import AppMenu from "../../../../components/appMenu/AppMenu";

function AppPleasureOurCoffee({dataOutCoffee}) {
    const {icon, title} = dataOutCoffee[0]
    console.log()
    return (
        <div className="appPleasureOurCoffee">
            <AppMenu icon={icon.icon}/>
            <h1>{title}</h1>
        </div>
    );
}

export default AppPleasureOurCoffee;