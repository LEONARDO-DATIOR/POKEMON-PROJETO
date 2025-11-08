import { BrowserRouter, Routes, Route } from "react-router"
import { TodosPersonagensPage } from "../pages/TodosPersonagensPage"
import { AppLayout } from "../Layout/AppLayout"
import { TodasMagias } from "../pages/TodasMagias"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route path='' element={<TodosPersonagensPage />} />
                    <Route path='magias' element={<TodasMagias />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}