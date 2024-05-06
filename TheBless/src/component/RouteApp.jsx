import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App'
import Modal from '../component/Modal'

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