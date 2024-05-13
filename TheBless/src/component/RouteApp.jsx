import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App'
import StageOne from '../component/Stages/Stage1'

function RouteApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={ <App /> } />
                <Route path="/stage1" element={ <StageOne /> } />
            </Routes>
        </Router>
    )
}

export default RouteApp;