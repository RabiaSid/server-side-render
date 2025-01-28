import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import AppHome from '../pages/home';
import Contact from '../pages/contact';
import Blog from '../pages/blog';
import Feature from '../pages/feature';
import Pricing from '../pages/pricing';
import Service from '../pages/service';
import Team from '../pages/team';

export default function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<AppHome />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/feature" element={<Feature />}></Route>
            <Route path="/pricing" element={<Pricing />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/team" element={<Team />}></Route>
        </Routes>
    )
}

