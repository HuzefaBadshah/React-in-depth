import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import inputContext from "./src/context/inputContext";
// import AboutClass from "./src/components/About";

const AboutClass = lazy(() => import('./src/components/About'));

const AppLayout = () => {
    const [contextInput, setContextInput] = useState('');
    const { contextInputValue } = useContext(inputContext)
    return (
        <div className="app">
            <Header />
            <input style={{ border: '1px solid blue', padding: '5px', color: 'red', marginTop: '20px' }} type="text" onChange={(e) => setContextInput(e.target.value)} value={contextInput} />
            <inputContext.Provider value={{ contextInputValue: contextInput || contextInputValue }}>
                <Outlet />
            </inputContext.Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={'Shimmer/Loader'}>
                    <AboutClass name="Huzefa" location="Chennai" />
                </Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/menu/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);