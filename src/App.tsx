import React from 'react'
import { Layout } from 'antd'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import { Route, Routes } from 'react-router-dom'
import GameExplorerPage from './pages/GameExplorerPage'

function App() {
    return (
        <Layout className="App">
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<GameExplorerPage/>} />
            </Routes>
        </Layout>
    )
}

export default App
