import { BrowserRouter, Routes, Route } from "react-router"
import { TodosPersonagensPage } from "../pages/TodosPersonagensPage"
import { AppLayout } from "../Layout/AppLayout"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route path='test' element={<TodosPersonagensPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}