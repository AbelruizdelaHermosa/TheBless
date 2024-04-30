import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App'

function RouteApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={ <App /> } />
            </Routes>
        </Router>
    )
}

export default RouteApp;