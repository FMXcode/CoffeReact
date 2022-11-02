import './appPleasureFilter.scss';
import AppFiterInput from "./appFilterComponents/appFilterInput/AppFiterInput";
import AppFilterButtons from "./appFilterComponents/appFilterButtons/AppFilterButtons";


function AppPleasureFilter(props) {
    return (
        <div className="appPleasureFilter">
            <AppFiterInput/>
            <AppFilterButtons/>
        </div>
    );
}

export default AppPleasureFilter;