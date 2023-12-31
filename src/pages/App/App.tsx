import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Router} from '@/routes/Router'
import {AuthProvider} from "@/provider/Auth";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </AuthProvider>
    )
}
